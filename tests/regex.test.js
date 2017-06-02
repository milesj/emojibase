import UNICODE_PATTERN from '../regex';
import SHORTNAME_PATTERN from '../regex/shortname';
import packageData from '../src/packageData';

describe('regex', () => {
  const UNICODE_PATTERN_GLOBAL = new RegExp(UNICODE_PATTERN.source, 'g');
  const SHORTNAME_PATTERN_GLOBAL = new RegExp(SHORTNAME_PATTERN.source, 'g');

  packageData().forEach(({ shortnames, ...emoji }) => {
    const unicode = emoji[emoji.display];

    it(`matches unicode by itself for ${unicode}`, () => {
      const match = unicode.match(UNICODE_PATTERN);

      expect(match).not.toBe(null);
      expect(match[0]).toBe(unicode);
    });

    it(`matches unicode in the middle of a string for ${unicode}`, () => {
      const match = `In the middle ${unicode} of a string.`.match(UNICODE_PATTERN);

      expect(match).not.toBe(null);
      expect(match[0]).toBe(unicode);
    });

    it(`matches multiple unicode for ${unicode}`, () => {
      const matches = `One ${unicode} Two ${unicode} Three ${unicode}.`.match(UNICODE_PATTERN_GLOBAL);

      expect(matches.length).toBe(3);
      expect(matches).toEqual([unicode, unicode, unicode]);
    });

    shortnames.forEach((name) => {
      // Does not include colons by default
      const shortname = `:${name}:`;

      it(`matches shortname by itself for ${shortname}`, () => {
        expect(shortname).toMatch(SHORTNAME_PATTERN);
      });

      it(`matches shortname in the middle of a string for ${shortname}`, () => {
        expect(`In the middle ${shortname} of a string.`).toMatch(SHORTNAME_PATTERN);
      });

      it(`matches multiple shortname for ${shortname}`, () => {
        const matches = `One ${shortname} Two ${shortname} Three ${shortname}.`.match(SHORTNAME_PATTERN_GLOBAL);

        expect(matches.length).toBe(3);
      });
    });
  });
});
