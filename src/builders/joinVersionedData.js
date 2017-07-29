/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable no-await-in-loop */

import loadData from '../loaders/loadData';
import mergeEmojiObject from './mergeEmojiObject';
import { LATEST_EMOJI_VERSION } from '../constants';

import type { UnicodeNamesMap, EmojiMap, EmojiGroupMap, EmojiVariationMap } from '../types';

export default async function joinVersionedData(
  names: UnicodeNamesMap,
  groups: EmojiGroupMap,
  variations: EmojiVariationMap,
): Promise<{
  emojis: EmojiMap,
  modifiers: EmojiMap,
}> {
  const latestVersion = parseFloat(LATEST_EMOJI_VERSION);
  const emojis = {};
  const modifiers = {};

  for (let i = 1; i <= latestVersion; i += 1) {
    const data = await loadData(`${i}.0`);

    Object.keys(data).forEach((hexcode) => {
      let emoji = mergeEmojiObject(emojis[hexcode], data[hexcode]);

      // Only the latest version should join complex data
      if (i < latestVersion) {
        emojis[hexcode] = emoji;

        return;
      }

      // Pull in the official name
      if (names[hexcode]) {
        emoji.name = names[hexcode];
      } else {
        throw new Error(`Missing name for ${hexcode}`);
      }

      // Pull in the official group and order
      if (groups[hexcode]) {
        emoji = {
          ...emoji,
          ...groups[hexcode],
        };
      }

      // Pull in text and emoji variations
      if (variations[hexcode]) {
        emoji.variations = variations[hexcode];
      }

      // Partition data based on property
      emoji.property.forEach((property) => {
        switch (property) {
          case 'Emoji_Component': // 5.0
          case 'Emoji_Modifier':
            modifiers[hexcode] = emoji;
            break;

          default:
            emojis[hexcode] = emoji;
            break;
        }
      });
    });
  }

  return Promise.resolve({
    emojis,
    modifiers,
  });
}
