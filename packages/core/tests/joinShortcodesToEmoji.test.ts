import { joinShortcodesToEmoji } from '../src/joinShortcodesToEmoji';
import { Emoji } from '../src/types';
import { getEmojiWithSkins } from './helpers';

describe('joinShortcodesToEmoji()', () => {
	const info: Emoji = {
		annotation: 'information',
		hexcode: '2139',
		tags: ['i'],
		emoji: 'ℹ️',
		text: 'ℹ︎',
		type: 0,
		order: 3821,
		group: 8,
		subgroup: 95,
		version: 0.6,
	};

	it('adds all matching hexcodes to shortcodes list', () => {
		const emoji = joinShortcodesToEmoji({ ...info }, [
			{ '2139': 'information' },
			{ '2139': 'info' },
			{ '2139': ['info_source', 'info'] },
		]);

		expect(emoji.shortcodes).toEqual(['information', 'info', 'info_source']);
	});

	it('sets empty list if no matching datasets', () => {
		const emoji = joinShortcodesToEmoji({ ...info }, [{ '0000': 'shortcode' }]);

		expect(emoji.shortcodes).toEqual([]);
	});

	it('doesnt set property if no datasets', () => {
		const emoji = joinShortcodesToEmoji({ ...info }, []);

		expect(emoji.shortcodes).toBeUndefined();
	});

	it('adds shortcodes for skin tones', () => {
		const emoji = joinShortcodesToEmoji(getEmojiWithSkins(), [
			{ '1F44B': 'wave', '1F44B-1F3FB': 'wave_1', '1F44B-1F3FD': 'wave_medium' },
		]);

		expect(emoji.shortcodes).toEqual(['wave']);
		expect(emoji.skins?.[0].shortcodes).toEqual(['wave_1']);
		expect(emoji.skins?.[1].shortcodes).toEqual([]);
		expect(emoji.skins?.[2].shortcodes).toEqual(['wave_medium']);
		expect(emoji.skins?.[3].shortcodes).toEqual([]);
		expect(emoji.skins?.[4].shortcodes).toEqual([]);
	});
});
