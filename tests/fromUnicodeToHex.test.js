import fromUnicodeToHex from '../src/fromUnicodeToHex';
import packageData from '../src/packageData';

describe('fromUnicodeToHex()', () => {
  packageData().forEach(({ unicode, hexcode }) => {
    it(`converts unicode to hexcode for ${unicode}`, () => {
      expect(fromUnicodeToHex(unicode, true)).toBe(hexcode);
    });
  });
});
