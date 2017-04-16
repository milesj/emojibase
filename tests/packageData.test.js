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
    it(`formats a hexcode with ZWJ for ${emoji.unicode}`, () => {
      expect(emoji.hexcodeZWJ).toMatch(/^[A-F0-9]{1}[A-F0-9-]+[A-F0-9]{1}$/);
    });

    it(`formats a hexcode without ZWJ for ${emoji.unicode}`, () => {
      expect(emoji.hexcode).not.toMatch(/(200D|FE0F)/);
    });

    it(`hexcode doesnt exceed length 4 for ${emoji.unicode}`, () => {
      expect(emoji.hexcode.split('-').length).toBeLessThanOrEqual(4);
    });

    it(`codepoint doesnt exceed length 4 for ${emoji.unicode}`, () => {
      expect(emoji.codepoint.length).toBeLessThanOrEqual(4);
    });

    it(`defines a category for ${emoji.unicode}`, () => {
      expect(emoji.category).not.toBe('');
    });

    it(`defines keywords for ${emoji.unicode}`, () => {
      expect(emoji.keywords.length).toBeGreaterThanOrEqual(1);
    });

    it(`defines shortnames for ${emoji.unicode}`, () => {
      expect(emoji.shortnames.length).toBeGreaterThanOrEqual(1);
    });

    it(`defines a default shortname at 0 index for ${emoji.unicode}`, () => {
      expect(emoji.shortnames[0]).toMatch(/^:[a-z0-9-_]+:$/);
    });
  });
});
