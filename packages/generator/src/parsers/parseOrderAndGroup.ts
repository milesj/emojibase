import formatHexcode from '../helpers/formatHexcode';
import slug from '../helpers/slug';
import writeCache from '../helpers/writeCache';
import { EmojiGroupMap, EmojiGroup } from '../types';
import { HIDDEN_GROUPS, HIDDEN_SUBGROUPS } from '../constants';

interface GroupNameMap {
  [index: number]: string;
}

interface GroupHierarchy {
  [index: number]: number[];
}

// Some emojis do not match the official emoji list table.
// So instead of mismatching, we'll opt to match the table.
const OVERRIDES: { [hexcode: string]: Partial<EmojiGroup> } = {};

/**
 * Parses the official unicode emoji-test data, which includes order and grouping.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-test.txt
 */
export default function parseOrderAndGroup(content: string): EmojiGroupMap {
  const map: EmojiGroupMap = {};
  const groups: GroupNameMap = {};
  const subgroups: GroupNameMap = {};
  const hierarchy: GroupHierarchy = {};
  let group = '';
  let groupIndex = -1;
  let subgroup = '';
  let subgroupIndex = -1;
  let order = 1;

  content.split('\n').forEach(line => {
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

        if (HIDDEN_SUBGROUPS.includes(subgroup)) {
          return;
        }

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

    // Skip emojis that are hidden
    if (HIDDEN_GROUPS.includes(group) || HIDDEN_SUBGROUPS.includes(subgroup)) {
      return;
    }

    // Persist order and group
    const hexcode = formatHexcode(line.split(';')[0].trim());

    map[hexcode] = {
      group: groupIndex,
      order,
      subgroup: subgroupIndex,
      ...OVERRIDES[hexcode],
    };

    order += 1;
  });

  // Cache groups to reference later for constants
  writeCache('final/group-hierarchy.json', {
    groups,
    hierarchy,
    subgroups,
  });

  return map;
}
