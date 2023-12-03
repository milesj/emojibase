/* eslint-disable complexity */

import util from 'node:util';
import { Locale, stripHexcode } from 'emojibase';
import {
	FACING_LEFT_PATTERN,
	FACING_RIGHT_PATTERN,
	INHERIT_PARENT_SYMBOL,
	MULTI_PERSON_SKIN_TONE_PATTERN,
	REGIONAL_INDICATORS,
	TAG_LATIN_SMALL_LETTERS,
} from '../constants';
import { hasProperty } from '../helpers/hasProperty';
import { log } from '../helpers/log';
import { readCache } from '../helpers/readCache';
import { writeCache } from '../helpers/writeCache';
import { loadAnnotations } from '../loaders/loadAnnotations';
import { loadData } from '../loaders/loadData';
import { loadLocalization } from '../loaders/loadLocalization';
import { loadPoMessages } from '../loaders/loadPoMessages';
import { loadSequences } from '../loaders/loadSequences';
import { loadZwjSequences } from '../loaders/loadZwjSequences';
import { CLDRAnnotation, CLDRAnnotationMap } from '../types';

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

export async function buildAnnotationData(locale: Locale): Promise<CLDRAnnotationMap> {
	const cache = readCache<CLDRAnnotationMap>(`final/${locale}-annotation-data.json`);

	if (cache) {
		return cache;
	}

	log.title('build', `Building ${locale} annotation data`);

	// Load the base annotations and localization datasets
	const data: CLDRAnnotationMap = {};
	const localization = await loadLocalization(locale);
	const englishAnnotations = await loadAnnotations('en'); // Fallback to English
	const annotations = await loadAnnotations(locale);
	const annotationsDerived = await loadAnnotations(locale, true); // Modifiers and sequences
	const translations = await loadPoMessages(locale);
	let parentAnnotations: CLDRAnnotationMap = {};
	let parentAnnotationsDerived: CLDRAnnotationMap = {};

	if (locale.includes('-')) {
		const parentLocale = String(locale.split('-')[0]);

		parentAnnotations = await loadAnnotations(parentLocale);
		parentAnnotationsDerived = await loadAnnotations(parentLocale, true);
	}

	function extractField<K extends 'annotation' | 'tags'>(
		hexcode: string,
		field: K,
	): CLDRAnnotation[K] | null {
		const sets = [
			annotationsDerived,
			annotations,
			parentAnnotationsDerived,
			parentAnnotations,
			englishAnnotations,
		];

		for (let i = 0, set; i < sets.length; i += 1) {
			set = sets[i]!;

			if (set?.[hexcode]?.[field]) {
				const value = set[hexcode][field];

				if (
					(typeof value === 'string' && value !== INHERIT_PARENT_SYMBOL) ||
					(Array.isArray(value) && !value.includes(INHERIT_PARENT_SYMBOL))
				) {
					return value;
				}
			}
		}

		return null;
	}

	// http://unicode.org/reports/tr35/tr35-general.html#SynthesizingNames
	// ZWJ and Flag sequences do not have annotations, so let's add them
	const sequences = {
		...(await loadData()),
		...(await loadSequences()),
		...(await loadZwjSequences()),
	};

	Object.keys(sequences).forEach((fullHexcode) => {
		const hexcode = stripHexcode(fullHexcode);
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
				extractField(hexcode.replace(FACING_RIGHT_PATTERN, ''), 'annotation') ?? '',
				localization.labels['facing-right'],
			);
		}

		if (!annotation && fullHexcode.match(FACING_LEFT_PATTERN)) {
			annotation = joinAnnotationWithLabel(
				extractField(hexcode.replace(FACING_LEFT_PATTERN, ''), 'annotation') ?? '',
				localization.labels['facing-left'],
			);
		}

		// 1) Use the localized territory name
		if (hasProperty(emoji.property, ['Emoji_Flag_Sequence', 'RGI_Emoji_Flag_Sequence'])) {
			const countryCode = fullHexcode
				.split('-')
				.map((hex: string) => REGIONAL_INDICATORS[hex])
				.join('');

			if (!annotation) {
				annotation = localization.territories[countryCode];
			}

			tags.push(countryCode);

			// 2) Use the localized subdivision name
		} else if (hasProperty(emoji.property, ['Emoji_Tag_Sequence', 'RGI_Emoji_Tag_Sequence'])) {
			const divisionName = hexcode
				.split('-')
				.map((hex: string) => TAG_LATIN_SMALL_LETTERS[hex])
				.join('');

			if (!annotation) {
				annotation = localization.subdivisions[divisionName];
			}

			tags.push(divisionName);

			// 3) Label with keycap and use sequence
		} else if (
			hasProperty(emoji.property, ['Emoji_Keycap_Sequence']) ||
			emoji.hexcode === '1F51F' // Keycap 10
		) {
			if (!annotation) {
				annotation = emoji.description;
			}

			tags.push(annotation);

			// 4-7) ZWJ sequences require special treatment
		} else if (hasProperty(emoji.property, ['Emoji_ZWJ_Sequence', 'RGI_Emoji_ZWJ_Sequence'])) {
			// Inherit tags if none were defined
			if (tags.length === 0) {
				hexcode.split('-').forEach((hex: string) => {
					tags.push(...(extractField(hex, 'tags') ?? []));
				});
			}

			// The TR35 instructions are super confusing, but we really don't need to follow them
			// since most (if not all) of our emoji already have annotations. This will catch the
			// few that were missed and we can fix accordingly.
			if (!annotation) {
				log.error(
					'build',
					`Missing ${locale} ZWJ annotations for "${emoji.description}" (${emoji.hexcode}) [${hexcode}]`,
				);
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

		// Add the new custom annotation
		data[hexcode] = {
			annotation,
			tags: [...new Set(tags)],
		};
	});

	await writeCache(`final/${locale}-annotation-data.json`, data);

	log.success('build', `Built ${locale} annotation data`);

	return data;
}
