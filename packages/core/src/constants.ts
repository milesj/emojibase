/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { PermutationOptions } from './generateEmoticonPermutations';
import { Gender, Hexcode, Presentation, SkinTone } from './types';

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
