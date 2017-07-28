/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable no-nested-ternary */

import parse from './parse';
import extractLineDescription from './extractLineDescription';
import extractUnicodeVersion from './extractUnicodeVersion';
import verifyTotals from './verifyTotals';
import formatHexcode from '../helpers/formatHexcode';
import fromHexToCodepoint from '../fromHexToCodepoint';
import { TEXT, EMOJI } from '../constants';

import type { EmojiDataMap } from '../types';

/**
 * Parses the official unicode emoji and emoji-sequences data.
 *
 * Example:
 *  http://unicode.org/Public/emoji/5.0/emoji-data.txt
 *  http://unicode.org/Public/emoji/5.0/emoji-sequences.txt
 */
export default function parseDataAndSequences(version: string, content: string): EmojiDataMap {
  const { lines, totals } = parse(content);
  const data = lines.reduce((map, line) => {
    const [rawHexcode, property, , modifier] = line.fields;
    const emoji = {
      description: extractLineDescription(line.comment),
      property: [
        (property === 'Emoji_Combining_Sequence')
          ? 'Emoji_Keycap_Sequence'
          : (property || 'Emoji'),
      ],
      type: EMOJI,
      unicodeVersion: extractUnicodeVersion(line.comment),
      version: parseFloat(version),
    };

    // Handle mapping each hexcode
    const mapHexcode = (hexcode) => {
      if (map[hexcode]) {
        // An emoji may belong to multiple properties,
        // so keep a unique list of all applicable.
        map[hexcode].property = Array.from(new Set([
          ...map[hexcode].property,
          ...emoji.property,
        ]));
      } else {
        map[hexcode] = {
          ...emoji,
          hexcode,
        };
      }
    };

    // A sequence of emoji
    if (rawHexcode.includes('..')) {
      const [lowCodepoint, highCodepoint] = fromHexToCodepoint(rawHexcode, '..');

      for (let codepoint = lowCodepoint; codepoint <= highCodepoint; codepoint += 1) {
        mapHexcode(codepoint.toString(16).padStart(4, '0').toUpperCase());
      }

    // A single emoji
    } else {
      if (version === '1.0') {
        emoji.type = (property === 'emoji') ? EMOJI : TEXT;
        emoji.property = [
          (modifier === 'primary' || modifier === 'secondary') ? 'Emoji_Modifier_Base' :
            (modifier === 'modifier') ? 'Emoji_Modifier' :
              (property === 'emoji') ? 'Emoji' : 'Text',
        ];
      }

      mapHexcode(formatHexcode(rawHexcode));
    }

    return map;
  }, {});

  return verifyTotals(version, data, totals);
}
