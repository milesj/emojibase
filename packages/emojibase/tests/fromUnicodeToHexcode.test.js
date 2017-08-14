import loadFlatEmojiData from '../../emojibase-test-utils/src/loadFlatEmojiData';
import fromUnicodeToHexcode from '../src/fromUnicodeToHexcode';
import {
  TEXT,
  TEXT_VARIATION_SELECTOR,
  EMOJI_VARIATION_SELECTOR,
  SEQUENCE_REMOVAL_PATTERN,
} from '../src/constants';

const SEQUENCE_HEXCODE_PATTERN = new RegExp(`-(${SEQUENCE_REMOVAL_PATTERN.source})`, 'g');

describe('fromUnicodeToHexcode()', () => {
  loadFlatEmojiData().forEach((emoji) => {
    const unicode = (emoji.type === TEXT) ? emoji.text : emoji.emoji;

    // The `hexcode` does not include variation selectors,
    // while the converted hexcode might, so let's just
    // remove them all together as assertion is still the same.
    it(`converts unicode to hexcode for ${unicode}`, () => {
      const hexcode = fromUnicodeToHexcode(unicode, false);

      if (
        hexcode.length <= 10 &&
        (hexcode.endsWith(TEXT_VARIATION_SELECTOR) || hexcode.endsWith(EMOJI_VARIATION_SELECTOR))
      ) {
        expect(hexcode.replace(SEQUENCE_HEXCODE_PATTERN, '')).toBe(emoji.hexcode);
      } else {
        expect(hexcode).toBe(emoji.hexcode);
      }
    });
  });

  it('handles joiners correctly', () => {
    expect(fromUnicodeToHexcode('👨‍👩‍👧‍👦', true)).toBe('1F468-1F469-1F467-1F466');
    expect(fromUnicodeToHexcode('👨‍👩‍👧‍👦', false)).toBe('1F468-200D-1F469-200D-1F467-200D-1F466');
  });
});
