import fromHexToCodepoint from '../src/fromHexToCodepoint';
import packageData from '../src/packageData';

describe('fromHexToCodepoint()', () => {
  packageData().forEach(({ codepoint, hexcode, ...emoji }) => {
    const unicode = emoji[emoji.display];

    it(`converts hexcode to codepoint for ${unicode}`, () => {
      expect(fromHexToCodepoint(hexcode)).toEqual(codepoint);
    });
  });
});
