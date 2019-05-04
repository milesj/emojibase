import { EMOJI } from 'emojibase';
import parse from './parse';
import extractGender from './extractGender';
import extractLineDescription from './extractLineDescription';
import extractUnicodeVersion from './extractUnicodeVersion';
import spreadHexcode from './spreadHexcode';
import verifyTotals from './verifyTotals';
import { EmojiDataMap, ParsedLine, Property } from '../types';

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
  defaultProperty: Property,
): EmojiDataMap {
  const { lines, totals } = parse(content);
  const data = lines.reduce((map: EmojiDataMap, line: ParsedLine) => {
    const [rawHexcode, property, description] = line.fields;

    spreadHexcode(rawHexcode, hexcode => {
      map[hexcode] = {
        description: description || extractLineDescription(line.comment),
        gender: extractGender(hexcode),
        hexcode,
        property: [(property as Property) || defaultProperty],
        type: EMOJI,
        unicodeVersion: extractUnicodeVersion(line.comment),
        version: parseFloat(version),
      };
    });

    return map;
  }, {});

  // v2.0 doesnt have totals
  if (version === '2.0') {
    return data;
  }

  return verifyTotals('sequences', version, data, totals);
}
