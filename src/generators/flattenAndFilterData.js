/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import hasProperty from '../helpers/hasProperty';
import isObject from '../helpers/isObject';

import type { EmojiMap } from '../types';

export default function flattenAndFilterData(data: EmojiMap, flatten: boolean = false): EmojiMap {
  const cleaned = {};

  Object.keys(data).forEach((hexcode) => {
    const emoji = data[hexcode];

    // Omit modifiers and components from the final output,
    // as they're not emoji characters to be used directly
    if (hasProperty(emoji.property, ['Emoji_Modifier', 'Emoji_Component'])) {
      return;
    }

    cleaned[hexcode] = emoji;

    // Move modifications up to the root
    if (flatten && isObject(emoji.modifications)) {
      Object.keys(emoji.modifications).forEach((skinTone) => {
        const mod = emoji.modifications[skinTone];

        cleaned[mod.hexcode] = mod;
      });
    }
  });

  return cleaned;
}
