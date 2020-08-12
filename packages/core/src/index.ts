/**
 * @copyright   2017-2019, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import fetchEmojis from './fetchEmojis';
import fetchFromCDN from './fetchFromCDN';
import fetchShortcodes from './fetchShortcodes';
import flattenEmojiData from './flattenEmojiData';
import fromCodepointToUnicode from './fromCodepointToUnicode';
import fromHexcodeToCodepoint from './fromHexcodeToCodepoint';
import fromUnicodeToHexcode from './fromUnicodeToHexcode';
import generateEmoticonPermutations from './generateEmoticonPermutations';
import stripHexcode from './stripHexcode';

export {
  fetchEmojis,
  fetchFromCDN,
  fetchShortcodes,
  flattenEmojiData,
  fromCodepointToUnicode,
  fromHexcodeToCodepoint,
  fromUnicodeToHexcode,
  generateEmoticonPermutations,
  stripHexcode,
};

export * from './constants';
export * from './types';
