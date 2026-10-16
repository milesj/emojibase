// An independent reading of the official Unicode Emoji 18.0 files, used as the oracle for
// UTS #51 conformance tests. Nothing here may import from the generator, as that is the code
// under test.

import fs from 'node:fs';
import path from 'node:path';

export const FIXTURES_DIR = path.join(__dirname, '../../../../tests/__fixtures__/v18');

export type TestStatus = 'component' | 'fully-qualified' | 'minimally-qualified' | 'unqualified';

export interface EmojiTestLine {
	hexcode: string;
	status: TestStatus;
	version: number;
	name: string;
}

export interface UnicodeOracle {
	lines: EmojiTestLine[];
	byHexcode: Map<string, EmojiTestLine>;
	// The RGI emoji set: every fully-qualified and component line,
	// keyed by its hexcode without FE0F (see `toIdentity`)
	rgi: Map<string, EmojiTestLine>;
	// Code points that have both FE0E and FE0F variation sequences
	variationBases: Set<string>;
	// The "Status Counts" footer of emoji-test.txt, used to sanity check parsing
	statusCounts: Record<string, number>;
	// The "Total sequences" footer of emoji-variation-sequences.txt, which counts
	// bases (each has an FE0E and an FE0F line), and the number of lines parsed
	variationTotal: number;
	variationLineCount: number;
}

const LINE_PATTERN = /^([\dA-F]+(?: [\dA-F]+)*)\s*;\s*([a-z-]+)\s*#\s*\S+\s+E(\d+\.\d+)\s+(.+)$/;

// Every minimally-qualified and unqualified form differs from its fully-qualified form only
// by missing FE0F (UTS #51 ED-18a, ED-19), so removing FE0F gives each emoji a stable identity
// that also matches the variationless hexcodes emojibase uses for text-default emoji.
export function toIdentity(hexcode: string): string {
	return hexcode
		.split('-')
		.filter((hex) => hex !== 'FE0F')
		.join('-');
}

// CLDR annotation keys never contain VS15 or VS16 (UTS #35 Part 2, cp attribute), but do keep
// ZWJ, which is why `stripHexcode` from emojibase cannot be used here or in `toIdentity`.
export function toCldrKey(hexcode: string): string {
	return hexcode
		.split('-')
		.filter((hex) => hex !== 'FE0E' && hex !== 'FE0F')
		.join('-');
}

function readFixture(name: string): string {
	return fs.readFileSync(path.join(FIXTURES_DIR, name), 'utf8');
}

function parseEmojiTest(content: string) {
	const lines: EmojiTestLine[] = [];
	const statusCounts: Record<string, number> = {};

	content.split('\n').forEach((line) => {
		const count = line.match(/^# ([a-z-]+) : (\d+)$/);

		if (count) {
			statusCounts[count[1]] = Number(count[2]);

			return;
		}

		if (!line.trim() || line.startsWith('#')) {
			return;
		}

		const match = line.match(LINE_PATTERN);

		if (!match) {
			throw new Error(`Unrecognized emoji-test.txt line: ${line}`);
		}

		lines.push({
			hexcode: match[1].replace(/ /g, '-'),
			name: match[4].trim(),
			status: match[2] as TestStatus,
			version: Number(match[3]),
		});
	});

	return { lines, statusCounts };
}

function parseVariationSequences(content: string) {
	const bases = new Set<string>();
	let total = 0;
	let lineCount = 0;

	content.split('\n').forEach((line) => {
		const totalMatch = line.match(/^#\s*Total sequences: (\d+)/);

		if (totalMatch) {
			total = Number(totalMatch[1]);
		}

		if (!line.trim() || line.startsWith('#')) {
			return;
		}

		bases.add(line.split(/\s+/)[0]);
		lineCount += 1;
	});

	return { bases, lineCount, total };
}

let cached: UnicodeOracle | null = null;

export function loadUnicodeOracle(): UnicodeOracle {
	if (cached) {
		return cached;
	}

	const { lines, statusCounts } = parseEmojiTest(readFixture('emoji-test.txt'));
	const variations = parseVariationSequences(readFixture('emoji-variation-sequences.txt'));
	const byHexcode = new Map<string, EmojiTestLine>();
	const rgi = new Map<string, EmojiTestLine>();

	lines.forEach((line) => {
		byHexcode.set(line.hexcode, line);

		if (line.status === 'fully-qualified' || line.status === 'component') {
			rgi.set(toIdentity(line.hexcode), line);
		}
	});

	cached = {
		byHexcode,
		lines,
		rgi,
		statusCounts,
		variationBases: variations.bases,
		variationLineCount: variations.lineCount,
		variationTotal: variations.total,
	};

	return cached;
}

// A single code point is default-emoji when its fully-qualified form has no FE0F
// (UTS #51 ED-6), and default-text when it needs FE0F to qualify (ED-7, ED-17a).
export function isDefaultTextPresentation(line: EmojiTestLine): boolean {
	const parts = line.hexcode.split('-');

	return parts.length === 2 && parts[1] === 'FE0F';
}
