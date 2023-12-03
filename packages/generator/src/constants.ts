/* eslint-disable sort-keys, unicorn/better-regex */

import { Locale } from 'emojibase';
import { Property } from './types';

export const INHERIT_PARENT_SYMBOL = '↑↑↑';

// Regex patterns to make my job easier

export const ZWJ_PATTERN = /200D/g;
export const GENDER_PATTERN = /(2640|2642)/g;
export const PERSON_TYPE_PATTERN = /(1F9D1|1F468|1F469)/g; // person|man|woman
export const VARIATION_PATTERN = /(FE0E|FE0F)/g;
export const VARIATION_NC_PATTERN = /(?:FE0E|FE0F)/g;
export const SKIN_MODIFIER_PATTERN = /(1F3FB|1F3FC|1F3FD|1F3FE|1F3FF)/g;
export const SEQUENCE_REMOVAL_PATTERN = /(200D|FE0E|FE0F)/g;
export const FACING_RIGHT_PATTERN = /-27A1(-FE0F)?$/;
export const FACING_LEFT_PATTERN = /-2B05(-FE0F)?$/;

export const MULTI_PERSON_SKIN_TONE_PATTERN = new RegExp(
	[
		PERSON_TYPE_PATTERN.source,
		'-',
		SKIN_MODIFIER_PATTERN.source,
		'-',
		ZWJ_PATTERN.source,
		'-',
		`(?:([A-F0-9]{4,5}(?:-(?:${VARIATION_NC_PATTERN.source}))?)-${ZWJ_PATTERN.source}-)`,
		`(?:([A-F0-9]{4,5}(?:-(?:${VARIATION_NC_PATTERN.source}))?)-${ZWJ_PATTERN.source}-)?`,
		PERSON_TYPE_PATTERN.source,
		'-',
		SKIN_MODIFIER_PATTERN.source,
	].join(''),
);

export const HANDSHAKE_MIXED_SKIN_TONE_PATTERN = new RegExp(
	[
		'1FAF1', // Rightwards hand
		'-',
		SKIN_MODIFIER_PATTERN.source,
		'-',
		ZWJ_PATTERN.source,
		'-',
		'1FAF2', // Leftwards hand
		'-',
		SKIN_MODIFIER_PATTERN.source,
	].join(''),
);

// Important hexadecimal codepoints when dealing with diversity, sequences, and more

export const ZERO_WIDTH_JOINER = '200D'; // ZERO WIDTH JOINER (ZWJ)
export const TEXT_VARIATION_SELECTOR = 'FE0E'; // VARIATION SELECTOR-15
export const EMOJI_VARIATION_SELECTOR = 'FE0F'; // VARIATION SELECTOR-16
export const LIGHT_SKIN_MODIFIER = '1F3FB'; // EMOJI MODIFIER FITZPATRICK TYPE-1-2
export const MEDIUM_LIGHT_SKIN_MODIFIER = '1F3FC'; // EMOJI MODIFIER FITZPATRICK TYPE-3
export const MEDIUM_SKIN_MODIFIER = '1F3FD'; // EMOJI MODIFIER FITZPATRICK TYPE-4
export const MEDIUM_DARK_SKIN_MODIFIER = '1F3FE'; // EMOJI MODIFIER FITZPATRICK TYPE-5
export const DARK_SKIN_MODIFIER = '1F3FF'; // EMOJI MODIFIER FITZPATRICK TYPE-6
export const FEMALE_SIGN = '2640'; // FEMALE SIGN
export const MALE_SIGN = '2642'; // MALE SIGN
export const BLACK_FLAG = '1F3F4'; // WAVING BLACK FLAG
export const PERSON = '1F9D1'; // PERSON
export const MAN = '1F468'; // MAN
export const WOMAN = '1F469'; // WOMAN
export const DIR_RIGHT = '27A1'; // BLACK RIGHTWARDS ARROW
export const DIR_LEFT = '2B05'; // BLACK LEFTWARDS ARROW

// Emoji groups that should be omitted from the final output
export const HIDDEN_GROUPS: string[] = [];
export const HIDDEN_SUBGROUPS: string[] = [];

// Emoji property types that should be omitted from the final dataset
export const HIDDEN_EMOJI_PROPERTIES: Property[] = [
	'Emoji_Modifier',
	'Emoji_Component',
	'Extended_Pictographic',
	'Regional_Indicator',
];

// Mapping to support skin tones and genders within MPG
// http://unicode.org/reports/tr51/#Multi_Person_Groupings
export const MULTI_PERSON_GROUPING_HEXCODES = [
	// Holding hands
	{
		type: ['1F91D'], // handshake
		parentBoth: '1F46B', // woman and man holding hands
		parentMen: '1F46C', // men holding hands
		parentWomen: '1F46D', // women holding hands
		parentOther: '1F9D1-200D-1F91D-200D-1F9D1', // people holding hands
	},
	// Couple with heart
	{
		type: ['2764-FE0F'], // red heart
		parentBoth: '1F469-200D-2764-FE0F-200D-1F468', // couple with heart: woman, man
		parentMen: '1F468-200D-2764-FE0F-200D-1F468', // couple with heart: man, man
		parentWomen: '1F469-200D-2764-FE0F-200D-1F469', // couple with heart: woman, woman
		parentOther: '1F491', // couple with heart
	},
	// Kiss
	{
		type: ['2764-FE0F', '1F48B'], // red heart + kiss mark
		parentBoth: '1F469-200D-2764-FE0F-200D-1F48B-200D-1F468', // kiss: woman, man
		parentMen: '1F468-200D-2764-FE0F-200D-1F48B-200D-1F468', // kiss: man, man
		parentWomen: '1F469-200D-2764-FE0F-200D-1F48B-200D-1F469', // kiss: woman, woman
		parentOther: '1F48F', // kiss
	},
];

export const REGIONAL_INDICATORS: Record<string, string> = {
	'1F1E6': 'A',
	'1F1E7': 'B',
	'1F1E8': 'C',
	'1F1E9': 'D',
	'1F1EA': 'E',
	'1F1EB': 'F',
	'1F1EC': 'G',
	'1F1ED': 'H',
	'1F1EE': 'I',
	'1F1EF': 'J',
	'1F1F0': 'K',
	'1F1F1': 'L',
	'1F1F2': 'M',
	'1F1F3': 'N',
	'1F1F4': 'O',
	'1F1F5': 'P',
	'1F1F6': 'Q',
	'1F1F7': 'R',
	'1F1F8': 'S',
	'1F1F9': 'T',
	'1F1FA': 'U',
	'1F1FB': 'V',
	'1F1FC': 'W',
	'1F1FD': 'X',
	'1F1FE': 'Y',
	'1F1FF': 'Z',
};

export const TAG_LATIN_SMALL_LETTERS: Record<string, string> = {
	E0061: 'a',
	E0062: 'b',
	E0063: 'c',
	E0064: 'd',
	E0065: 'e',
	E0066: 'f',
	E0067: 'g',
	E0068: 'h',
	E0069: 'i',
	E006A: 'j',
	E006B: 'k',
	E006C: 'l',
	E006D: 'm',
	E006E: 'n',
	E006F: 'o',
	E0070: 'p',
	E0071: 'q',
	E0072: 'r',
	E0073: 's',
	E0074: 't',
	E0075: 'u',
	E0076: 'v',
	E0077: 'w',
	E0078: 'x',
	E0079: 'y',
	E007A: 'z',
};

export const SHORTCODE_GUIDELINES = `/**
 * Official Emojibase shortcodes list and naming guidelines
 *
 *  - All emoji should have a shortcode that matches or is
 *    relatively close to its annotation.
 *
 *  - All emoji should have at minimum 1 shortcode, and at
 *    max 3 shortcodes. An exception to this rule applies to
 *    extremely common emoji, like "thumbs up".
 *
 *  - For compatibility and consistency with third-party
 *    shortcodes, attempt to adopt common shortcodes from
 *    the community, but not all of them.
 *
 * SMILEYS
 *
 *  - Emoji that are SUFFIXED with "face" should have a shortcode
 *    with the face suffix, and another shorthand equivalent.
 *    Example: "worried_face", "worried"
 *
 * PEOPLE
 *
 *  - Emoji in the form of "person <action>" should also include
 *    shortcodes without the person prefix, in which they denote
 *    verbs/nouns. Example: "person_swimming", "swimming", "swimmer"
 *
 *  - Emoji in the form of "person: <thing>" must omit the person
 *    prefix from the shortcodes.
 *    Example: "red_haired", "man_red_haired", "woman_red_haired"
 *
 *  - Emoji that are SUFFIXED with "person" should be used as is.
 *    If there are man/woman variants, then it _must_ be suffixed.
 *    Example: "deaf_person", "deaf_man", "deaf_woman".
 *
 * ANIMALS
 *
 *  - Emoji that are SUFFIXED with "face" should have a shortcode
 *    with and without the face suffix (if the latter isn't taken).
 *    Example: "bear_face", "bear"
 *    Example (cat taken): "cat_face"
 *
 * WEATHER
 *
 *  - Use a more descriptive term over the annotation if
 *    applicable. For example, "storm" over the annotation
 *    "cloud with lightning and rain".
 *
 * FLAGS
 *
 *  - All countries should have both "flag_<locale>" and "<name>" shortcodes.
 *    Do NOT provide a 2 letter shortcode as it will conflict with many
 *    non-flag shortcodes that also use 2 letters.
 *
 *  - Country shortcodes should prefix with "flag_<name>", while
 *    non-country use a suffix "<name>_flag".
 */`;

export const LOCALE_COUNTRIES: { [K in Locale]: string } = {
	hi: 'Hindi',
	bn: 'Bengali',
	da: 'Danish',
	de: 'German',
	'en-gb': 'English, Great Britain',
	en: 'English',
	'es-mx': 'Spanish, Mexico',
	es: 'Spanish',
	et: 'Estonian',
	fi: 'Finnish',
	fr: 'French',
	hu: 'Hungarian',
	it: 'Italian',
	ja: 'Japanese',
	ko: 'Korean',
	lt: 'Lithuanian',
	ms: 'Malay',
	nb: 'Norwegian, Bokmål',
	nl: 'Dutch',
	pl: 'Polish',
	pt: 'Portuguese',
	ru: 'Russian',
	sv: 'Swedish',
	th: 'Thai',
	uk: 'Ukrainian',
	'zh-hant': 'Chinese, Traditional',
	zh: 'Chinese',
};
