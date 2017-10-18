/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import formatHexcode from '../helpers/formatHexcode';
import slug from '../helpers/slug';
import writeCache from '../helpers/writeCache';

import type { EmojiGroupMap } from '../types';

/**
 * Parses the official unicode emoji-test data, which includes order and grouping.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-test.txt
 */
export default function parseOrderAndGroup(content: string): EmojiGroupMap {
  const map = {};
  const groups = {};
  const subgroups = {};
  const hierarchy = {};
  let group = '';
  let groupIndex = -1;
  let subgroup = '';
  let subgroupIndex = -1;
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
        groupIndex += 1;
        groups[groupIndex] = group;

      } else if (line.startsWith('# subgroup:')) {
        subgroup = slug(line.slice(11).trim());
        subgroupIndex += 1;
        subgroups[subgroupIndex] = subgroup;

        if (hierarchy[groupIndex]) {
          hierarchy[groupIndex].push(subgroupIndex);
        } else {
          hierarchy[groupIndex] = [subgroupIndex];
        }
      }

      return;
    }

    // Persist order and group
    const hexcode = formatHexcode(line.split(';')[0].trim());

    map[hexcode] = {
      group: groupIndex,
      order,
      subgroup: subgroupIndex,
    };

    order += 1;
  });

  // Cache groups to reference later for constants
  writeCache('group-hierarchy.json', {
    groups,
    hierarchy,
    subgroups,
  });

  return map;
}
