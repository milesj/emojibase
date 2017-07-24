/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import parse from './parse';
import extractLineDescription from './extractLineDescription';
import formatHexcode from '../helpers/formatHexcode';
import fromHexToCodepoint from '../fromHexToCodepoint';

import type { EmojiDataMap } from '../types';

/**
 * Parses the official unicode emoji and emoji-sequences data.
 *
 * Example:
 *  http://unicode.org/Public/emoji/5.0/emoji-data.txt
 *  http://unicode.org/Public/emoji/5.0/emoji-sequences.txt
 */
export default function parseDataAndSequences(version: string, content: string): EmojiDataMap {
  return parse(content).reduce((map, line) => {
    const [rawHexcode, property] = line.fields;
    const unicodeVersion = line.comment.match(/^V?([0-9.]+)/);
    const emoji = {
      description: extractLineDescription(line.comment),
      property: property || 'Emoji',
      type: 'emoji',
      unicodeVersion: unicodeVersion ? parseFloat(unicodeVersion[1]) : 6,
      version: parseFloat(version),
    };

    // A sequence of emoji
    if (rawHexcode.includes('..')) {
      const [lowCodepoint, highCodepoint] = fromHexToCodepoint(rawHexcode, '..');

      for (let codepoint = lowCodepoint; codepoint <= highCodepoint; codepoint += 1) {
        const hexcode = codepoint.toString(16).padStart(4, '0').toUpperCase();

        map[hexcode] = {
          ...emoji,
          hexcode,
        };
      }

    // A single emoji
    } else {
      const hexcode = formatHexcode(rawHexcode);

      map[hexcode] = {
        ...emoji,
        hexcode,
      };

      // 1.0 had a different structure
      if (version === '1.0' && (property === 'emoji' || property === 'text')) {
        map[hexcode].property = 'Emoji';
        map[hexcode].type = property;
      }
    }

    return map;
  }, {});
}
