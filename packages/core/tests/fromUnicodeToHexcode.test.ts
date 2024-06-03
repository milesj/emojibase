import { TEXT } from '../src/constants';
import { flattenEmojiData } from '../src/flattenEmojiData';
import { fromUnicodeToHexcode } from '../src/fromUnicodeToHexcode';

const SEQUENCE_HEXCODE_PATTERN = /-(200D|FE0E|FE0F)/g;

describe('fromUnicodeToHexcode()', () => {
	const emojiData = require('../../data/en/data.raw.json');

	flattenEmojiData(emojiData).forEach((emoji) => {
		const unicode = emoji.type === TEXT ? emoji.text : emoji.emoji;

		// The `hexcode` does not include variation selectors,
		// while the converted hexcode might, so let's just
		// remove them all together as assertion is still the same.
		it(`converts unicode to hexcode for ${unicode}`, () => {
			const hexcode = fromUnicodeToHexcode(unicode, false);

			if (hexcode.length <= 10 && (hexcode.endsWith('FE0E') || hexcode.endsWith('FE0F'))) {
				expect(hexcode.replace(SEQUENCE_HEXCODE_PATTERN, '')).toBe(emoji.hexcode);
			} else {
				expect(hexcode).toBe(emoji.hexcode);
			}
		});
	});

	it('handles joiners correctly', () => {
		expect(fromUnicodeToHexcode('👨‍👩‍👧‍👦', true)).toBe('1F468-1F469-1F467-1F466');
		expect(fromUnicodeToHexcode('👨‍👩‍👧‍👦', false)).toBe('1F468-200D-1F469-200D-1F467-200D-1F466');
	});
});
