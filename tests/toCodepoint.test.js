import toCodepoint from '../src/toCodepoint';

describe('toCodepoint()', () => {
  it('converst a dashed hexcode to an array of codepoints', () => {
    expect(toCodepoint('1F954')).toEqual([129364]);
    expect(toCodepoint('261D-1F3FD')).toEqual([9757, 127997]);
    expect(toCodepoint('1F469-1F3FC-1F3ED')).toEqual([128105, 127996, 127981]);
    expect(toCodepoint('1F469-1F469-1F466-1F466')).toEqual([128105, 128105, 128102, 128102]);
  });
});
