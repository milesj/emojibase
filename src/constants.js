/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable quote-props */

import type { Format, Gender, Presentation, SkinTone } from './types';

export const EXPANDED: Format = 'expanded';
export const STANDARD: Format = 'standard';
export const COMPACT: Format = 'compact';
export const CUSTOM: Format = 'custom';

// Regex patterns to make my job easier.

export const WS_PATTERN: RegExp = /\s+/g;
export const ZWJ_PATTERN: RegExp = /200D/g;
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

// Important release versions in generating accurate data.

export const LATEST_EMOJI_VERSION: string = '5.0';
export const LATEST_UNICODE_VERSION: string = '10.0.0';
export const FIRST_UNICODE_EMOJI_VERSION: string = '6.0.0';

// Important hexadecimal codepoints when dealing with diversity and sequences.

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

// Group and subgroup constants are automatically generated during
// the `loadOrderAndGroup` loader and parse phase. I'm not 100% positive
// these numbers are fixed and will not change. I'll need to
// manually verify the numbers each version release and persist backwards
// compatibility. Hopefully they don't change...

export const GROUPS = {
  '0': 'smileys-people',
  '1': 'animals-nature',
  '2': 'food-drink',
  '3': 'travel-places',
  '4': 'activities',
  '5': 'objects',
  '6': 'symbols',
  '7': 'flags',
};

export const SUBGROUPS = {
  '0': 'face-positive',
  '1': 'face-neutral',
  '2': 'face-negative',
  '3': 'face-sick',
  '4': 'face-role',
  '5': 'face-fantasy',
  '6': 'cat-face',
  '7': 'monkey-face',
  '8': 'person',
  '9': 'person-role',
  '10': 'person-fantasy',
  '11': 'person-gesture',
  '12': 'person-activity',
  '13': 'person-sport',
  '14': 'family',
  '15': 'body',
  '16': 'emotion',
  '17': 'clothing',
  '18': 'animal-mammal',
  '19': 'animal-bird',
  '20': 'animal-amphibian',
  '21': 'animal-reptile',
  '22': 'animal-marine',
  '23': 'animal-bug',
  '24': 'plant-flower',
  '25': 'plant-other',
  '26': 'food-fruit',
  '27': 'food-vegetable',
  '28': 'food-prepared',
  '29': 'food-asian',
  '30': 'food-sweet',
  '31': 'drink',
  '32': 'dishware',
  '33': 'place-map',
  '34': 'place-geographic',
  '35': 'place-building',
  '36': 'place-religious',
  '37': 'place-other',
  '38': 'transport-ground',
  '39': 'transport-water',
  '40': 'transport-air',
  '41': 'hotel',
  '42': 'time',
  '43': 'sky-weather',
  '44': 'event',
  '45': 'award-medal',
  '46': 'sport',
  '47': 'game',
  '48': 'sound',
  '49': 'music',
  '50': 'musical-instrument',
  '51': 'phone',
  '52': 'computer',
  '53': 'light-video',
  '54': 'book-paper',
  '55': 'money',
  '56': 'mail',
  '57': 'writing',
  '58': 'office',
  '59': 'lock',
  '60': 'tool',
  '61': 'medical',
  '62': 'other-object',
  '63': 'transport-sign',
  '64': 'warning',
  '65': 'arrow',
  '66': 'religion',
  '67': 'zodiac',
  '68': 'av-symbol',
  '69': 'other-symbol',
  '70': 'keycap',
  '71': 'alphanum',
  '72': 'geometric',
  '73': 'flag',
  '74': 'country-flag',
  '75': 'subdivision-flag',
};

export const GROUP_HIERARCHY = {
  '0': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  '1': [18, 19, 20, 21, 22, 23, 24, 25],
  '2': [26, 27, 28, 29, 30, 31, 32],
  '3': [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
  '4': [44, 45, 46, 47],
  '5': [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62],
  '6': [63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
  '7': [73, 74, 75],
};
