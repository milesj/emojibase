/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

// $FlowIgnore Lazyiness
import cheerio from 'cheerio';
import fromUnicodeToHex from '../../packages/emojibase/src/fromUnicodeToHex';

import type { EmojiAnnotationMap } from '../types';

/**
 * Parses the official unicode CLDR annotation data.
 *
 * Example: http://unicode.org/repos/cldr/tags/release-31-0-1/common/annotations/en.xml
 */
export default function parseAnnotations(version: string, content: string): EmojiAnnotationMap {
  const xml = cheerio.load(content, { xmlMode: true });
  const data = {};

  xml('annotation').each((i, rawRow) => {
    const row = xml(rawRow);
    const hexcode = fromUnicodeToHex(row.attr('cp'));

    if (!data[hexcode]) {
      data[hexcode] = {};
    }

    if (row.attr('type') === 'tts') {
      data[hexcode].shortname = row.text().trim();
    } else {
      data[hexcode].tags = row.text().trim().split('|').map(tag => tag.trim());
    }
  });

  return data;
}
