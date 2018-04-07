/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import isObject from '../helpers/isObject';
import { EmojiMap } from '../types';

export default function flattenData(data: EmojiMap): EmojiMap {
  const cleaned: EmojiMap = {};

  Object.keys(data).forEach(hexcode => {
    const emoji = data[hexcode];

    cleaned[hexcode] = emoji;

    // Move modifications up to the root
    if (isObject(emoji.modifications)) {
      Object.keys(emoji.modifications).forEach(skinTone => {
        const mod = emoji.modifications[skinTone];

        cleaned[mod.hexcode] = mod;
      });
    }
  });

  return cleaned;
}
