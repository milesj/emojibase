import { FEMALE, MALE } from 'emojibase';
import { extractGender } from '../src/parsers/extractGender';

describe('extractGender()', () => {
	it('uses a gender sign joined to a person', () => {
		expect(extractGender('1F3C3-200D-2642-FE0F')).toBe(MALE); // man running
		expect(extractGender('1F46F-200D-2640-FE0F')).toBe(FEMALE); // women with bunny ears
	});

	it('uses a gendered person', () => {
		expect(extractGender('1F469-200D-2695-FE0F')).toBe(FEMALE); // woman health worker
		expect(extractGender('1F468-200D-1F9B0')).toBe(MALE); // man: red hair
		expect(extractGender('1F474')).toBe(MALE); // old man
		expect(extractGender('1F483')).toBe(FEMALE); // woman dancing
	});

	it('ignores skin tones', () => {
		expect(extractGender('1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC')).toBe(MALE); // men holding hands
	});

	it('has no gender for gender-neutral emoji', () => {
		expect(extractGender('1F9D1-200D-1F384')).toBeNull(); // mx claus
		expect(extractGender('1F46B')).toBeNull(); // woman and man holding hands
	});

	it('has no gender when genders are combined', () => {
		expect(extractGender('1F468-200D-1F469-200D-1F466')).toBeNull(); // family: man, woman, boy
	});

	it('has no gender for a gender sign on its own', () => {
		expect(extractGender('2640')).toBeNull();
		expect(extractGender('2642-FE0F')).toBeNull();
	});
});
