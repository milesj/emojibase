import { UNQUALIFIED } from 'emojibase';
import { extractLineDescription } from '../src/parsers/extractLineDescription';
import { parseData } from '../src/parsers/parseData';
import { parseMetadata } from '../src/parsers/parseMetadata';
import { parseSequences } from '../src/parsers/parseSequences';

jest.mock('../src/helpers/log', () => ({
	log: { error: jest.fn(), info: jest.fn(), log: jest.fn(), success: jest.fn(), title: jest.fn() },
}));

jest.mock('../src/helpers/writeCache', () => ({ writeCache: jest.fn() }));

describe('extractLineDescription()', () => {
	it('removes the version, count, and sample emoji', () => {
		expect(extractLineDescription('E0.6   [1] (©️)       copyright sign')).toBe('copyright sign');
		expect(extractLineDescription('V1.1 [1] (©) copyright sign')).toBe('copyright sign');
	});

	it('keeps parentheses that belong to the name', () => {
		expect(extractLineDescription('E0.6   [1] (🅾️)       O button (blood type)')).toBe(
			'o button (blood type)',
		);
	});

	it('returns nothing when the comment has no name', () => {
		expect(extractLineDescription('E2.0   [1] (👨‍❤️‍👨)')).toBe('');
	});
});

describe('parseData()', () => {
	const data = parseData(
		'17.0',
		[
			'1F170..1F171  ; Emoji  # E0.6   [2] (🅰️..🅱️)    A button (blood type)..B button (blood type)',
			'1F17E         ; Emoji  # E0.6   [1] (🅾️)       O button (blood type)',
			'# Total elements: 3',
		].join('\n'),
	);

	it('does not reuse a range description for each code point', () => {
		expect(data['1F170'].description).toBe('');
		expect(data['1F171'].description).toBe('');
	});

	it('describes single code points from the comment', () => {
		expect(data['1F17E'].description).toBe('o button (blood type)');
	});
});

describe('parseSequences()', () => {
	const data = parseSequences(
		'17.0',
		[
			'# Basic_Emoji',
			'1F516..1F518  ; Basic_Emoji  ; bookmark..link  # E0.6   [3] (🔖..🔗)',
			'00A9 FE0F     ; Basic_Emoji  ; copyright       # E0.6   [1] (©️)',
			'# Total elements: 4',
			'',
			'# Emoji_Keycap_Sequence',
			String.raw`0023 FE0F 20E3 ; Emoji_Keycap_Sequence ; keycap: \x{23} # E0.6 [1] (#️⃣)`,
			'# Total elements: 1',
		].join('\n'),
		'RGI_Emoji_Modifier_Sequence',
	);

	it('does not reuse a range description for each code point', () => {
		expect(data['1F516'].description).toBe('');
		expect(data['1F518'].description).toBe('');
	});

	it('uses the CLDR name from the description field', () => {
		expect(data['00A9-FE0F'].description).toBe('copyright');
	});

	it('decodes escaped characters', () => {
		expect(data['0023-FE0F-20E3'].description).toBe('keycap: #');
	});
});

describe('parseMetadata()', () => {
	const metadata = parseMetadata(
		[
			'# group: Symbols',
			'# subgroup: keycap',
			'0023 FE0F 20E3                                         ; fully-qualified     # #️⃣ E0.6 keycap: #',
			'0023 20E3                                              ; unqualified         # #⃣ E0.6 keycap: #',
			'1F51F                                                  ; fully-qualified     # 🔟 E0.6 keycap: 10',
		].join('\n'),
	);

	it('captures the CLDR name of each emoji', () => {
		expect(metadata['0023-FE0F-20E3'].name).toBe('keycap: #');
		expect(metadata['1F51F'].name).toBe('keycap: 10');
	});

	it('does not mistake a "#" in the name for the start of the comment', () => {
		expect(metadata['0023-FE0F-20E3'].qualifiers).toEqual({
			'0023-20E3': UNQUALIFIED,
			'0023-FE0F-20E3': 0,
		});
	});
});
