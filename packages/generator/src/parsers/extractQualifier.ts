import { FULLY_QUALIFIED, MINIMALLY_QUALIFIED, type Qualifier, UNQUALIFIED } from 'emojibase';

export function extractQualifier(type: string): Qualifier | null {
	if (type === 'fully-qualified') {
		return FULLY_QUALIFIED;
	}

	if (type === 'minimally-qualified') {
		return MINIMALLY_QUALIFIED;
	}

	if (type === 'unqualified') {
		return UNQUALIFIED;
	}

	return null;
}
