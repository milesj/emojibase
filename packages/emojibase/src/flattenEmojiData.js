/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { FinalEmoji } from '../../../src/types';

export default function flattenEmojiData(data: FinalEmoji[]): FinalEmoji[] {
  const emojis = [];

  data.forEach((emoji) => {
    if (emoji.skins) {
      const { skins, ...restEmoji } = emoji;

      // Dont include nested skins array
      emojis.push(restEmoji);

      // Push each skin modification into the root list
      skins.forEach((skin) => {
        const skinEmoji = { ...skin };

        // Inherit tags from parent if they exist
        if (emoji.tags) {
          skinEmoji.tags = emoji.tags;
        }

        emojis.push(skinEmoji);
      });
    } else {
      emojis.push(emoji);
    }
  });

  // $FlowIgnore
  return emojis;
}
