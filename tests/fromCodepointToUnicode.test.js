import fromCodepointToUnicode from '../src/fromCodepointToUnicode';

describe('fromCodepointToUnicode()', () => {
  it('returns a unicode character', () => {
    expect(fromCodepointToUnicode([128104, 8205, 128105, 8205, 128103, 8205, 128102]))
      .toBe('👨‍👩‍👧‍👦');
  });
});
