/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import fetchFromCDN from './fetchFromCDN';
import flattenEmojiData from './flattenEmojiData';
import fromCodepointToUnicode from './fromCodepointToUnicode';
import fromHexcodeToCodepoint from './fromHexcodeToCodepoint';
import fromUnicodeToHexcode from './fromUnicodeToHexcode';
import generateEmoticonPermutations from './generateEmoticonPermutations';
import stripHexcode from './stripHexcode';

export {
  fetchFromCDN,
  flattenEmojiData,
  fromCodepointToUnicode,
  fromHexcodeToCodepoint,
  fromUnicodeToHexcode,
  generateEmoticonPermutations,
  stripHexcode,
};

export {
  TEXT,
  EMOJI,
  FEMALE,
  MALE,
  LIGHT_SKIN,
  MEDIUM_LIGHT_SKIN,
  MEDIUM_SKIN,
  MEDIUM_DARK_SKIN,
  DARK_SKIN,
  LATEST_EMOJI_VERSION,
  LATEST_UNICODE_VERSION,
  LATEST_CLDR_VERSION,
  FIRST_UNICODE_EMOJI_VERSION,
  SUPPORTED_LOCALES,
  EMOTICON_OPTIONS,
} from './constants';

export {
  CodePoint,
  Emoji,
  Emoticon,
  Gender,
  Hexcode,
  Presentation,
  Shortcode,
  SkinTone,
  Unicode,
} from './types';
