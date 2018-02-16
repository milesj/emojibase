/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable sort-keys */

import type { Gender, PermutationOptions, Presentation, SkinTone } from '../../../src/types';

// Regex patterns to make my job easier.

export const ZWJ_PATTERN: RegExp = /200D/g;
export const GENDER_PATTERN: RegExp = /2640|2642/g;
export const VARIATION_PATTERN: RegExp = /FE0E|FE0F/g;
export const SKIN_MODIFIER_PATTERN: RegExp = /1F3FB|1F3FC|1F3FD|1F3FE|1F3FF/g;
export const SEQUENCE_REMOVAL_PATTERN: RegExp = /200D|FE0E|FE0F/g;

// Use numbers instead of string values, as the filesize is greatly reduced.

export const TEXT: Presentation = 0;
export const EMOJI: Presentation = 1;

export const FEMALE: Gender = 0;
export const MALE: Gender = 1;

export const LIGHT_SKIN: SkinTone = 1;
export const MEDIUM_LIGHT_SKIN: SkinTone = 2;
export const MEDIUM_SKIN: SkinTone = 3;
export const MEDIUM_DARK_SKIN: SkinTone = 4;
export const DARK_SKIN: SkinTone = 5;

// Important release versions and locales in generating accurate data.

export const LATEST_EMOJI_VERSION: string = '5.0';
export const LATEST_UNICODE_VERSION: string = '10.0.0';
export const LATEST_CLDR_VERSION: string = '32';
export const FIRST_UNICODE_EMOJI_VERSION: string = '6.0.0';
export const SUPPORTED_LOCALES: string[] = [
  'da', // Danish
  'de', // German
  'en', // English
  'en-gb', // English (Great Britain)
  'es', // Spanish
  'es-mx', // Spanish (Mexico)
  'fr', // French
  'it', // Italian
  'ja', // Japanese
  'ko', // Korean
  'pl', // Polish
  'pt', // Portuguese
  'ru', // Russian
  'th', // Thai
  'zh', // Chinese
  'zh-hant', // Chinese (Traditional)
];

// Important hexadecimal codepoints when dealing with diversity, sequences, and more.

export const ZERO_WIDTH_JOINER: string = '200D'; // ZERO WIDTH JOINER (ZWJ)
export const TEXT_VARIATION_SELECTOR: string = 'FE0E'; // VARIATION SELECTOR-15
export const EMOJI_VARIATION_SELECTOR: string = 'FE0F'; // VARIATION SELECTOR-16
export const LIGHT_SKIN_MODIFIER: string = '1F3FB'; // EMOJI MODIFIER FITZPATRICK TYPE-1-2
export const MEDIUM_LIGHT_SKIN_MODIFIER: string = '1F3FC'; // EMOJI MODIFIER FITZPATRICK TYPE-3
export const MEDIUM_SKIN_MODIFIER: string = '1F3FD'; // EMOJI MODIFIER FITZPATRICK TYPE-4
export const MEDIUM_DARK_SKIN_MODIFIER: string = '1F3FE'; // EMOJI MODIFIER FITZPATRICK TYPE-5
export const DARK_SKIN_MODIFIER: string = '1F3FF'; // EMOJI MODIFIER FITZPATRICK TYPE-6
export const FEMALE_SIGN: string = '2640'; // FEMALE SIGN
export const MALE_SIGN: string = '2642'; // MALE SIGN
export const BLACK_FLAG: string = '1F3F4'; // WAVING BLACK FLAG
export const REGIONAL_INDICATORS: { [hex: string]: string } = {
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
export const TAG_LATIN_SMALL_LETTERS: { [hex: string]: string } = {
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

// Special options for emoticon permutations.

export const EMOTICON_OPTIONS: { [emoticon: string]: PermutationOptions } = {
  // 🧙‍♂️ man mage
  ':{>': { withNose: false },
  // 👹 ogre
  '0)': { withNose: false },
  // ❤️ red heart
  '<3': { isFace: false },
  // 💔 broken heart
  '</3': { isFace: false },
  // 🤘 sign of the horns
  '\\m/': { isFace: false },
};
