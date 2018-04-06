/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import hasProperty from '../helpers/hasProperty';
import { EmojiMap } from '../types';

export default function filterData(data: EmojiMap): EmojiMap {
  const cleaned: EmojiMap = {};

  Object.keys(data).forEach(hexcode => {
    const emoji = data[hexcode];

    // Omit modifiers and components from the final output,
    // as they're not emoji characters to be used directly
    if (hasProperty(emoji.property, ['Emoji_Modifier', 'Emoji_Component'])) {
      return;
    }

    cleaned[hexcode] = emoji;
  });

  return cleaned;
}
