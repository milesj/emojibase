/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import parse from './parse';
import extractGender from './extractGender';
import extractLineDescription from './extractLineDescription';
import extractUnicodeVersion from './extractUnicodeVersion';
import verifyTotals from './verifyTotals';
import formatHexcode from '../helpers/formatHexcode';
import { EMOJI } from '../constants';

import type { EmojiDataMap } from '../types';

/**
 * Parses the official unicode emoji sequences data.
 *
 * Example:
 *  http://unicode.org/Public/emoji/5.0/emoji-sequences.txt
 *  http://unicode.org/Public/emoji/5.0/emoji-zwj-sequences.txt
 */
export default function parseSequences(
  version: string,
  content: string,
  defaultProperty: string,
): EmojiDataMap {
  const { lines, totals } = parse(content);
  const data = lines.reduce((map, line) => {
    const [rawHexcode, property, description] = line.fields;
    const hexcode = formatHexcode(rawHexcode);

    map[hexcode] = {
      hexcode,
      description: description || extractLineDescription(line.comment),
      property: [property || defaultProperty],
      type: EMOJI,
      unicodeVersion: extractUnicodeVersion(line.comment),
      version: parseFloat(version),
      gender: extractGender(hexcode),
    };

    return map;
  }, {});

  // v2.0 doesnt have totals
  if (version === '2.0') {
    return data;
  }

  return verifyTotals(version, data, totals);
}
