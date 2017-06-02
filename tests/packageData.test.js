import packageData, { CACHE } from '../src/packageData';
import { SEQUENCE_REMOVAL_PATTERN } from '../src/constants';

describe('packageData()', () => {
  it('caches data', () => {
    const data = packageData();

    expect(CACHE.length).toBe(data.length);
  });

  packageData().forEach((emoji) => {
    const unicode = emoji[emoji.display];

    it(`formats a hexcode without ZWJ for ${unicode}`, () => {
      expect(emoji.hexcode).not.toMatch(SEQUENCE_REMOVAL_PATTERN);
    });

    it(`hexcode doesnt exceed length 4 for ${unicode}`, () => {
      expect(emoji.hexcode.split('-').length).toBeLessThanOrEqual(4);
    });

    it(`codepoint doesnt exceed length 4 for ${unicode}`, () => {
      expect(emoji.codepoint.length).toBeLessThanOrEqual(4);
    });

    it(`defines a name for ${unicode}`, () => {
      expect(emoji.name).not.toBe('');
    });

    it(`defines a category for ${unicode}`, () => {
      expect(emoji.category).not.toBe('');
    });

    it(`defines a gender for ${unicode}`, () => {
      expect(emoji.gender).toBeOneOf([null, 'male', 'female']);
    });

    it(`defines a skin tone for ${unicode}`, () => {
      expect(emoji.skin).toBeOneOf([null, 1, 2, 3, 4, 5]);
    });

    it(`defines a display presentation for ${unicode}`, () => {
      expect(emoji.display).toMatch(/emoji|text/);
    });

    it(`defines an order for ${unicode}`, () => {
      // Newer emoji may not have an order yet
      if (emoji.order) {
        expect(emoji.order).toBeGreaterThanOrEqual(1);
      }
    });

    it(`defines tags for ${unicode}`, () => {
      expect(emoji.tags.length).toBeGreaterThanOrEqual(1);

      emoji.tags.forEach((tag) => {
        expect(tag).not.toBe('');
      });
    });

    it(`defines shortnames for ${unicode}`, () => {
      expect(emoji.shortnames.length).toBeGreaterThanOrEqual(1);

      emoji.shortnames.forEach((name) => {
        expect(name).toMatch(/^[a-z0-9-_+]+$/);
      });
    });

    it(`defines a default shortname at 0 index for ${unicode}`, () => {
      expect(emoji.shortnames[0]).toBeDefined();
    });
  });
});
