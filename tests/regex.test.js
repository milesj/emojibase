import UNICODE_PATTERN from '../regex';
import SHORTNAME_PATTERN from '../regex/shortname';
import packageData from '../src/packageData';

describe('regex', () => {
  const unicodeRegex = new RegExp(UNICODE_PATTERN);
  const unicodeRegexGlobal = new RegExp(UNICODE_PATTERN, 'g');
  const shortnameRegex = new RegExp(SHORTNAME_PATTERN);
  const shortnameRegexGlobal = new RegExp(SHORTNAME_PATTERN, 'g');

  packageData().forEach(({ unicode, shortnames }) => {
    it(`matches unicode by itself for ${unicode}`, () => {
      expect(unicode).toMatch(unicodeRegex);
    });

    it(`matches unicode in the middle of a string for ${unicode}`, () => {
      expect(`In the middle ${unicode} of a string.`).toMatch(unicodeRegex);
    });

    it(`matches multiple unicode for ${unicode}`, () => {
      const matches = `One ${unicode} Two ${unicode} Three ${unicode}.`.match(unicodeRegexGlobal);

      // `match` returns an array of surrogates as separate items
      expect(matches.length).toBeGreaterThanOrEqual(3);
    });

    shortnames.forEach((name) => {
      // Does not include colons by default
      const shortname = `:${name}:`;

      it(`matches shortname by itself for ${shortname}`, () => {
        expect(shortname).toMatch(shortnameRegex);
      });

      it(`matches shortname in the middle of a string for ${shortname}`, () => {
        expect(`In the middle ${shortname} of a string.`).toMatch(shortnameRegex);
      });

      it(`matches multiple shortname for ${shortname}`, () => {
        const matches = `One ${shortname} Two ${shortname} Three ${shortname}.`.match(shortnameRegexGlobal);

        expect(matches.length).toBe(3);
      });
    });
  });
});
