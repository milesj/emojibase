/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import parse from './parse';
import extractLineDescription from './extractLineDescription';

import type { EmojiVariationMap } from '../types';

/**
 * Parses the official unicode emoji-varation-sequences data.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-variation-sequences.txt
 */
export default function parseVariationSequences(content: string): EmojiVariationMap {
  return parse(content).reduce((map, line) => {
    const [hexcode] = line.fields;

    map[hexcode] = extractLineDescription(line.comment);

    return map;
  }, {});
}
