import EMOJI_PATTERN from '../packages/emojibase-regex';
import EMOJI_UNICODE_PATTERN from '../packages/emojibase-regex/unicode';
// import EMOJI_UNICODE_PROPERTY_PATTERN from '../packages/emojibase-regex/property';
import SHORTCODE_PATTERN from '../packages/emojibase-regex/shortcode';
import { loadData } from './helpers';

const PATTERN_DESCRIPTIONS = [
  'standard regex',
  'unicode regex',
  'unicode property regex',
];

describe('regex', () => {
  loadData().forEach((emoji) => {
    const unicode = emoji.emoji || emoji.text;

    // Emoji_Tag_Sequences currently do not work
    if (['ENGLAND', 'SCOTLAND', 'WALES'].includes(emoji.name)) {
      return;
    }

    [EMOJI_PATTERN, EMOJI_UNICODE_PATTERN].forEach((pattern, i) => {
      describe(PATTERN_DESCRIPTIONS[i], () => {
        const globalPattern = new RegExp(pattern.source, `g${pattern.flags}`);

        it(`matches unicode by itself for ${unicode}`, () => {
          const match = unicode.match(pattern);

          expect(match).not.toBe(null);
          expect(match[0]).toBe(unicode);
        });

        it(`matches unicode in the middle of a string for ${unicode}`, () => {
          const match = `In the middle ${unicode} of a string.`.match(pattern);

          expect(match).not.toBe(null);
          expect(match[0]).toBe(unicode);
        });

        it(`matches multiple unicode for ${unicode}`, () => {
          const matches = `One ${unicode} Two ${unicode} Three ${unicode}.`.match(globalPattern);

          expect(matches).not.toBe(null);
          expect(matches.length).toBe(3);
          expect(matches).toEqual([unicode, unicode, unicode]);
        });
      });
    });

    emoji.shortcodes.forEach((code) => {
      // Does not include colons by default
      const shortcode = `:${code}:`;

      it(`matches shortcode by itself for ${shortcode}`, () => {
        expect(shortcode).toMatch(SHORTCODE_PATTERN);
      });

      it(`matches shortcode in the middle of a string for ${shortcode}`, () => {
        expect(`In the middle ${shortcode} of a string.`).toMatch(SHORTCODE_PATTERN);
      });

      it(`matches multiple shortcode for ${shortcode}`, () => {
        const globalPattern = new RegExp(SHORTCODE_PATTERN.source, 'g');
        const matches = `One ${shortcode} Two ${shortcode} Three ${shortcode}.`.match(globalPattern);

        expect(matches.length).toBe(3);
      });
    });
  });
});
