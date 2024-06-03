import { flattenEmojiData } from '../src/flattenEmojiData';
import type { Emoji } from '../src/types';

describe('flattenEmojiData()', () => {
	const data: Emoji[] = [
		{
			hexcode: '1F476',
			shortcodes: ['baby'],
			emoji: '👶',
			type: 1,
			order: 111,
			group: 0,
			subgroup: 0,
			label: 'baby',
			tags: ['baby', 'young'],
			text: '',
			version: 1,
			skins: [
				{
					hexcode: '1F476-1F3FB',
					shortcodes: ['baby_1'],
					emoji: '👶🏻',
					type: 1,
					order: 112,
					group: 0,
					subgroup: 0,
					tone: 1,
					label: 'baby, light skin tone',
					tags: [],
					text: '',
					version: 1,
				},
				{
					hexcode: '1F476-1F3FC',
					shortcodes: ['baby_2'],
					emoji: '👶🏼',
					type: 1,
					order: 113,
					group: 0,
					subgroup: 0,
					tone: 2,
					label: 'baby, medium-light skin tone',
					tags: [],
					text: '',
					version: 1,
				},
				{
					hexcode: '1F476-1F3FD',
					shortcodes: ['baby_3'],
					emoji: '👶🏽',
					type: 1,
					order: 114,
					group: 0,
					subgroup: 0,
					tone: 3,
					label: 'baby, medium skin tone',
					tags: [],
					text: '',
					version: 1,
				},
				{
					hexcode: '1F476-1F3FE',
					shortcodes: ['baby_4'],
					emoji: '👶🏾',
					type: 1,
					order: 115,
					group: 0,
					subgroup: 0,
					tone: 4,
					label: 'baby, medium-dark skin tone',
					tags: [],
					text: '',
					version: 1,
				},
				{
					hexcode: '1F476-1F3FF',
					shortcodes: ['baby_5'],
					emoji: '👶🏿',
					type: 1,
					order: 116,
					group: 0,
					subgroup: 0,
					tone: 5,
					label: 'baby, dark skin tone',
					tags: [],
					text: '',
					version: 1,
				},
			],
		},
	];

	it('flattens skins and moves them to the root', () => {
		expect(flattenEmojiData(data)).toEqual([
			{
				hexcode: '1F476',
				shortcodes: ['baby'],
				emoji: '👶',
				type: 1,
				order: 111,
				group: 0,
				subgroup: 0,
				label: 'baby',
				tags: ['baby', 'young'],
				text: '',
				version: 1,
			},
			{
				hexcode: '1F476-1F3FB',
				shortcodes: ['baby_1'],
				emoji: '👶🏻',
				type: 1,
				order: 112,
				group: 0,
				subgroup: 0,
				tone: 1,
				label: 'baby, light skin tone',
				tags: ['baby', 'young'],
				text: '',
				version: 1,
			},
			{
				hexcode: '1F476-1F3FC',
				shortcodes: ['baby_2'],
				emoji: '👶🏼',
				type: 1,
				order: 113,
				group: 0,
				subgroup: 0,
				tone: 2,
				label: 'baby, medium-light skin tone',
				tags: ['baby', 'young'],
				text: '',
				version: 1,
			},
			{
				hexcode: '1F476-1F3FD',
				shortcodes: ['baby_3'],
				emoji: '👶🏽',
				type: 1,
				order: 114,
				group: 0,
				subgroup: 0,
				tone: 3,
				label: 'baby, medium skin tone',
				tags: ['baby', 'young'],
				text: '',
				version: 1,
			},
			{
				hexcode: '1F476-1F3FE',
				shortcodes: ['baby_4'],
				emoji: '👶🏾',
				type: 1,
				order: 115,
				group: 0,
				subgroup: 0,
				tone: 4,
				label: 'baby, medium-dark skin tone',
				tags: ['baby', 'young'],
				text: '',
				version: 1,
			},
			{
				hexcode: '1F476-1F3FF',
				shortcodes: ['baby_5'],
				emoji: '👶🏿',
				type: 1,
				order: 116,
				group: 0,
				subgroup: 0,
				tone: 5,
				label: 'baby, dark skin tone',
				tags: ['baby', 'young'],
				text: '',
				version: 1,
			},
		]);
	});

	it('inherits tags from parent', () => {
		const actual = flattenEmojiData(data);

		expect(actual[1].tags).toEqual(actual[0].tags);
		expect(actual[2].tags).toEqual(actual[0].tags);
		expect(actual[3].tags).toEqual(actual[0].tags);
		expect(actual[4].tags).toEqual(actual[0].tags);
		expect(actual[5].tags).toEqual(actual[0].tags);
	});
});
