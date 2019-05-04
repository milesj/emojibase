import cheerio from 'cheerio';
import { fromUnicodeToHexcode, stripHexcode } from 'emojibase';
import { CLDRAnnotationMap } from '../types';

/**
 * Parses the official unicode CLDR annotation data.
 *
 * Example: http://unicode.org/repos/cldr/tags/release-31-0-1/common/annotations/en.xml
 */
export default function parseAnnotations(version: string, content: string): CLDRAnnotationMap {
  const xml = cheerio.load(content, { xmlMode: true });
  const data: CLDRAnnotationMap = {};

  xml('annotation').each((i, rawRow) => {
    const row = xml(rawRow);

    // Variation selectors are not present in the locale files
    // So lets just strip unnecessary codepoints
    const hexcode = stripHexcode(fromUnicodeToHexcode(row.attr('cp')));

    if (!data[hexcode]) {
      data[hexcode] = {
        annotation: '',
        tags: [],
      };
    }

    if (row.attr('type') === 'tts') {
      data[hexcode].annotation = row.text().trim();
    } else {
      data[hexcode].tags = row
        .text()
        .trim()
        .split('|')
        .map(tag => tag.trim().toLowerCase());
    }
  });

  return data;
}
