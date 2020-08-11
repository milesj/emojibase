import path from 'path';
import { flattenEmojiData, EMOJI, TEXT, MALE, FEMALE, Emoji } from 'emojibase';

const localeCache: { [key: string]: Emoji[] } = {};

function loadFlatEmojiData(): Emoji[] {
  const locale = process.env.TEST_LOCALE || 'en';

  if (localeCache[locale]) {
    return localeCache[locale];
  }

  // eslint-disable-next-line
  localeCache[locale] = flattenEmojiData(require(path.join(__dirname, '..', locale, 'raw.json')));

  return localeCache[locale];
}

describe('data', () => {
  // Skin modifications and certain sequences are missing specific
  // fields, like tags, annotations, and more. And since we flattened
  // our data, we'll need to wrap tests in conditional blocks.
  loadFlatEmojiData().forEach((emoji) => {
    const { hexcode } = emoji;
    const unicode = emoji.emoji || emoji.text;

    it(`defines a name for ${unicode} (${hexcode})`, () => {
      expect(emoji.name).toBeDefined();
    });

    it(`defines a group for ${unicode} (${hexcode})`, () => {
      expect(emoji.group).toBeDefined();
      expect(emoji.subgroup).toBeDefined();
    });

    it(`defines an order for ${unicode} (${hexcode})`, () => {
      expect(emoji.order).toBeDefined();
    });

    it(`defines an emoji version for ${unicode} (${hexcode})`, () => {
      expect(emoji.version).toBeDefined();
    });

    it(`defines a type presentation for ${unicode} (${hexcode})`, () => {
      // @ts-expect-error
      expect(emoji.type).toBeOneOf([EMOJI, TEXT]);
    });

    if ('annotation' in emoji) {
      it(`defines an annotation for ${unicode} (${hexcode})`, () => {
        expect(emoji.annotation).not.toBe('');
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
        // @ts-expect-error
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
