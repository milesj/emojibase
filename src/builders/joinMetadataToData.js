/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { UnicodeNamesMap, EmojiMap, EmojiGroupMap, EmojiVariationMap } from '../types';

export default async function joinMetadataToData(
  emojis: EmojiMap,
  names: UnicodeNamesMap,
  groups: EmojiGroupMap,
  variations: EmojiVariationMap,
) {
  Object.keys(emojis).forEach((hexcode) => {
    const emoji = emojis[hexcode];

    // Pull in the official name
    if (names[hexcode]) {
      emoji.name = names[hexcode];

    } else if (emoji.description) {
      emoji.name = emoji.description.toUpperCase();

    } else {
      throw new Error(`Unknown name detected for ${hexcode}`);
    }

    // Pull in the official group and order
    if (groups[hexcode]) {
      emoji.group = groups[hexcode].group;
      emoji.subgroup = groups[hexcode].subgroup;
      emoji.order = groups[hexcode].order;
    }

    // Pull in text and emoji variations
    if (variations[hexcode]) {
      emoji.variations = variations[hexcode];
    }
  });
}
