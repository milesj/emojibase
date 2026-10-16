import { extractUnicodeVersion } from '../src/parsers/extractUnicodeVersion';

describe('extractUnicodeVersion()', () => {
	it('maps early emoji versions to the Unicode version they appeared in', () => {
		expect(extractUnicodeVersion(0.6)).toBe(6);
		expect(extractUnicodeVersion(0.7)).toBe(7);
		expect(extractUnicodeVersion(2)).toBe(8);
		expect(extractUnicodeVersion(4)).toBe(9);
		expect(extractUnicodeVersion(5)).toBe(10);
	});

	it('matches the Unicode version since E11.0', () => {
		expect(extractUnicodeVersion(12.1)).toBe(12.1);
		expect(extractUnicodeVersion(15.1)).toBe(15.1);
		expect(extractUnicodeVersion(17)).toBe(17);
	});

	it('maps E13.1, which had no Unicode release of its own, to 13.0', () => {
		expect(extractUnicodeVersion(13.1)).toBe(13);
	});

	it('has no Unicode version for E0.0', () => {
		expect(extractUnicodeVersion(0)).toBeNull();
	});
});
