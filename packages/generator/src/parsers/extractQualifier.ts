import { FULLY_QUALIFIED, MINIMALLY_QUALIFIED, Qualifier, UNQUALIFIED } from 'emojibase';

export function extractQualifier(type: string): Qualifier {
	if (type === 'fully-qualified') {
		return FULLY_QUALIFIED;
	}

	if (type === 'minimally-qualified') {
		return MINIMALLY_QUALIFIED;
	}

	return UNQUALIFIED;
}
