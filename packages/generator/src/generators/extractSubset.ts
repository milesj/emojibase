/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { TEXT, Emoji } from 'emojibase';

export default function extractSubset(data: Emoji[], format: string): Emoji[] {
  const emojis: Emoji[] = [];

  data.forEach(datum => {
    switch (format) {
      case 'compact': {
        const {
          hexcode,
          shortcodes,
          emoji,
          emoticon,
          order,
          group,
          annotation,
          tags,
          text,
          type,
          skins,
        } = datum;
        const nextDatum: Emoji = {
          annotation,
          group,
          hexcode,
          order,
          shortcodes,
          tags,
          unicode: text && type === TEXT ? text : emoji,
        };

        if (emoticon) {
          nextDatum.emoticon = emoticon;
        }

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
