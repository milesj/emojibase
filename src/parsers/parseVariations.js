/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import formatHexcode from '../helpers/formatHexcode';
import parse from './parse';
import verifyTotals from './verifyTotals';

import type { EmojiVariationMap } from '../types';

/**
 * Parses the official unicode emoji-varation-sequences data.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-variation-sequences.txt
 */
export default function parseVariations(version: string, content: string): EmojiVariationMap {
  const { lines, totals } = parse(content);
  const data = lines.reduce((map, line) => {
    const [rawHexcode, style] = line.fields;
    const baseHexcode = rawHexcode.split(' ')[0].trim();
    const hexcode = formatHexcode(rawHexcode);
    const type = style.replace('style', '').trim();

    if (map[baseHexcode]) {
      map[baseHexcode][type] = hexcode;
    } else {
      map[baseHexcode] = {
        property: ['Emoji'],
        [type]: hexcode,
      };
    }

    return map;
  }, {});

  return verifyTotals(version, data, totals);
}
