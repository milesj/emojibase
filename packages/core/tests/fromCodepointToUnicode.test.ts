import { fromCodepointToUnicode } from '../src/fromCodepointToUnicode';

describe('fromCodepointToUnicode()', () => {
	it('returns a unicode character', () => {
		expect(fromCodepointToUnicode([128_104, 8205, 128_105, 8205, 128_103, 8205, 128_102])).toBe(
			'👨‍👩‍👧‍👦',
		);
	});
});
