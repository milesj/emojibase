import { fromHexcodeToCodepoint, EMOJI } from 'emojibase';
import parse from './parse';
import extractGender from './extractGender';
import extractLineDescription from './extractLineDescription';
import extractUnicodeVersion from './extractUnicodeVersion';
import verifyTotals from './verifyTotals';
import formatHexcode from '../helpers/formatHexcode';
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

    // Handle mapping each hexcode
    const mapHexcode = (hexcode: string) => {
      map[hexcode] = {
        description: description || extractLineDescription(line.comment),
        gender: extractGender(hexcode),
        hexcode,
        property: [(property as Property) || defaultProperty],
        type: EMOJI,
        unicodeVersion: extractUnicodeVersion(line.comment),
        version: parseFloat(version),
      };
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
      mapHexcode(formatHexcode(rawHexcode));
    }

    return map;
  }, {});

  // v2.0 doesnt have totals
  if (version === '2.0') {
    return data;
  }

  return verifyTotals('sequences', version, data, totals);
}
