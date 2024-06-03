import { generateEmoticonPermutations } from '../src/generateEmoticonPermutations';

describe('generateEmoticonPermutations()', () => {
	it('handles happy', () => {
		const a = generateEmoticonPermutations(':)');
		const b = ['=-)', '=-}', ':-]', '=-]', ':-}', ':-)', '=}', '=]', '=)', ':}', ':]', ':)'];

		a.sort();
		b.sort();

		expect(a).toEqual(b);
	});

	it('handles sad', () => {
		const a = generateEmoticonPermutations(':(');
		const b = ['=-(', '=-{', ':-[', '=-[', ':-{', ':-(', '={', '=[', '=(', ':{', ':[', ':('];

		a.sort();
		b.sort();

		expect(a).toEqual(b);
	});

	it('handles mouths using letters', () => {
		const a = generateEmoticonPermutations(':p');
		const b = ['=-P', ':-P', '=-p', ':-p', ':p', ':P', '=P', '=p'];

		a.sort();
		b.sort();

		expect(a).toEqual(b);
	});

	it('handles 3 character emoticons', () => {
		const a = generateEmoticonPermutations('>:(');
		const b = [
			'>=-(',
			'>=-{',
			'>:-[',
			'>=-[',
			'>:-{',
			'>:-(',
			'>={',
			'>=[',
			'>=(',
			'>:{',
			'>:[',
			'>:(',
		];

		a.sort();
		b.sort();

		expect(a).toEqual(b);
	});

	it('doesnt include nose variations', () => {
		expect(generateEmoticonPermutations(':|', { withNose: false })).toEqual([':|', '=|']);
	});

	it('doesnt assume a face', () => {
		expect(generateEmoticonPermutations(String.raw`\m/`, { isFace: false })).toEqual([String.raw`\m/`, String.raw`\M/`]);
	});
});
