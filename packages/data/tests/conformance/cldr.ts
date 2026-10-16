// An independent CLDR 49 annotation resolver, used as the oracle for UTS #35 conformance tests.
// Nothing here may import from the generator, as that is the code under test.

import {
	fromCodepointToUnicode,
	fromHexcodeToCodepoint,
	fromUnicodeToHexcode,
	type Locale,
} from 'emojibase';
import { toCldrKey } from './unicode';

interface CldrAnnotation {
	default?: string[];
	tts?: string[];
}

type CldrAnnotations = Record<string, CldrAnnotation>;

export interface ResolvedName {
	label: string;
	keywords: string[];
}

// Each emojibase locale's CLDR inheritance chain, from <parentLocales> in CLDR 49
// supplementalData.xml, then truncation (UTS #35 Part 1, Parent_Locales). Root is left out
// on purpose: its annotations are placeholders, and missing names must be synthesized.
export const LOCALE_CHAINS: Record<Locale, string[]> = {
	bn: ['bn'],
	da: ['da'],
	de: ['de'],
	en: ['en'],
	'en-gb': ['en-GB', 'en-001', 'en'],
	es: ['es'],
	'es-mx': ['es-MX', 'es-419', 'es'],
	et: ['et'],
	fi: ['fi'],
	fr: ['fr'],
	hi: ['hi'],
	hu: ['hu'],
	it: ['it'],
	ja: ['ja'],
	ko: ['ko'],
	lt: ['lt'],
	ms: ['ms'],
	nb: ['nb', 'no'],
	nl: ['nl'],
	pl: ['pl'],
	pt: ['pt'],
	ru: ['ru'],
	sv: ['sv'],
	th: ['th'],
	uk: ['uk'],
	vi: ['vi'],
	zh: ['zh'],
	// zh_Hant's parent is root through the nonlikelyScript rule, not zh (Simplified)
	'zh-hant': ['zh-Hant'],
};

const KEYCAP_PATTERN = /^(0023|002A|003\d)-FE0F-20E3$/;
const FLAG_PATTERN = /^(1F1[EF][\dA-F])-(1F1[EF][\dA-F])$/;
const TAG_FLAG_PATTERN = /^1F3F4((?:-E00[2-7][\dA-F])+)-E007F$/;

function tryRequire<T>(id: string): T | undefined {
	try {
		return require(id) as T;
	} catch {
		return undefined;
	}
}

function rekey(annotations: CldrAnnotations = {}): Map<string, CldrAnnotation> {
	const map = new Map<string, CldrAnnotation>();

	Object.entries(annotations).forEach(([cp, value]) => {
		map.set(toCldrKey(fromUnicodeToHexcode(cp, false)), value);
	});

	return map;
}

// The region (e.g. "US") or subdivision (e.g. "gbeng") code of a flag sequence.
export function getFlagCode(
	hexcode: string,
): { type: 'subdivisions' | 'territories'; code: string } | undefined {
	const flag = hexcode.match(FLAG_PATTERN);

	if (flag) {
		// Regional indicators A–Z map onto ASCII A–Z
		return {
			code: fromCodepointToUnicode(
				fromHexcodeToCodepoint(hexcode).map((codepoint) => codepoint - 0x1_f1_e6 + 65),
			),
			type: 'territories',
		};
	}

	const tagFlag = hexcode.match(TAG_FLAG_PATTERN);

	if (tagFlag) {
		// Tag characters mirror ASCII at an offset of E0000
		return {
			code: fromCodepointToUnicode(
				fromHexcodeToCodepoint(tagFlag[1].slice(1)).map((codepoint) => codepoint - 0xe_00_00),
			),
			type: 'subdivisions',
		};
	}

	return undefined;
}

class LocaleBundle {
	// Explicit annotations come before derived ones (UTS #35 Part 2, Synthesizing Sequence Names)
	annotations: Map<string, CldrAnnotation>[];

	characterLabels: Record<string, string>;

	characterLabelPatterns: Record<string, string>;

	subdivisions: Record<string, string>;

	territories: Record<string, string>;

	constructor(id: string) {
		this.annotations = [
			rekey(
				tryRequire<{ annotations: { annotations: CldrAnnotations } }>(
					`cldr-annotations-full/annotations/${id}/annotations.json`,
				)?.annotations.annotations,
			),
			rekey(
				tryRequire<{ annotationsDerived: { annotations: CldrAnnotations } }>(
					`cldr-annotations-derived-full/annotationsDerived/${id}/annotations.json`,
				)?.annotationsDerived.annotations,
			),
		];

		const misc = tryRequire<{
			main: Record<
				string,
				{
					characterLabels?: Record<string, string>;
					characterLabelPatterns?: Record<string, string>;
				}
			>;
		}>(`cldr-misc-full/main/${id}/characterLabels.json`)?.main[id];
		const names = tryRequire<{
			main: Record<string, { localeDisplayNames: { subdivisions?: Record<string, string> } }>;
		}>(`cldr-localenames-full/main/${id}/localeDisplayNames.json`)?.main[id];
		const regions = tryRequire<{
			main: Record<string, { localeDisplayNames: { territories?: Record<string, string> } }>;
		}>(`cldr-localenames-full/main/${id}/territories.json`)?.main[id];

		this.characterLabels = misc?.characterLabels ?? {};
		this.characterLabelPatterns = misc?.characterLabelPatterns ?? {};
		this.subdivisions = names?.localeDisplayNames.subdivisions ?? {};
		this.territories = regions?.localeDisplayNames.territories ?? {};
	}
}

export class CldrOracle {
	bundles: LocaleBundle[];

	constructor(locale: Locale) {
		this.bundles = LOCALE_CHAINS[locale].map((id) => new LocaleBundle(id));
	}

	// Each item inherits on its own: keywords and `tts` are distinct element chains
	// (UTS #35 Part 1, Resolved_Data_File), so a child locale that only overrides
	// the name still inherits its parent's keywords.
	resolveAnnotation(key: string, field: keyof CldrAnnotation): string[] | undefined {
		for (const bundle of this.bundles) {
			for (const annotations of bundle.annotations) {
				const value = annotations.get(key)?.[field];

				if (value && value.length > 0) {
					return value;
				}
			}
		}

		return undefined;
	}

	resolveItem(
		field: 'characterLabelPatterns' | 'characterLabels' | 'subdivisions' | 'territories',
		key: string,
	): string | undefined {
		for (const bundle of this.bundles) {
			if (bundle[field][key]) {
				return bundle[field][key];
			}
		}

		return undefined;
	}

	// Names for flag and keycap sequences that CLDR does not list explicitly
	// (UTS #35 Part 2, Synthesizing Sequence Names, steps 1–3). Flags use the
	// "flag: {name}" shape that CLDR's own derived data uses.
	synthesize(hexcode: string): ResolvedName | undefined {
		const keycap = hexcode.match(KEYCAP_PATTERN);
		const flag = getFlagCode(hexcode);
		let labelType = '';
		let value: string | undefined;

		if (keycap) {
			labelType = 'keycap';
			value = fromCodepointToUnicode(fromHexcodeToCodepoint(keycap[1]));
		} else if (hexcode === '1F51F') {
			labelType = 'keycap';
			value = '10';
		} else if (flag) {
			labelType = 'flag';
			value = this.resolveItem(flag.type, flag.code);
		}

		const label = labelType ? this.resolveItem('characterLabels', labelType) : undefined;
		const pattern = this.resolveItem('characterLabelPatterns', 'category-list');

		if (!label || !value || !pattern) {
			return undefined;
		}

		return {
			keywords: [label],
			label: pattern.replace('{0}', label).replace('{1}', value),
		};
	}
}
