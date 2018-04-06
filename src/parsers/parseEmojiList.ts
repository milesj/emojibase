/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import cheerio from 'cheerio';
import readCache from '../helpers/readCache';
import slug from '../helpers/slug';
import { EmojiSourceMap } from '../types';

function swapKeyValues(data: object): object {
  const object = {};

  Object.keys(data).forEach(key => {
    object[data[key]] = Number(key);
  });

  return object;
}

/**
 * Parses an official unicode emoji list chart.
 *
 * Example: http://unicode.org/emoji/charts/emoji-list.html
 */
export default function parseEmojiList(content: string): EmojiSourceMap {
  const xml = cheerio.load(content, { xmlMode: true });
  const groupCache = readCache('group-hierarchy.json') || {};
  const groups = swapKeyValues(groupCache.groups);
  const subgroups = swapKeyValues(groupCache.subgroups);
  const data = {};
  let group = '';
  let subgroup = '';

  xml('table')
    .first()
    .find('tr')
    .each((i, row) => {
      const tr = xml(row);
      const groupRow = tr.find('.bighead');
      const subgroupRow = tr.find('.mediumhead');
      const headerRow = tr.find('.center');

      // Group
      if (groupRow.length > 0) {
        group = groups[slug(groupRow.find('a').text())];

        // Subgroup
      } else if (subgroupRow.length > 0) {
        subgroup = subgroups[slug(subgroupRow.find('a').text())];

        // Header
      } else if (headerRow.length > 0) {
        // Skip emoji
      } else {
        const tds = tr.find('td');
        const hexcode = String(
          tds
            .eq(1)
            .find('a')
            .attr('name'),
        )
          .toUpperCase()
          .replace(/_/g, '-');

        data[hexcode] = {
          group,
          hexcode,
          subgroup,
        };
      }
    });

  return data;
}
