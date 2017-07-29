/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { EmojiMap } from '../types';

export default async function extractModifiersFromData(
  emojis: EmojiMap,
  modifiers: EmojiMap,
) {
  Object.keys(emojis).forEach((hexcode) => {
    const emoji = emojis[hexcode];

    if (
      // v5.0+
      emoji.property.includes('Emoji_Component') ||
      // v4.0-
      emoji.property.includes('Emoji_Modifier')
    ) {
      modifiers[hexcode] = emoji;
      delete emojis[hexcode];
    }
  });
}
