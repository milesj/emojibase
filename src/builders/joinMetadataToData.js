/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import hasProperty from '../helpers/hasProperty';
import { SEQUENCE_REMOVAL_PATTERN } from '../constants';

import type { UnicodeNamesMap, EmojiGroupMap, EmojiVariationMap } from '../types';

export default async function joinMetadataToData(
  emojis: Object,
  names: UnicodeNamesMap,
  groups: EmojiGroupMap,
  variations: EmojiVariationMap,
) {
  Object.keys(emojis).forEach((hexcode) => {
    const emoji = emojis[hexcode];

    // Pull in the official name for each hexcode part
    const name = [];

    // Tag and flag sequences don't have meaningful names,
    // so use the descriptions parsed from the offical data files
    if (hasProperty(emoji.property, ['Emoji_Flag_Sequence', 'Emoji_Tag_Sequence'])) {
      name.push(emoji.description.toUpperCase());

    } else {
      hexcode.split('-').forEach((code) => {
        if (code.match(SEQUENCE_REMOVAL_PATTERN)) {
          return;
        }

        if (names[code]) {
          name.push(names[code]);
        }
      });
    }

    emoji.name = name.join(', ');

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
