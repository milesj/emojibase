import { LIGHT_SKIN } from 'emojibase';
import { joinData } from '../src/builders/joinData';
import { joinModifiersToData } from '../src/builders/joinModifiersToData';
import type { Emoji, EmojiData, EmojiDataMap, EmojiMap, Property } from '../src/types';

jest.mock('../src/helpers/log', () => ({
	log: { error: jest.fn(), info: jest.fn(), log: jest.fn(), success: jest.fn(), title: jest.fn() },
}));

function createData(hexcode: string, property: Property[], description = ''): EmojiData {
	return { description, hexcode, property, type: 1, version: 0.6 };
}

function createEmoji(hexcode: string, property: Property[]): Emoji {
	return {
		description: '',
		group: 0,
		hexcode,
		name: '',
		order: 0,
		property,
		subgroup: 0,
		type: 1,
		version: '0.6',
	};
}

describe('joinData()', () => {
	it('merges the properties of code points found in several files', () => {
		const emojis: EmojiDataMap = {};

		joinData(emojis, {
			'1F44D': createData('1F44D', ['Emoji', 'Emoji_Modifier_Base']),
		});
		joinData(emojis, {
			'1F44D': createData('1F44D', ['Basic_Emoji'], 'thumbs up'),
		});

		expect(emojis['1F44D'].property).toEqual(['Emoji', 'Emoji_Modifier_Base', 'Basic_Emoji']);
		expect(emojis['1F44D'].description).toBe('thumbs up');
	});

	it('keeps an earlier description when the later one is empty', () => {
		const emojis: EmojiDataMap = {};

		joinData(emojis, {
			'1F170': createData('1F170', ['Emoji'], 'a button (blood type)'),
		});
		joinData(emojis, {
			'1F170': createData('1F170', ['Basic_Emoji']),
		});

		expect(emojis['1F170'].description).toBe('a button (blood type)');
	});
});

describe('joinModifiersToData()', () => {
	it('nests RGI modifier sequences under their base, with the tone of their modifier', () => {
		const emojis: EmojiMap = {
			'1F44D': createEmoji('1F44D', ['Emoji_Modifier_Base', 'Basic_Emoji']),
			'1F44D-1F3FB': createEmoji('1F44D-1F3FB', ['RGI_Emoji_Modifier_Sequence']),
		};

		joinModifiersToData(emojis);

		expect(emojis['1F44D-1F3FB']).toBeUndefined();
		expect(emojis['1F44D'].modifications?.['1F44D-1F3FB']).toEqual(
			expect.objectContaining({ hexcode: '1F44D-1F3FB', tone: LIGHT_SKIN }),
		);
	});

	it('does not synthesize skin tones for modifier bases without RGI sequences', () => {
		const emojis: EmojiMap = {
			'1F3FB': createEmoji('1F3FB', ['Emoji_Modifier', 'Basic_Emoji']),
			'1F46A': createEmoji('1F46A', ['Emoji_Modifier_Base', 'Basic_Emoji']), // family
		};

		joinModifiersToData(emojis);

		expect(emojis['1F46A'].modifications).toBeUndefined();
	});
});
