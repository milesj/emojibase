import pattern from '../regex';
import packageData from '../src/packageData';

describe('regex', () => {
  const regex = new RegExp(pattern);
  const regexGlobal = new RegExp(pattern, 'g');

  packageData().forEach(({ unicode }) => {
    it(`matches unicode by itself for ${unicode}`, () => {
      expect(unicode).toMatch(regex);
    });

    it(`matches unicode in the middle of a string for ${unicode}`, () => {
      expect(`In the middle ${unicode} of a string.`).toMatch(regex);
    });

    it(`matches multiple unicode for ${unicode}`, () => {
      const matches = `One ${unicode} Two ${unicode} Three ${unicode}.`.match(regexGlobal);

      // `match` returns an array of surrogates as separate items
      expect(matches.length).toBeGreaterThanOrEqual(3);
    });
  });
});
