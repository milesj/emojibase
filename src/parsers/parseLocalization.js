/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

// $FlowIgnore Lazyiness
import cheerio from 'cheerio';

import type { CLDRLocaleMap } from '../types';

/**
 * Parses the official unicode CLDR main localization data.
 *
 * Example: http://unicode.org/repos/cldr/tags/release-31-0-1/common/main/en.xml
 */
export default function parseLocalization(version: string, content: string): CLDRLocaleMap {
  const xml = cheerio.load(content, { xmlMode: true });
  const territories = {};

  xml('territory').each((i, rawRow) => {
    const row = xml(rawRow);

    territories[row.attr('type')] = row.text().trim();
  });

  return {
    territories,
  };
}
