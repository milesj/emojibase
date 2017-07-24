/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import parse from './parse';
import extractLineDescription from './extractLineDescription';

import type { VariationMap } from '../types';

/**
 * Parses the official unicode list for emoji varation sequences.
 *
 * Example: http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt
 */
export default function parseVariationSequences(content: string): VariationMap {
  return parse(content).reduce((map, line) => {
    const [hexcode] = line.fields;

    map[hexcode] = extractLineDescription(line.comment);

    return map;
  }, {});
}
