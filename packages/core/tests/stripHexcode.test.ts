import { stripHexcode } from '../src/stripHexcode';

describe('stripHexcode()', () => {
	it('strips ZWJs and variation selectors', () => {
		expect(stripHexcode('1F468-200D-1F469-200D-1F467-200D-1F466')).toBe('1F468-1F469-1F467-1F466');
	});

	it('doesnt strip regular codepoints', () => {
		expect(stripHexcode('1F468-1F469-1F467-1F466')).toBe('1F468-1F469-1F467-1F466');
	});

	it('works with spaces', () => {
		expect(stripHexcode('1F468 200D 2695 FE0F')).toBe('1F468 2695');
	});
});
