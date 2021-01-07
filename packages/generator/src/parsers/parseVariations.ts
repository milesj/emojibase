import formatHexcode from '../helpers/formatHexcode';
import { EmojiVariationMap, ParsedLine } from '../types';
import parse from './parse';
import verifyTotals from './verifyTotals';

/**
 * Parses the official unicode emoji-varation-sequences data.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-variation-sequences.txt
 */
export default function parseVariations(version: string, content: string): EmojiVariationMap {
  const { lines, totals } = parse(content);
  const data = lines.reduce((map: EmojiVariationMap, line: ParsedLine) => {
    const [rawHexcode, style] = line.fields;
    const baseHexcode = rawHexcode.split(' ')[0].trim();
    const hexcode = formatHexcode(rawHexcode);
    const type = style.replace('style', '').trim() as 'emoji' | 'text';

    if (map[baseHexcode]) {
      map[baseHexcode][type] = hexcode;
    } else {
      map[baseHexcode] = {
        emoji: '',
        property: ['Emoji'],
        text: '',
        [type]: hexcode,
      };
    }

    return map;
  }, {});

  return verifyTotals('variations', version, data, totals);
}
