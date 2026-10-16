// The Unicode version in which an emoji version's emoji appeared, from the Emoji Versions table.
// E0.0 marks components and other characters that are not emoji in their own right, so it has none.
// http://unicode.org/reports/tr51/#EmojiVersions
const UNICODE_VERSIONS: Record<string, number | null> = {
	'0': null,
	'0.6': 6,
	'0.7': 7,
	'1': 8,
	'2': 8,
	'3': 9,
	'4': 9,
	'5': 10,
	// Sequences only, released after Unicode 13.0
	'13.1': 13,
};

export function extractUnicodeVersion(emojiVersion: number): number | null {
	const key = String(emojiVersion);

	// Since E11.0, emoji versions match the Unicode version they were released with
	return key in UNICODE_VERSIONS ? UNICODE_VERSIONS[key] : emojiVersion;
}
