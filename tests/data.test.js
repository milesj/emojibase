import { EMOJI, TEXT, MALE, FEMALE } from '../src/constants';
import { loadData } from './helpers';

describe('data', () => {
  // Skin modifications and specific sequences are missing specific
  // fields, like tags, annotation, and more. And since we flattened
  // our data, we'll need to wrap tests in conditional blocks.
  loadData().forEach((emoji) => {
    const unicode = emoji.emoji || emoji.text;

    it(`defines a name for ${unicode}`, () => {
      expect(emoji.name).toBeDefined();
    });

    it(`defines a group for ${unicode}`, () => {
      expect(emoji.group).toBeDefined();
      expect(emoji.subgroup).toBeDefined();
    });

    it(`defines an order for ${unicode}`, () => {
      expect(emoji.order).toBeDefined();
    });

    it(`defines a type presentation for ${unicode}`, () => {
      expect(emoji.type).toBeOneOf([EMOJI, TEXT]);
    });

    if ('annotation' in emoji) {
      it(`defines an annotation for ${unicode}`, () => {
        expect(emoji.annotation).toBeDefined();
      });
    }

    if ('tags' in emoji) {
      it(`defines tags for ${unicode}`, () => {
        expect(emoji.tags.length).toBeGreaterThanOrEqual(1);

        emoji.tags.forEach((tag) => {
          expect(tag).not.toBe('');
        });
      });
    }

    if ('shortcodes' in emoji) {
      it(`defines shortcodes for ${unicode}`, () => {
        expect(emoji.shortcodes.length).toBeGreaterThanOrEqual(1);

        emoji.shortcodes.forEach((shortcode) => {
          expect(shortcode).not.toBe('');
        });
      });
    }

    if ('gender' in emoji) {
      it(`defines a gender for ${unicode}`, () => {
        expect(emoji.gender).toBeOneOf([MALE, FEMALE]);
      });
    }

    if ('variations' in emoji) {
      it(`defines variations for ${unicode}`, () => {
        expect(emoji.variations.emoji).toBeDefined();
        expect(emoji.variations.text).toBeDefined();
      });
    }

    if ('skins' in emoji) {
      it(`defines skin modifications for ${unicode}`, () => {
        expect(emoji.skins.length).toBe(5);
      });
    }
  });
});
