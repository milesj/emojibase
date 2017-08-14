import fromHexcodeToCodepoint from '../src/fromHexcodeToCodepoint';

describe('fromHexcodeToCodepoint()', () => {
  it('returns an array of numbers', () => {
    expect(fromHexcodeToCodepoint('1F468-200D-1F469-200D-1F467-200D-1F466'))
      .toEqual([128104, 8205, 128105, 8205, 128103, 8205, 128102]);
  });

  it('returns an array of numbers without joiners', () => {
    expect(fromHexcodeToCodepoint('1F468-1F469-1F467-1F466'))
      .toEqual([128104, 128105, 128103, 128102]);
  });
});
