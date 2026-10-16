// Conformance of the generated datasets and regex patterns with UTS #51 (Unicode Emoji 17.0)
// and UTS #35 annotations (CLDR 48). Known violations live in tests/conformance-baseline.json;
// see ./conformance/baseline.ts for how the baseline works.

import fs from 'node:fs';
import path from 'node:path';
import {
	EMOJI,
	type Emoji,
	flattenEmojiData,
	fromCodepointToUnicode,
	fromHexcodeToCodepoint,
	fromUnicodeToHexcode,
	FULLY_QUALIFIED,
	type Locale,
	MINIMALLY_QUALIFIED,
	type Qualifier,
	SUPPORTED_LOCALES,
	TEXT,
	UNQUALIFIED,
} from 'emojibase';
import INDEX_PATTERN from 'emojibase-regex';
import CODEPOINT_INDEX_PATTERN from 'emojibase-regex/codepoint';
import CODEPOINT_EMOJI_PATTERN from 'emojibase-regex/codepoint/emoji';
import CODEPOINT_EMOJI_LOOSE_PATTERN from 'emojibase-regex/codepoint/emoji-loose';
import CODEPOINT_TEXT_PATTERN from 'emojibase-regex/codepoint/text';
import CODEPOINT_TEXT_LOOSE_PATTERN from 'emojibase-regex/codepoint/text-loose';
import EMOJI_PATTERN from 'emojibase-regex/emoji';
import EMOJI_LOOSE_PATTERN from 'emojibase-regex/emoji-loose';
import PROPERTY_INDEX_PATTERN from 'emojibase-regex/property';
import PROPERTY_EMOJI_PATTERN from 'emojibase-regex/property/emoji';
import PROPERTY_TEXT_PATTERN from 'emojibase-regex/property/text';
import TEXT_PATTERN from 'emojibase-regex/text';
import TEXT_LOOSE_PATTERN from 'emojibase-regex/text-loose';
import { expectBaseline, UPDATE_BASELINE, writeBaseline } from './conformance/baseline';
import { CldrOracle, getFlagCode } from './conformance/cldr';
import {
	type EmojiTestLine,
	isDefaultTextPresentation,
	loadUnicodeOracle,
	type TestStatus,
	toCldrKey,
	toIdentity,
} from './conformance/unicode';

const DATA_DIR = path.join(__dirname, '..');

// Regional indicators are not RGI emoji (UTS #51 ED-14, C3), but emojibase deliberately ships
// them as standalone entries, so they are exempt from the RGI checks.
const REGIONAL_INDICATOR_PATTERN = /^1F1(?:E[6-9A-F]|F[\dA-F])$/;

// Keycap bases are emoji components with variation sequences, but they are not emoji on their
// own (UTS #51 ED-20), so their presentation sequences are left out of the regex checks.
const KEYCAP_BASE_PATTERN = /^(?:0023|002A|003\d)$/;

const QUALIFIER_STATUS: Record<number, TestStatus> = {
	[FULLY_QUALIFIED]: 'fully-qualified',
	[MINIMALLY_QUALIFIED]: 'minimally-qualified',
	[UNQUALIFIED]: 'unqualified',
};

const unicode = loadUnicodeOracle();

function readJson<T>(file: string): T {
	return JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8')) as T;
}

function findRgi(emoji: Emoji): EmojiTestLine | undefined {
	return unicode.rgi.get(toIdentity(emoji.hexcode));
}

// UTS #51 §1.5.2 Emoji Versions. E0.0 marks components and other characters that are not
// emoji in their own right, so they have no corresponding Unicode version.
function getUnicodeVersion(emojiVersion: number): number | null {
	const map: Record<string, number | null> = {
		0: null,
		0.6: 6,
		0.7: 7,
		1: 8,
		13.1: 13,
		2: 8,
		3: 9,
		4: 9,
		5: 10,
	};

	return String(emojiVersion) in map ? map[String(emojiVersion)] : emojiVersion;
}

afterAll(() => {
	writeBaseline();
});

describe('UTS #51 conformance', () => {
	const entries = flattenEmojiData(readJson<Emoji[]>('en/data.raw.json'));

	it('parses the Unicode 17.0 fixtures', () => {
		const counts: Record<string, number> = {};

		unicode.lines.forEach((line) => {
			counts[line.status] = (counts[line.status] ?? 0) + 1;
		});

		expect(counts).toEqual(unicode.statusCounts);
		expect(unicode.variationBases.size).toBe(unicode.variationTotal);
		expect(unicode.variationLineCount).toBe(unicode.variationTotal * 2);

		// Every non-RGI form must belong to an RGI emoji, or identities are not unique
		unicode.lines.forEach((line) => {
			expect(unicode.rgi.get(toIdentity(line.hexcode))).toBeDefined();
		});
	});

	it('includes every RGI emoji exactly once', () => {
		const seen = new Map<string, number>();
		const violations: string[] = [];

		entries.forEach((emoji) => {
			const identity = toIdentity(emoji.hexcode);

			seen.set(identity, (seen.get(identity) ?? 0) + 1);
		});

		unicode.rgi.forEach((line, identity) => {
			const count = seen.get(identity) ?? 0;

			if (count === 0) {
				violations.push(`${line.hexcode}: missing (${line.name})`);
			} else if (count > 1) {
				violations.push(`${line.hexcode}: appears ${count} times`);
			}
		});

		expectBaseline('uts51/coverage', violations);
	});

	it('only includes RGI emoji, apart from regional indicators', () => {
		const violations = entries
			.filter((emoji) => !findRgi(emoji) && !REGIONAL_INDICATOR_PATTERN.test(emoji.hexcode))
			.map((emoji) => `${emoji.hexcode}: not in the RGI emoji set`);

		expectBaseline('uts51/rgi', violations);
	});

	it('uses the fully-qualified form for the emoji field (ED-18)', () => {
		const violations: string[] = [];

		entries.forEach((emoji) => {
			const line = findRgi(emoji);

			if (line && emoji.emoji !== fromCodepointToUnicode(fromHexcodeToCodepoint(line.hexcode))) {
				violations.push(
					`${line.hexcode}: emoji field is ${fromUnicodeToHexcode(emoji.emoji, false)}`,
				);
			}
		});

		expectBaseline('uts51/emoji-field', violations);
	});

	it('uses the default presentation for the type field (ED-6, ED-7)', () => {
		const violations: string[] = [];

		entries.forEach((emoji) => {
			const line = findRgi(emoji);

			if (!line) {
				return;
			}

			const expected = isDefaultTextPresentation(line) ? TEXT : EMOJI;

			if (emoji.type !== expected) {
				violations.push(`${line.hexcode}: type is ${emoji.type}, expected ${expected}`);
			}
		});

		expectBaseline('uts51/presentation-type', violations);
	});

	it('uses the emoji version from emoji-test.txt', () => {
		const violations: string[] = [];

		entries.forEach((emoji) => {
			const line = findRgi(emoji);

			if (line && emoji.version !== line.version) {
				violations.push(`${line.hexcode}: version is ${emoji.version}, expected ${line.version}`);
			}
		});

		expectBaseline('uts51/version', violations);
	});

	it('lists qualification statuses exactly as emoji-test.txt (ED-28)', () => {
		const hexcodes = readJson<Record<string, Record<string, Qualifier>>>('meta/hexcodes.json');
		const forms = new Map<string, EmojiTestLine[]>();
		const violations: string[] = [];
		const listed = new Set<string>();

		unicode.lines.forEach((line) => {
			const identity = toIdentity(line.hexcode);

			forms.set(identity, [...(forms.get(identity) ?? []), line]);
		});

		entries.forEach((emoji) => {
			if (!findRgi(emoji)) {
				return;
			}

			const actual = hexcodes[emoji.hexcode] ?? {};
			const expected = new Map(
				(forms.get(toIdentity(emoji.hexcode)) ?? []).map((line) => [line.hexcode, line.status]),
			);

			listed.add(emoji.hexcode);

			expected.forEach((status, hexcode) => {
				if (!(hexcode in actual)) {
					violations.push(`${hexcode}: ${status} form is missing`);
				}
			});

			Object.entries(actual).forEach(([hexcode, qualifier]) => {
				const status = QUALIFIER_STATUS[qualifier];
				const want = expected.get(hexcode);

				if (!want) {
					violations.push(`${hexcode}: listed as ${status}, but not in emoji-test.txt`);
				} else if (want !== status) {
					violations.push(`${hexcode}: listed as ${status}, but emoji-test.txt says ${want}`);
				}
			});
		});

		Object.keys(hexcodes).forEach((hexcode) => {
			if (!listed.has(hexcode)) {
				violations.push(`${hexcode}: key does not match an RGI emoji in the dataset`);
			}
		});

		expectBaseline('uts51/meta-hexcodes', violations);
	});

	it('groups versions/emoji.json by emoji version', () => {
		const versions = readJson<Record<string, string[]>>('versions/emoji.json');
		const violations: string[] = [];

		Object.entries(versions).forEach(([version, list]) => {
			list.forEach((hexcode) => {
				const line = unicode.byHexcode.get(hexcode);

				if (line && Number(version) !== line.version) {
					violations.push(`${hexcode}: listed under ${version}, expected ${line.version}`);
				}
			});
		});

		expectBaseline('uts51/versions-emoji', violations);
	});

	it('groups versions/unicode.json by the Emoji Versions table (§1.5.2)', () => {
		const versions = readJson<Record<string, string[]>>('versions/unicode.json');
		const violations: string[] = [];

		Object.entries(versions).forEach(([version, list]) => {
			list.forEach((hexcode) => {
				const line = unicode.byHexcode.get(hexcode);

				if (!line) {
					violations.push(`${hexcode}: listed under ${version}, but is not an emoji-test.txt form`);

					return;
				}

				const expected = getUnicodeVersion(line.version);

				if (expected === null) {
					violations.push(`${hexcode}: listed under ${version}, but E0.0 has no Unicode version`);
				} else if (Number(version) !== expected) {
					violations.push(`${hexcode}: listed under ${version}, expected ${expected}`);
				}
			});
		});

		expectBaseline('uts51/versions-unicode', violations);
	});

	it('matches regex patterns by presentation and qualification', () => {
		interface Candidate {
			hexcode: string;
			status: TestStatus | 'not-emoji' | 'redundant-emoji-presentation' | 'text-presentation';
			isBareVariationBase: boolean;
		}

		const candidates: Candidate[] = unicode.lines.map((line) => ({
			hexcode: line.hexcode,
			isBareVariationBase: unicode.variationBases.has(line.hexcode),
			status: line.status,
		}));

		unicode.variationBases.forEach((base) => {
			if (KEYCAP_BASE_PATTERN.test(base)) {
				return;
			}

			candidates.push({
				hexcode: `${base}-FE0E`,
				isBareVariationBase: false,
				status: 'text-presentation',
			});

			// Default-emoji characters may take a redundant FE0F (ED-9a), which emoji-test.txt omits
			if (!unicode.byHexcode.has(`${base}-FE0F`)) {
				candidates.push({
					hexcode: `${base}-FE0F`,
					isBareVariationBase: false,
					status: 'redundant-emoji-presentation',
				});
			}
		});

		// Plain text and lone joiners, selectors and tags must never match on their own
		// (UTS #51 Annex A: Emoji includes the keycap bases, and components are not emoji)
		[
			...Array.from({ length: 0x7f - 0x20 }, (_, index) => index + 0x20),
			0x20_0d,
			0x20_e3,
			0xfe_0e,
			0xfe_0f,
			0xe_00_67,
			0xe_00_7f,
		].forEach((codepoint) => {
			candidates.push({
				hexcode: fromUnicodeToHexcode(fromCodepointToUnicode([codepoint]), false),
				isBareVariationBase: false,
				status: 'not-emoji',
			});
		});

		const isEmoji = (c: Candidate) =>
			c.status === 'fully-qualified' ||
			c.status === 'component' ||
			c.status === 'redundant-emoji-presentation';
		const isEmojiLoose = (c: Candidate) =>
			c.status !== 'text-presentation' && c.status !== 'not-emoji';
		const isText = (c: Candidate) =>
			c.status === 'text-presentation' || (c.status === 'unqualified' && c.isBareVariationBase);
		const isTextLoose = (c: Candidate) => isText(c) || c.isBareVariationBase;
		const isAny = (c: Candidate) => c.status !== 'not-emoji';

		const patterns: Record<string, [RegExp, (c: Candidate) => boolean]> = {
			'emojibase-regex': [INDEX_PATTERN, isAny],
			'emojibase-regex/codepoint': [CODEPOINT_INDEX_PATTERN, isAny],
			'emojibase-regex/codepoint/emoji': [CODEPOINT_EMOJI_PATTERN, isEmoji],
			'emojibase-regex/codepoint/emoji-loose': [CODEPOINT_EMOJI_LOOSE_PATTERN, isEmojiLoose],
			'emojibase-regex/codepoint/text': [CODEPOINT_TEXT_PATTERN, isText],
			'emojibase-regex/codepoint/text-loose': [CODEPOINT_TEXT_LOOSE_PATTERN, isTextLoose],
			'emojibase-regex/emoji': [EMOJI_PATTERN, isEmoji],
			'emojibase-regex/emoji-loose': [EMOJI_LOOSE_PATTERN, isEmojiLoose],
			'emojibase-regex/property': [PROPERTY_INDEX_PATTERN, isAny],
			'emojibase-regex/property/emoji': [PROPERTY_EMOJI_PATTERN, isEmoji],
			'emojibase-regex/property/text': [PROPERTY_TEXT_PATTERN, isText],
			'emojibase-regex/text': [TEXT_PATTERN, isText],
			'emojibase-regex/text-loose': [TEXT_LOOSE_PATTERN, isTextLoose],
		};

		const describeCandidate = (c: Candidate): string => {
			if (c.status === 'text-presentation') {
				return 'text presentation sequences (X FE0E)';
			}

			if (c.status === 'not-emoji') {
				return 'non-emoji characters';
			}

			if (c.status === 'redundant-emoji-presentation') {
				return 'redundant emoji presentation sequences (default-emoji X FE0F)';
			}

			if (c.isBareVariationBase) {
				return c.status === 'fully-qualified'
					? 'bare default-emoji characters that have variation sequences'
					: 'bare default-text characters';
			}

			return `${c.status} forms`;
		};

		const violations: string[] = [];

		Object.entries(patterns).forEach(([name, [pattern, shouldMatch]]) => {
			const whole = new RegExp(`^(?:${pattern.source})$`, pattern.flags.replace('g', ''));
			const groups = new Map<string, string[]>();

			candidates.forEach((candidate) => {
				const expected = shouldMatch(candidate);

				const unicodeString = fromCodepointToUnicode(fromHexcodeToCodepoint(candidate.hexcode));

				if (whole.test(unicodeString) !== expected) {
					const key = `${describeCandidate(candidate)} ${expected ? 'do not match' : 'match'}`;

					groups.set(key, [...(groups.get(key) ?? []), candidate.hexcode]);
				}
			});

			groups.forEach((list, key) => {
				violations.push(`${name}: ${list.length} ${key}, e.g. ${list.slice(0, 3).join(', ')}`);
			});
		});

		expectBaseline('uts51/regex', violations);
	}, 120_000);
});

// CI runs the suite once per locale through TEST_LOCALE; updating the baseline covers them all.
const locales: Locale[] = UPDATE_BASELINE
	? SUPPORTED_LOCALES
	: [(process.env.TEST_LOCALE as Locale | undefined) ?? 'en'];

describe.each(locales)('UTS #35 annotations (%s)', (locale) => {
	const cldr = new CldrOracle(locale);
	const data = readJson<Emoji[]>(`${locale}/data.raw.json`);

	const resolve = (line: EmojiTestLine) => {
		const key = toCldrKey(line.hexcode);
		const synthesized = cldr.synthesize(line.hexcode);

		return {
			keywords: cldr.resolveAnnotation(key, 'default') ?? synthesized?.keywords,
			label: cldr.resolveAnnotation(key, 'tts')?.[0] ?? synthesized?.label,
		};
	};

	it('labels each emoji with its CLDR name, or a synthesized one', () => {
		const violations: string[] = [];

		flattenEmojiData(data).forEach((emoji) => {
			const line = findRgi(emoji);

			if (!line) {
				return;
			}

			const { label } = resolve(line);

			if (label === undefined) {
				if (emoji.label) {
					violations.push(`${emoji.hexcode}: CLDR has no name, but the label is "${emoji.label}"`);
				}
			} else if (emoji.label !== label) {
				violations.push(`${emoji.hexcode}: label is "${emoji.label}", CLDR says "${label}"`);
			}
		});

		expectBaseline(`uts35/${locale}/labels`, violations);
	});

	// Compared case-insensitively, ignoring the name itself (emojibase leaves it out of the
	// tags) and the region code emojibase adds to flags; casing is checked separately.
	it('tags each emoji with its CLDR keywords', () => {
		const violations: string[] = [];

		data.forEach((emoji) => {
			const line = findRgi(emoji);
			const resolved = line && resolve(line);

			if (!resolved?.keywords) {
				return;
			}

			const ignored = new Set(
				[emoji.label, resolved.label, getFlagCode(emoji.hexcode)?.code]
					.filter(Boolean)
					.map((value) => value!.toLowerCase()),
			);
			const normalize = (list: string[]) =>
				new Set(list.map((value) => value.toLowerCase()).filter((value) => !ignored.has(value)));
			const expected = normalize(resolved.keywords);
			const actual = normalize(emoji.tags ?? []);
			const missing = [...expected].filter((value) => !actual.has(value)).sort();
			const extra = [...actual].filter((value) => !expected.has(value)).sort();

			if (missing.length > 0 || extra.length > 0) {
				violations.push(
					`${emoji.hexcode}: missing [${missing.join(', ')}], extra [${extra.join(', ')}]`,
				);
			}
		});

		expectBaseline(`uts35/${locale}/keywords`, violations);
	});

	it('keeps the case of CLDR keywords', () => {
		let changed = 0;

		data.forEach((emoji) => {
			const line = findRgi(emoji);
			const keywords = line && cldr.resolveAnnotation(toCldrKey(line.hexcode), 'default');
			const tags = emoji.tags ?? [];

			if (
				keywords?.some(
					(keyword) =>
						keyword !== keyword.toLowerCase() &&
						!tags.includes(keyword) &&
						tags.includes(keyword.toLowerCase()),
				)
			) {
				changed += 1;
			}
		});

		expectBaseline(
			`uts35/${locale}/keyword-case`,
			changed > 0 ? [`${changed} emoji have CLDR keywords with their case changed`] : [],
		);
	});
});
