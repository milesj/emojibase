import extractGender from '../src/extractGender';

describe('extractGender()', () => {
  it('returns null if no gender', () => {
    expect(extractGender('GUARDSMAN')).toBeNull();
  });

  it('returns null for gender symbols', () => {
    expect(extractGender('MALE SIGN')).toBeNull();
    expect(extractGender('FEMALE SIGN')).toBeNull();
  });

  it('returns male', () => {
    expect(extractGender('GUARDSMAN, MALE SIGN')).toBe('male');
  });

  it('returns female', () => {
    expect(extractGender('GUARDSMAN, FEMALE SIGN')).toBe('female');
  });
});
