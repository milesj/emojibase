/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import isObject from '../helpers/isObject';

import type { EmojiMap } from '../types';

export default function flattenData(data: EmojiMap): EmojiMap {
  const cleaned = {};

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
