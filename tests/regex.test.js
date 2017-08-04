import EMOJI_PATTERN from '../packages/emojibase-regex';
// import EMOJI_UNICODE_PATTERN from '../packages/emojibase-regex/unicode';
// import SHORTNAME_PATTERN from '../packages/emojibase-regex/shortname';
import { loadData } from './helpers';

const PATTERN_DESCRIPTIONS = [
  'standard regex',
  'unicode regex',
  'unicode property regex',
];

describe('regex', () => {
  // const SHORTNAME_PATTERN_GLOBAL = new RegExp(SHORTNAME_PATTERN.source, 'g');

  loadData().forEach((emoji) => {
    const unicode = emoji.emoji || emoji.text;

    // Emoji_Tag_Sequences currently do not work
    if (['ENGLAND', 'SCOTLAND', 'WALES'].includes(emoji.name)) {
      return;
    }

    [EMOJI_PATTERN].forEach((pattern, i) => {
      describe(PATTERN_DESCRIPTIONS[i], () => {
        const globalPattern = new RegExp(pattern.source, 'g');

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

          expect(matches.length).toBe(3);
          expect(matches).toEqual([unicode, unicode, unicode]);
        });
      });
    });

    // shortnames.forEach((name) => {
    //   // Does not include colons by default
    //   const shortname = `:${name}:`;
    //
    //   it(`matches shortname by itself for ${shortname}`, () => {
    //     expect(shortname).toMatch(SHORTNAME_PATTERN);
    //   });
    //
    //   it(`matches shortname in the middle of a string for ${shortname}`, () => {
    //     expect(`In the middle ${shortname} of a string.`).toMatch(SHORTNAME_PATTERN);
    //   });
    //
    //   it(`matches multiple shortname for ${shortname}`, () => {
    //     const matches = `One ${shortname} Two ${shortname} Three ${shortname}.`.match(SHORTNAME_PATTERN_GLOBAL);
    //
    //     expect(matches.length).toBe(3);
    //   });
    // });
  });
});
