import cheerio from 'cheerio';
import { CLDRDataMap } from '../types';

/**
 * Parses an official unicode CLDR XML datasource.
 *
 * Example:
 *  https://raw.githubusercontent.com/unicode-org/cldr/release-31-0-1/common/main/en.xml
 *  https://raw.githubusercontent.com/unicode-org/cldr/release-31-0-1/common/subdivisions/en.xml
 */
export default function parseLocalization(
  version: string,
  content: string,
  nodeName: string,
  attrName: string = 'type',
): CLDRDataMap {
  const xml = cheerio.load(content, { xmlMode: true });
  const data: CLDRDataMap = {};

  xml(nodeName).each((i, rawRow) => {
    const row = xml(rawRow);

    data[row.attr(attrName)] = row.text().trim();
  });

  return data;
}
