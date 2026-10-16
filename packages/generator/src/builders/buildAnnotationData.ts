/* eslint-disable complexity */

import util from 'node:util';
import { fromCodepointToUnicode, fromHexcodeToCodepoint, type Locale } from 'emojibase';
import {
	FACING_LEFT_PATTERN,
	FACING_RIGHT_PATTERN,
	INHERIT_PARENT_SYMBOL,
	MULTI_PERSON_SKIN_TONE_PATTERN,
	REGIONAL_INDICATORS,
	TAG_LATIN_SMALL_LETTERS,
} from '../constants';
import { hasProperty } from '../helpers/hasProperty';
import { isHidden } from '../helpers/isHidden';
import { log } from '../helpers/log';
import { readCache } from '../helpers/readCache';
import { toAnnotationKey } from '../helpers/toAnnotationKey';
import { assertNoFailures, reportFailure } from '../helpers/validation';
import { writeCache } from '../helpers/writeCache';
import { loadAnnotations } from '../loaders/loadAnnotations';
import { loadData } from '../loaders/loadData';
import { loadLocaleChain } from '../loaders/loadLocaleChain';
import { loadLocalization } from '../loaders/loadLocalization';
import { loadPoMessages } from '../loaders/loadPoMessages';
import { loadSequences } from '../loaders/loadSequences';
import { loadZwjSequences } from '../loaders/loadZwjSequences';
import type { CLDRAnnotation, CLDRAnnotationMap, EmojiDataMap } from '../types';
import { joinData } from './joinData';

// function doesSequenceMatch(a: string[], b: string[]): boolean {
//   // eslint-disable-next-line unicorn/no-for-loop
//   for (let i = 0; i < a.length; i += 1) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// function removeFromSequence(sequence: string[], innerSequence: string[]): string[] {
//   const next: string[] = [];

//   for (let i = 0; i < sequence.length; i += 1) {
//     const item = sequence[i];

//     if (
//       item === innerSequence[0] &&
//       doesSequenceMatch(sequence.slice(i, innerSequence.length + 1), innerSequence)
//     ) {
//       i += innerSequence.length - 1;
//     } else {
//       next.push(item);
//     }
//   }

//   return next;
// }

function joinAnnotationWithLabel(annotation: string, label: string): string {
	if (!annotation.includes(':')) {
		return label.replace('{0}', annotation);
	}

	const [prefix, suffix] = annotation.split(':');

	return `${label.replace('{0}', prefix)}:${suffix}`;
}

// Fills a CLDR character label pattern, such as "{0}: {1}"
function formatPattern(pattern: string, ...values: (string | undefined)[]): string {
	if (values.some((value) => !value)) {
		return '';
	}

	return values.reduce<string>(
		(result, value, index) => result.replace(`{${index}}`, value!),
		pattern,
	);
}

export async function buildAnnotationData(locale: Locale): Promise<CLDRAnnotationMap> {
	const cache = readCache<CLDRAnnotationMap>(`final/${locale}-annotation-data.json`);

	if (cache) {
		return cache;
	}

	log.title('build', `Building ${locale} annotation data`);

	const data: CLDRAnnotationMap = {};
	const localization = await loadLocalization(locale);
	const translations = await loadPoMessages(locale);
	const chain = await loadLocaleChain(locale);

	// Explicit annotations come before derived ones, for each locale in the chain
	// http://unicode.org/reports/tr35/tr35-general.html#SynthesizingNames
	const loadSets = async (ids: string[]) =>
		(
			await Promise.all(
				ids.map(async (id) => [await loadAnnotations(id), await loadAnnotations(id, true)]),
			)
		).flat();
	const sets = await loadSets(chain);
	const englishSets = chain.includes('en') ? [] : await loadSets(['en']);
	const englishFallbacks: string[] = [];

	// Names and keywords inherit on their own, so a locale that only overrides
	// one of them still inherits the other from its parents
	// http://unicode.org/reports/tr35/#Resolved_Data_File
	function extractField<K extends 'annotation' | 'tags'>(
		hexcode: string,
		field: K,
		from: CLDRAnnotationMap[] = sets,
	): CLDRAnnotation[K] | null {
		for (const set of from) {
			const value = set[hexcode]?.[field];

			if (value && value.length > 0 && !value.includes(INHERIT_PARENT_SYMBOL)) {
				return value;
			}
		}

		return null;
	}

	// Flags and keycaps are named from their parts when CLDR has no name for them
	// http://unicode.org/reports/tr35/tr35-general.html#SynthesizingNames
	const synthesize = (labelType: 'flag' | 'keycap', value: string | undefined) =>
		formatPattern(
			localization.labelPatterns['category-list'],
			localization.labels[labelType],
			value,
		);

	const sequences: EmojiDataMap = {};

	joinData(sequences, await loadData());
	joinData(sequences, await loadSequences());
	joinData(sequences, await loadZwjSequences());

	Object.keys(sequences).forEach((fullHexcode) => {
		const hexcode = toAnnotationKey(fullHexcode);
		const emoji = sequences[fullHexcode];
		let tags: string[] = extractField(hexcode, 'tags') ?? [];
		let annotation: string = extractField(hexcode, 'annotation') ?? '';

		// Multi-person skin tones require special attention
		// https://github.com/milesj/emojibase/issues/42
		if (!annotation && fullHexcode.match(MULTI_PERSON_SKIN_TONE_PATTERN)) {
			const hexcodeParts = hexcode.split('-');
			const inverseHexcode = [
				...hexcodeParts.slice(-2),
				...hexcodeParts.slice(2, -2),
				...hexcodeParts.slice(0, 2),
			].join('-');

			annotation = extractField(inverseHexcode, 'annotation') ?? '';
		}

		// When facing a direction, inherit the annotation from the base emoji
		// http://unicode.org/reports/tr51/#Direction
		if (!annotation && fullHexcode.match(FACING_RIGHT_PATTERN)) {
			annotation = joinAnnotationWithLabel(
				extractField(
					toAnnotationKey(fullHexcode.replace(FACING_RIGHT_PATTERN, '')),
					'annotation',
				) ?? '',
				localization.labelPatterns['facing-right'],
			);
		}

		if (!annotation && fullHexcode.match(FACING_LEFT_PATTERN)) {
			annotation = joinAnnotationWithLabel(
				extractField(toAnnotationKey(fullHexcode.replace(FACING_LEFT_PATTERN, '')), 'annotation') ??
					'',
				localization.labelPatterns['facing-left'],
			);
		}

		// 1) Use the localized territory name
		if (hasProperty(emoji.property, ['Emoji_Flag_Sequence', 'RGI_Emoji_Flag_Sequence'])) {
			const countryCode = fullHexcode
				.split('-')
				.map((hex: string) => REGIONAL_INDICATORS[hex])
				.join('');

			annotation ||= synthesize('flag', localization.territories[countryCode]);
			tags = tags.length > 0 ? tags : [localization.labels.flag];
			tags.push(countryCode);

			// 2) Use the localized subdivision name
		} else if (hasProperty(emoji.property, ['Emoji_Tag_Sequence', 'RGI_Emoji_Tag_Sequence'])) {
			const divisionName = hexcode
				.split('-')
				.map((hex: string) => TAG_LATIN_SMALL_LETTERS[hex])
				.join('');

			annotation ||= synthesize('flag', localization.subdivisions[divisionName]);
			tags = tags.length > 0 ? tags : [localization.labels.flag];
			tags.push(divisionName);

			// 3) Label with keycap and use the key itself
		} else if (
			hasProperty(emoji.property, ['Emoji_Keycap_Sequence']) ||
			emoji.hexcode === '1F51F' // Keycap 10
		) {
			annotation ||= synthesize(
				'keycap',
				emoji.hexcode === '1F51F'
					? '10'
					: fromCodepointToUnicode(fromHexcodeToCodepoint(fullHexcode.split('-')[0])),
			);
			tags = tags.length > 0 ? tags : [localization.labels.keycap];

			// 4-7) ZWJ sequences inherit tags if none were defined
		} else if (hasProperty(emoji.property, ['Emoji_ZWJ_Sequence', 'RGI_Emoji_ZWJ_Sequence'])) {
			if (tags.length === 0) {
				hexcode.split('-').forEach((hex: string) => {
					tags.push(...(extractField(hex, 'tags') ?? []));
				});
			}

			// SPECIAL CASE: Not localized in CLDR because indicators should be hidden,
			// but we're going to support them.
		} else if (REGIONAL_INDICATORS[hexcode]) {
			annotation = util.format(
				translations.getMessage('regional indicator %s'),
				REGIONAL_INDICATORS[hexcode],
			);
			tags = [];
		}

		if (!annotation && !isHidden(emoji)) {
			// A single character can't be synthesized, so use English as a last resort, and say so
			if (!hexcode.includes('-')) {
				annotation = extractField(hexcode, 'annotation', englishSets) ?? '';

				if (annotation) {
					tags = tags.length > 0 ? tags : (extractField(hexcode, 'tags', englishSets) ?? []);
					englishFallbacks.push(`${annotation} (${fullHexcode})`);
				}
			}

			// CLDR names every sequence, so a missing name is a bug to fix rather than hide
			if (!annotation) {
				reportFailure(
					'build',
					`Missing ${locale} annotation for "${emoji.description}" (${fullHexcode}) [${hexcode}]`,
				);
			}
		}

		// Add the new custom annotation
		data[hexcode] = {
			annotation,
			tags: [...new Set(tags)],
		};
	});

	if (englishFallbacks.length > 0) {
		log.warn('build', `No ${locale} CLDR name, using English for:`, englishFallbacks.join(', '));
	}

	assertNoFailures(`Building ${locale} annotation data`);

	await writeCache(`final/${locale}-annotation-data.json`, data);

	log.success('build', `Built ${locale} annotation data`);

	return data;
}
