import { EMOTICON_OPTIONS, generateEmoticonPermutations } from 'emojibase';
import { loadFlatEmojiData } from 'emojibase-test-utils';
import toUnicode from 'emojibase-generator/lib/generators/toUnicode';
import COMBO_PATTERN from '..';
import EMOJI_PATTERN from '../emoji';
import TEXT_PATTERN from '../text';
import COMBO_CODEPOINT_PATTERN from '../codepoint';
import EMOJI_CODEPOINT_PATTERN from '../codepoint/emoji';
import TEXT_CODEPOINT_PATTERN from '../codepoint/text';
// import EMOJI_UNICODE_PROPERTY_PATTERN from '../property';
import SHORTCODE_PATTERN from '../shortcode';
import EMOTICON_PATTERN from '../emoticon';

const PATTERN_DESCRIPTIONS = {
  standard: 'standard regex',
  codepoint: 'unicode codepoint regex',
  property: 'unicode property regex',
};

const VARIATION_DESCRIPTIONS = {
  emoji: 'emoji presentation',
  text: 'text presentation',
  none: 'no presentation',
};

const BASE_PATTERNS = [
  { pattern: COMBO_PATTERN, type: 'standard' },
  { pattern: COMBO_CODEPOINT_PATTERN, type: 'codepoint' },
];

describe('regex', () => {
  loadFlatEmojiData().forEach(emoji => {
    // Emoji_Tag_Sequences currently do not work
    if (['ENGLAND', 'SCOTLAND', 'WALES'].includes(emoji.name)) {
      return;
    }

    const variations = [];

    // Has variation selectors
    if (emoji.emoji && emoji.text) {
      variations.push({
        variation: 'none',
        unicode: toUnicode(emoji.hexcode), // No FE0E/FE0F
        patterns: BASE_PATTERNS,
      });

      variations.push({
        variation: 'emoji',
        unicode: emoji.emoji,
        patterns: [
          ...BASE_PATTERNS,
          { pattern: EMOJI_PATTERN, type: 'standard' },
          { pattern: EMOJI_CODEPOINT_PATTERN, type: 'codepoint' },
        ],
      });

      variations.push({
        variation: 'text',
        unicode: emoji.text,
        patterns: [
          ...BASE_PATTERNS,
          { pattern: TEXT_PATTERN, type: 'standard' },
          { pattern: TEXT_CODEPOINT_PATTERN, type: 'codepoint' },
        ],
      });
      // No variation selectors
    } else {
      variations.push({
        variation: 'none',
        unicode: emoji.emoji,
        patterns: BASE_PATTERNS,
      });
    }

    variations.forEach(({ unicode, variation, patterns }) => {
      describe(`${VARIATION_DESCRIPTIONS[variation]}`, () => {
        patterns.forEach(({ pattern, type }) => {
          describe(`${PATTERN_DESCRIPTIONS[type]}`, () => {
            it(`matches unicode by itself for ${unicode}`, () => {
              const match = unicode.match(pattern);
              expect(match).not.toBeNull();
              expect(match[0]).toBe(unicode);
            });

            it(`matches unicode in the middle of a string for ${unicode}`, () => {
              const match = `In the middle ${unicode} of a string.`.match(pattern);
              expect(match).not.toBeNull();
              expect(match[0]).toBe(unicode);
            });

            it(`matches multiple unicode for ${unicode}`, () => {
              const matches = `One ${unicode} Two ${unicode} Three ${unicode}.`.match(
                new RegExp(pattern.source, `g${pattern.flags}`),
              );
              expect(matches).not.toBeNull();
              expect(matches).toHaveLength(3);
              expect(matches).toEqual([unicode, unicode, unicode]);
            });
          });
        });
      });
    });

    emoji.shortcodes.forEach(code => {
      const shortcode = `:${code}:`; // Does not include colons by default

      it(`matches shortcode by itself for ${shortcode}`, () => {
        expect(shortcode).toMatch(SHORTCODE_PATTERN);
      });

      it(`matches shortcode in the middle of a string for ${shortcode}`, () => {
        expect(`In the middle ${shortcode} of a string.`).toMatch(SHORTCODE_PATTERN);
      });

      it(`matches multiple shortcode for ${shortcode}`, () => {
        const globalPattern = new RegExp(SHORTCODE_PATTERN.source, 'g');
        const matches = `One ${shortcode} Two ${shortcode} Three ${shortcode}.`.match(
          globalPattern,
        );
        expect(matches).toHaveLength(3);
      });
    });

    if (emoji.emoticon) {
      generateEmoticonPermutations(emoji.emoticon, EMOTICON_OPTIONS[emoji.emoticon] || {}).forEach(
        emoticon => {
          it(`matches emoticon variation ${emoticon}`, () => {
            expect(emoticon).toMatch(EMOTICON_PATTERN);
          });
        },
      );
    }
  });
});
