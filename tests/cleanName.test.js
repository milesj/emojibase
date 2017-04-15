import cleanName from '../src/cleanName';

describe('cleanName()', () => {
  it('returns the name lowercased', () => {
    expect(cleanName('FOO')).toBe('foo');
  });

  it('returns first half if a semi-colon is found', () => {
    expect(cleanName('FOO; BAR')).toBe('foo');
  });

  it('removes non-alnum characters', () => {
    expect(cleanName('FOO! $BAZ%; BAR')).toBe('foo baz');
  });

  it('persists dashes', () => {
    expect(cleanName('FOO-BAZ; BAR')).toBe('foo-baz');
  });
});
