/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { FinalEmoji } from '../types';

export default function extractSubset(data: FinalEmoji[], format: string): FinalEmoji[] {
  const emojis = [];

  data.forEach((datum) => {
    switch (format) {
      case 'compact': {
        const { hexcode, shortcodes, emoji, order, group, annotation, tags, skins } = datum;
        const nextDatum: FinalEmoji = {
          hexcode,
          shortcodes,
          emoji,
          order,
          group,
          annotation,
          tags,
        };

        if (skins) {
          nextDatum.skins = extractSubset(skins, format);
        }

        emojis.push(nextDatum);
        break;
      }

      default:
        emojis.push(datum);
        break;
    }
  });

  return emojis;
}
