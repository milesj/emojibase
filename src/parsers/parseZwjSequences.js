/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import parse from './parse';
import extractLineDescription from './extractLineDescription';
import extractUnicodeVersion from './extractUnicodeVersion';
import formatHexcode from '../helpers/formatHexcode';
import { EMOJI } from '../constants'

import type { EmojiDataMap } from '../types';

/**
 * Parses the official unicode emoji zero-width-joiner sequences data.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-zwj-sequences.txt
 */
export default function parseZwjSequences(version: string, content: string): EmojiDataMap {
  return parse(content).reduce((map, line) => {
    const [rawHexcode, property, description] = line.fields;
    const hexcode = formatHexcode(rawHexcode);

    map[hexcode] = {
      hexcode,
      description: description || extractLineDescription(line.comment),
      property: property || 'Emoji_ZWJ_Sequence',
      type: EMOJI,
      unicodeVersion: extractUnicodeVersion(line.comment),
      version: parseFloat(version),
    };

    return map;
  }, {});
}
