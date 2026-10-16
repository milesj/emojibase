// The Unicode data files escape characters that would otherwise start a comment,
// e.g. "keycap: \x{23}" for "keycap: #".
export function decodeEscapeSequence(value: string): string {
	const replacer = (all: string, match: string) => String.fromCodePoint(Number.parseInt(match, 16));

	return value
		.replace(/\\x{([\dA-Fa-f]{2})}/g, replacer)
		.replace(/\\x([\dA-Fa-f]{2})/g, replacer)
		.normalize();
}
