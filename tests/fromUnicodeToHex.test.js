import fromUnicodeToHex from '../src/fromUnicodeToHex';
import packageData from '../src/packageData';

describe('fromUnicodeToHex()', () => {
  packageData().forEach(({ unicode, hexcode }) => {
    it(`converts unicode to hexcode for ${unicode}`, () => {
      expect(fromUnicodeToHex(unicode, true)).toBe(hexcode);
    });
  });

  it('handles joiners correctly', () => {
    expect(fromUnicodeToHex('👨‍👩‍👧‍👦', true)).toBe('1F468-1F469-1F467-1F466');
    expect(fromUnicodeToHex('👨‍👩‍👧‍👦', false)).toBe('1F468-200D-1F469-200D-1F467-200D-1F466');
  });
});
