import { fromHexcodeToCodepoint } from '../src/fromHexcodeToCodepoint';

describe('fromHexcodeToCodepoint()', () => {
	it('returns an array of numbers', () => {
		expect(fromHexcodeToCodepoint('1F468-200D-1F469-200D-1F467-200D-1F466')).toEqual([
			128_104, 8205, 128_105, 8205, 128_103, 8205, 128_102,
		]);
	});

	it('returns an array of numbers without joiners', () => {
		expect(fromHexcodeToCodepoint('1F468-1F469-1F467-1F466')).toEqual([
			128_104, 128_105, 128_103, 128_102,
		]);
	});
});
