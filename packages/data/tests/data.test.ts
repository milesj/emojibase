import path from 'node:path';
import { EMOJI, type Emoji, FEMALE, flattenEmojiData, MALE, TEXT } from 'emojibase';

const localeCache: Record<string, Emoji[]> = {};

function loadFlatEmojiData(): Emoji[] {
	const locale = process.env.TEST_LOCALE ?? 'en';

	if (localeCache[locale]) {
		return localeCache[locale];
	}

	localeCache[locale] = flattenEmojiData(
		require(path.join(__dirname, '..', locale, 'data.raw.json')),
	);

	return localeCache[locale];
}

describe('data', () => {
	// Skin modifications and certain sequences are missing specific
	// fields, like tags, annotations, and more. And since we flattened
	// our data, we'll need to wrap tests in conditional blocks.
	loadFlatEmojiData().forEach((emoji) => {
		const { hexcode } = emoji;
		const unicode = emoji.emoji || emoji.text;

		if ('group' in emoji) {
			it(`defines a group for ${unicode} (${hexcode})`, () => {
				expect(emoji.group).toBeGreaterThanOrEqual(0);
			});
		}

		if ('subgroup' in emoji) {
			it(`defines a subgroup for ${unicode} (${hexcode})`, () => {
				expect(emoji.subgroup).toBeGreaterThanOrEqual(0);
			});
		}

		if ('order' in emoji) {
			it(`defines an order for ${unicode} (${hexcode})`, () => {
				expect(emoji.order).toBeGreaterThanOrEqual(0);
			});
		}

		it(`defines an emoji version for ${unicode} (${hexcode})`, () => {
			expect(emoji.version).toBeDefined();
		});

		it(`defines a type presentation for ${unicode} (${hexcode})`, () => {
			// @ts-expect-error Missing expect
			expect(emoji.type).toBeOneOf([EMOJI, TEXT]);
		});

		if ('label' in emoji) {
			it(`defines an label for ${unicode} (${hexcode})`, () => {
				expect(emoji.label).not.toBe('');
			});
		}

		if ('tags' in emoji) {
			it(`defines tags for ${unicode} (${hexcode})`, () => {
				expect(emoji.tags?.length).toBeGreaterThanOrEqual(1);

				emoji.tags?.forEach((tag) => {
					expect(tag).not.toBe('');
				});
			});
		}

		if ('gender' in emoji) {
			it(`defines a gender for ${unicode} (${hexcode})`, () => {
				// @ts-expect-error Missing expect
				expect(emoji.gender).toBeOneOf([MALE, FEMALE]);
			});
		}

		if ('skins' in emoji) {
			it(`defines skin modifications for ${unicode} (${hexcode})`, () => {
				expect(emoji.skins).toHaveLength(5);
			});
		}
	});
});
