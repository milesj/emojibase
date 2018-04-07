/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { TEXT } from 'emojibase';
import { FinalEmoji } from '../types';

export default function extractSubset(data: FinalEmoji[], format: string): FinalEmoji[] {
  const emojis: FinalEmoji[] = [];

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
        const nextDatum: FinalEmoji = {
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
