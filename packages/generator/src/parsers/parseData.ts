/* eslint-disable no-nested-ternary */

import { TEXT, EMOJI } from 'emojibase';
import parse from './parse';
import extractLineDescription from './extractLineDescription';
import extractUnicodeVersion from './extractUnicodeVersion';
import spreadHexcode from './spreadHexcode';
import verifyTotals from './verifyTotals';
import { EmojiData, EmojiDataMap, ParsedLine, Property } from '../types';

/**
 * Parses the official unicode emoji data.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-data.txt
 */
export default function parseData(version: string, content: string): EmojiDataMap {
  const { lines, totals } = parse(content);
  const data = lines.reduce((map: EmojiDataMap, line: ParsedLine) => {
    const [rawHexcode, property, , modifier] = line.fields;

    // v11.0 included EP, which reserves slots for future emoji.
    // We don't need to pull these in at this time.
    if (property === 'Extended_Pictographic') {
      return map;
    }

    const emoji: EmojiData = {
      description: extractLineDescription(line.comment),
      hexcode: '',
      property: new Set([(property as Property) || 'Emoji']),
      type: EMOJI,
      unicodeVersion: extractUnicodeVersion(line.comment),
      version: parseFloat(version),
    };

    spreadHexcode(rawHexcode, (hexcode, range) => {
      // v1.0 had a different structure
      if (!range && version === '1.0') {
        emoji.type = property === 'emoji' ? EMOJI : TEXT;
        emoji.property = new Set([
          modifier === 'primary' || modifier === 'secondary'
            ? 'Emoji_Modifier_Base'
            : modifier === 'modifier'
            ? 'Emoji_Modifier'
            : 'Emoji',
        ] as Property[]);
      }

      if (map[hexcode]) {
        map[hexcode].property = new Set([
          ...Array.from(map[hexcode].property),
          ...Array.from(emoji.property),
        ]);
      } else {
        map[hexcode] = {
          ...emoji,
          hexcode,
        };
      }
    });

    return map;
  }, {});

  return verifyTotals('data', version, data, totals);
}
