/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import parse from './parse';
import extractLineDescription from './extractLineDescription';
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
    const [hexcode] = line.fields;

    map[hexcode] = extractLineDescription(line.comment);

    return map;
  }, {});

  return verifyTotals(version, data, totals);
}
