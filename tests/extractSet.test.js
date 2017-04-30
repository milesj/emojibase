import extractSet from '../src/extractSet';
import { EXPANDED, STANDARD, COMPACT } from '../src/constants';

describe('extractSet()', () => {
  const emoji = {
    name: 'MAN, WOMAN, GIRL, BOY',
    unicode: '👨‍👩‍👧‍👦',
    hexcode: '1F468-1F469-1F467-1F466',
    category: 'people',
    codepoint: [128104, 128105, 128103, 128102],
    tags: ['boy', 'family', 'girl', 'man', 'woman'],
    shortnames: ['family_mwgb'],
    order: 963,
    display: 1,
    // These aren't part of the real family emoji, just for testing
    skin: null,
    gender: null,
  };

  it('returns expanded format without nulls', () => {
    expect(extractSet(emoji, EXPANDED)).toEqual({
      name: 'MAN, WOMAN, GIRL, BOY',
      unicode: '👨‍👩‍👧‍👦',
      hexcode: '1F468-1F469-1F467-1F466',
      category: 'people',
      codepoint: [128104, 128105, 128103, 128102],
      tags: ['boy', 'family', 'girl', 'man', 'woman'],
      shortnames: ['family_mwgb'],
      order: 963,
      display: 1,
    });
  });

  it('returns standard format', () => {
    expect(extractSet(emoji, STANDARD)).toEqual({
      name: 'MAN, WOMAN, GIRL, BOY',
      unicode: '👨‍👩‍👧‍👦',
      hexcode: '1F468-1F469-1F467-1F466',
      codepoint: [128104, 128105, 128103, 128102],
      shortname: 'family_mwgb',
    });
  });

  it('returns compact format', () => {
    expect(extractSet(emoji, COMPACT)).toEqual({
      unicode: '👨‍👩‍👧‍👦',
      hexcode: '1F468-1F469-1F467-1F466',
      shortname: 'family_mwgb',
    });
  });
});
