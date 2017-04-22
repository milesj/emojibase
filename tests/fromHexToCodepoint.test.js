import fromHexToCodepoint from '../src/fromHexToCodepoint';
import packageData from '../src/packageData';

describe('fromHexToCodepoint()', () => {
  packageData().forEach(({ unicode, codepoint, hexcode }) => {
    it(`converts hexcode to codepoint for ${unicode}`, () => {
      expect(fromHexToCodepoint(hexcode)).toEqual(codepoint);
    });
  });
});
