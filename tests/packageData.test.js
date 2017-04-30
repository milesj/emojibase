import packageData, { CACHE } from '../src/packageData';

describe('packageData()', () => {
  it('caches stable data', () => {
    const data = packageData();

    expect(CACHE.stable.length).toBe(data.length);
  });

  it('caches beta data', () => {
    const data = packageData(true);

    expect(CACHE.beta.length).toBe(data.length);
  });

  packageData().forEach((emoji) => {
    it(`formats a hexcode without ZWJ for ${emoji.unicode}`, () => {
      expect(emoji.hexcode).not.toMatch(/(200D|FE0F)/);
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
      expect(emoji.order).toBeGreaterThanOrEqual(1);
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
