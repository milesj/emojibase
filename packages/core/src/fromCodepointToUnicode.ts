import { CodePoint, Unicode } from './types';

export function fromCodepointToUnicode(codepoint: CodePoint[]): Unicode {
	return String.fromCodePoint(...codepoint);
}
