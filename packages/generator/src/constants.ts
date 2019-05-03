/* eslint-disable sort-keys */

import { Property } from './types';

// Regex patterns to make my job easier

export const ZWJ_PATTERN = /200D/g;
export const GENDER_PATTERN = /(2640|2642)/g;
export const PERSON_TYPE_PATTERN = /(1F9D1|1F468|1F469)/g; // person|man|woman
export const VARIATION_PATTERN = /(FE0E|FE0F)/g;
export const SKIN_MODIFIER_PATTERN = /(1F3FB|1F3FC|1F3FD|1F3FE|1F3FF)/g;
export const SEQUENCE_REMOVAL_PATTERN = /(200D|FE0E|FE0F)/g;
export const MULTI_PERSON_SKIN_TONE_PATTERN = new RegExp(
  [
    PERSON_TYPE_PATTERN.source,
    SKIN_MODIFIER_PATTERN.source,
    ZWJ_PATTERN.source,
    '([A-F0-9]{4,5})',
    ZWJ_PATTERN.source,
    PERSON_TYPE_PATTERN.source,
    SKIN_MODIFIER_PATTERN.source,
  ].join('-'),
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

// Emoji groups that should be omitted from the final output
export const HIDDEN_GROUPS = ['component'];
export const HIDDEN_SUBGROUPS = ['skin-tone', 'hair-style'];

// Emoji property types that should be omitted from the final dataset
export const HIDDEN_EMOJI_PROPERTIES: Property[] = [
  'Emoji_Modifier',
  'Emoji_Component',
  'Extended_Pictographic',
  'Regional_Indicator',
];

export const REGIONAL_INDICATORS: { [hexcode: string]: string } = {
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

export const TAG_LATIN_SMALL_LETTERS: { [hexcode: string]: string } = {
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
