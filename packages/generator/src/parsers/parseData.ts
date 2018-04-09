/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

/* eslint-disable no-nested-ternary */

import { fromHexcodeToCodepoint, TEXT, EMOJI } from 'emojibase';
import parse from './parse';
import extractLineDescription from './extractLineDescription';
import extractUnicodeVersion from './extractUnicodeVersion';
import verifyTotals from './verifyTotals';
import formatHexcode from '../helpers/formatHexcode';
import { EmojiDataMap, ParsedLine, Property } from '../types';

/**
 * Parses the official unicode emoji data.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-data.txt
 */
export default function parseData(version: string, content: string): EmojiDataMap {
  const { lines, totals } = parse(content);
  const data = lines.reduce((map: EmojiDataMap, line: ParsedLine) => {
    const [rawHexcode, property, , modifier] = line.fields;
    const emoji = {
      description: extractLineDescription(line.comment),
      property: [(property as Property) || 'Emoji'],
      type: EMOJI,
      unicodeVersion: extractUnicodeVersion(line.comment),
      version: parseFloat(version),
    };

    // Handle mapping each hexcode
    const mapHexcode = (hexcode: string) => {
      if (map[hexcode]) {
        // An emoji may belong to multiple properties,
        // so keep a unique list of all applicable.
        map[hexcode].property = Array.from(new Set([...map[hexcode].property, ...emoji.property]));
      } else {
        map[hexcode] = {
          ...emoji,
          hexcode,
        };
      }
    };

    // A sequence of emoji
    if (rawHexcode.includes('..')) {
      const [lowCodepoint, highCodepoint] = fromHexcodeToCodepoint(rawHexcode, '..');

      for (let codepoint = lowCodepoint; codepoint <= highCodepoint; codepoint += 1) {
        mapHexcode(
          codepoint
            .toString(16)
            .padStart(4, '0')
            .toUpperCase(),
        );
      }

      // A single emoji
    } else {
      // v1.0 had a different structure
      if (version === '1.0') {
        emoji.type = property === 'emoji' ? EMOJI : TEXT;
        emoji.property = [
          modifier === 'primary' || modifier === 'secondary'
            ? 'Emoji_Modifier_Base'
            : modifier === 'modifier' ? 'Emoji_Modifier' : 'Emoji',
        ];
      }

      mapHexcode(formatHexcode(rawHexcode));
    }

    return map;
  }, {});

  return verifyTotals(version, data, totals);
}
