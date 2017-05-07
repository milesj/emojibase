import packageData, { CACHE } from '../src/packageData';
import { SEQUENCE_REMOVAL_PATTERN } from '../src/constants';

describe('packageData()', () => {
  it('caches data', () => {
    const data = packageData();

    expect(CACHE.length).toBe(data.length);
  });

  packageData().forEach((emoji) => {
    it(`formats a hexcode without ZWJ for ${emoji.unicode}`, () => {
      expect(emoji.hexcode).not.toMatch(SEQUENCE_REMOVAL_PATTERN);
    });

    it(`hexcode doesnt exceed length 4 for ${emoji.unicode}`, () => {
      expect(emoji.hexcode.split('-').length).toBeLessThanOrEqual(4);
    });

    it(`codepoint doesnt exceed length 4 for ${emoji.unicode}`, () => {
      expect(emoji.codepoint.length).toBeLessThanOrEqual(4);
    });

    it(`defines a name for ${emoji.unicode}`, () => {
      expect(emoji.name).not.toBe('');
    });

    it(`defines a category for ${emoji.unicode}`, () => {
      expect(emoji.category).not.toBe('');
    });

    it(`defines a gender for ${emoji.unicode}`, () => {
      expect(emoji.gender).toBeOneOf([null, 'male', 'female']);
    });

    it(`defines a skin tone for ${emoji.unicode}`, () => {
      expect(emoji.skin).toBeOneOf([null, 1, 2, 3, 4, 5]);
    });

    it(`defines a display presentation for ${emoji.unicode}`, () => {
      expect(emoji.display).toBeOneOf([0, 1]);
    });

    it(`defines an order for ${emoji.unicode}`, () => {
      // Newer emoji may not have an order yet
      if (emoji.order) {
        expect(emoji.order).toBeGreaterThanOrEqual(1);
      }
    });

    it(`defines tags for ${emoji.unicode}`, () => {
      expect(emoji.tags.length).toBeGreaterThanOrEqual(1);

      emoji.tags.forEach((tag) => {
        expect(tag).not.toBe('');
      });
    });

    it(`defines shortnames for ${emoji.unicode}`, () => {
      expect(emoji.shortnames.length).toBeGreaterThanOrEqual(1);

      emoji.shortnames.forEach((name) => {
        expect(name).toMatch(/^[a-z0-9-_+]+$/);
      });
    });

    it(`defines a default shortname at 0 index for ${emoji.unicode}`, () => {
      expect(emoji.shortnames[0]).toBeDefined();
    });
  });
});
