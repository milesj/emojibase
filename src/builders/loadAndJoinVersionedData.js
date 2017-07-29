/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable no-await-in-loop */

import mergeEmojiObject from './mergeEmojiObject';
import { LATEST_EMOJI_VERSION } from '../constants';

import type { EmojiMap, Loader } from '../types';

export default async function loadAndJoinVersionedData<T: Object>(
  emojis: EmojiMap,
  modifiers: EmojiMap,
  loader: Loader<T>,
  startVersion: number = 1,
  stopVersion: number = parseFloat(LATEST_EMOJI_VERSION),
) {
  for (let i = startVersion; i <= stopVersion; i += 1) {
    const data = await loader(`${i}.0`);

    Object.keys(data).forEach((hexcode) => {
      const emoji = mergeEmojiObject(emojis[hexcode], data[hexcode]);

      if (
        // v5.0+
        emoji.property.includes('Emoji_Component') ||
        // v4.0-
        emoji.property.includes('Emoji_Modifier')
      ) {
        modifiers[hexcode] = emoji;
      } else {
        emojis[hexcode] = emoji;
      }
    });
  }
}
