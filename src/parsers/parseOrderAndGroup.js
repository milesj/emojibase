/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import formatHexcode from '../helpers/formatHexcode';
import slug from '../helpers/slug';

import type { EmojiGroupMap } from '../types';

/**
 * Parses the official unicode emoji-test data, which includes order and grouping.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-test.txt
 */
export default function parseOrderAndGroup(content: string): EmojiGroupMap {
  const map = {};
  let group = '';
  let subgroup = '';
  let order = 1;

  content.split('\n').forEach((line) => {
    // Skip empty lines
    if (!line.trim()) {
      return;
    }

    // Capture group and subgroup from comments
    if (line.charAt(0) === '#') {
      if (line.startsWith('# group:')) {
        group = slug(line.slice(8).trim());

      } else if (line.startsWith('# subgroup:')) {
        subgroup = slug(line.slice(11).trim());
      }

      return;
    }

    // Persist order and group
    const hexcode = formatHexcode(line.slice(0, line.indexOf(' ') + 1).trim());

    map[hexcode] = {
      group,
      subgroup,
      order,
    };

    order += 1;
  });

  return map;
}
