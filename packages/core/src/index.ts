/**
 * @copyright   2017-2019, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import appendSkinToneIndex from './appendSkinToneIndex';
import fetchEmojis from './fetchEmojis';
import fetchFromCDN from './fetchFromCDN';
import fetchShortcodes from './fetchShortcodes';
import flattenEmojiData from './flattenEmojiData';
import fromCodepointToUnicode from './fromCodepointToUnicode';
import fromHexcodeToCodepoint from './fromHexcodeToCodepoint';
import fromUnicodeToHexcode from './fromUnicodeToHexcode';
import generateEmoticonPermutations from './generateEmoticonPermutations';
import joinShortcodes from './joinShortcodes';
import joinShortcodesToEmoji from './joinShortcodesToEmoji';
import stripHexcode from './stripHexcode';

export {
  appendSkinToneIndex,
  fetchEmojis,
  fetchFromCDN,
  fetchShortcodes,
  flattenEmojiData,
  fromCodepointToUnicode,
  fromHexcodeToCodepoint,
  fromUnicodeToHexcode,
  generateEmoticonPermutations,
  joinShortcodes,
  joinShortcodesToEmoji,
  stripHexcode,
};

export * from './constants';
export * from './types';
