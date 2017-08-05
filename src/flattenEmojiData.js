/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { FinalEmoji } from './types';

export default function flattenEmojiData(data: FinalEmoji[]): FinalEmoji[] {
  const emojis = [];

  data.forEach((emoji) => {
    if (emoji.skins) {
      const { skins, ...restEmoji } = emoji;

      emojis.push(restEmoji);

      skins.forEach((skin) => {
        emojis.push({
          ...skin,
          tags: emoji.tags,
        });
      });
    } else {
      emojis.push(emoji);
    }
  });

  return emojis;
}
