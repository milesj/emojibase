import { FULLY_QUALIFIED } from 'emojibase';
import { HIDDEN_GROUPS, HIDDEN_SUBGROUPS } from '../constants';
import { formatHexcode } from '../helpers/formatHexcode';
import { slug } from '../helpers/slug';
import { writeCache } from '../helpers/writeCache';
import { EmojiMetadata, EmojiMetadataMap } from '../types';
import { extractQualifier } from './extractQualifier';

type GroupNameMap = Record<number, string>;

type GroupHierarchy = Record<number, number[]>;

// Some emojis do not match the official emoji list table.
// So instead of mismatching, we'll opt to match the table.
const OVERRIDES: Record<string, Partial<EmojiMetadata>> = {};

/**
 * Parses the official unicode emoji-test data, which includes order and grouping.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-test.txt
 */
export function parseMetadata(content: string): EmojiMetadataMap {
	const map: EmojiMetadataMap = {};
	const groups: GroupNameMap = {};
	const subgroups: GroupNameMap = {};
	const hierarchy: GroupHierarchy = {};
	let group = '';
	let groupIndex = -1;
	let subgroup = '';
	let subgroupIndex = -1;
	let order = 1;
	let parentHexcode = '';

	// eslint-disable-next-line complexity
	content.split('\n').forEach((line) => {
		// Skip empty lines
		if (!line.trim()) {
			return;
		}

		// Capture group and subgroup from comments
		if (line.startsWith('#')) {
			parentHexcode = '';

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
		const [baseHexcode, trailingLine] = line.split(';');
		const [baseQualifier] = trailingLine.split('#');

		const hexcode = formatHexcode(baseHexcode.trim());
		const qualifier = extractQualifier(baseQualifier.trim());

		if (qualifier === FULLY_QUALIFIED) {
			parentHexcode = hexcode;
		} else if (qualifier !== null) {
			map[parentHexcode].qualifiers[hexcode] = qualifier;
		}

		map[hexcode] = {
			group: groupIndex,
			order,
			qualifiers:
				// eslint-disable-next-line no-nested-ternary
				qualifier === FULLY_QUALIFIED
					? { [hexcode]: qualifier }
					: qualifier === null && (!parentHexcode || !map[parentHexcode])
					? {}
					: // Use the same reference so its additive
					  map[parentHexcode].qualifiers,
			subgroup: subgroupIndex,
			...OVERRIDES[hexcode],
		};

		order += 1;
	});

	// Cache groups to reference later for constants
	void writeCache('temp/group-hierarchy.json', {
		groups,
		hierarchy,
		subgroups,
	});

	return map;
}
