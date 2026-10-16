// Trailing comments look like "E0.6   [1] (©️)       copyright sign", where the version, the
// count, and the sample emoji are each optional depending on the file and its version.
export function extractLineDescription(comment: string): string {
	return comment
		.trim()
		.replace(/^[EV]?\d+\.\d+\s*/, '')
		.replace(/^\[\d+]\s*/, '')
		.replace(/^\([^)]*\)\s*/, '')
		.toLowerCase()
		.trim();
}
