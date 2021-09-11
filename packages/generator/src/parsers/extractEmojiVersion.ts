export function extractEmojiVersion(comment: string): number | null {
	const version = comment.match(/E(\d+\.\d)/);

	if (version) {
		return Number.parseFloat(version[1].trim());
	}

	return null;
}
