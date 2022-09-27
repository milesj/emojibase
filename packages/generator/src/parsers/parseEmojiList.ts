import cheerio from 'cheerio';
import { HIDDEN_GROUPS, HIDDEN_SUBGROUPS } from '../constants';
import { readCache } from '../helpers/readCache';
import { slug } from '../helpers/slug';
import { EmojiSourceMap } from '../types';

type GroupNameMap = Record<string, number>;

type GroupIndexMap = Record<string, string>;

interface GroupCache {
	groups: GroupIndexMap;
	subgroups: GroupIndexMap;
}

function swapKeyValues(data: GroupIndexMap): GroupNameMap {
	const object: GroupNameMap = {};

	Object.keys(data).forEach((key) => {
		object[data[key]] = Number(key);
	});

	return object;
}

/**
 * Parses an official unicode emoji list chart.
 *
 * Example: http://unicode.org/emoji/charts/emoji-list.html
 */
export function parseEmojiList(content: string): EmojiSourceMap {
	const xml = cheerio.load(content, { xmlMode: true });
	const groupCache: GroupCache = {
		groups: {},
		subgroups: {},
		...readCache('temp/group-hierarchy.json'),
	};
	const groups: GroupNameMap = swapKeyValues(groupCache.groups);
	const subgroups: GroupNameMap = swapKeyValues(groupCache.subgroups);
	const data: EmojiSourceMap = {};
	let group = 0;
	let groupName = '';
	let subgroup = 0;
	let subgroupName = '';

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
				groupName = slug(groupRow.find('a').text());
				group = groups[groupName];
				// Subgroup
			} else if (subgroupRow.length > 0) {
				subgroupName = slug(subgroupRow.find('a').text());
				subgroup = subgroups[subgroupName];
				// Header
			} else if (headerRow.length > 0) {
				// Skip emoji
			} else {
				const hexcode = String(tr.find('.code').find('a').attr('name'))
					.toUpperCase()
					.replace(/_/g, '-');
				const name = tr.find('.name').eq(0).text();

				// Recently added, not in an official emoji release
				if (name.includes('⊛')) {
					return;
				}

				// Skip emojis that are hidden
				if (HIDDEN_GROUPS.includes(groupName) || HIDDEN_SUBGROUPS.includes(subgroupName)) {
					return;
				}

				data[hexcode] = {
					group,
					hexcode,
					subgroup,
				};
			}
		});

	return data;
}
