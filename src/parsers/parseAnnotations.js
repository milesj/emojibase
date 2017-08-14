/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

// $FlowIgnore Lazyiness
import cheerio from 'cheerio';
import fromUnicodeToHexcode from '../../packages/emojibase/lib/fromUnicodeToHexcode';

import type { CLDRAnnotationMap } from '../types';

/**
 * Parses the official unicode CLDR annotation data.
 *
 * Example: http://unicode.org/repos/cldr/tags/release-31-0-1/common/annotations/en.xml
 */
export default function parseAnnotations(version: string, content: string): CLDRAnnotationMap {
  const xml = cheerio.load(content, { xmlMode: true });
  const data = {};

  xml('annotation').each((i, rawRow) => {
    const row = xml(rawRow);
    const hexcode = fromUnicodeToHexcode(row.attr('cp'));

    if (!data[hexcode]) {
      data[hexcode] = {};
    }

    if (row.attr('type') === 'tts') {
      data[hexcode].annotation = row.text().trim();
    } else {
      data[hexcode].tags = row.text().trim().split('|').map(tag => tag.trim().toLowerCase());
    }
  });

  return data;
}
