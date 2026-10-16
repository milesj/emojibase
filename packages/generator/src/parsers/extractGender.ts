import { FEMALE, MALE } from 'emojibase';
import {
	FEMALE_HEXCODES,
	FEMALE_SIGN,
	MALE_HEXCODES,
	MALE_SIGN,
	ZERO_WIDTH_JOINER,
} from '../constants';
import type { Gender, Hexcode } from '../types';

// An emoji's gender comes from its gendered people (e.g. "man health worker") and from gender
// signs joined to a person (e.g. "man running"). Emoji that combine genders, like
// "family: man, woman, boy", have none.
export function extractGender(hexcode: Hexcode): Gender | null {
	const genders = new Set<Gender>();

	hexcode.split('-').forEach((code, index, codes) => {
		const isSign = code === FEMALE_SIGN || code === MALE_SIGN;

		// A gender sign on its own is a symbol, not a person
		if (isSign && codes[index - 1] !== ZERO_WIDTH_JOINER) {
			return;
		}

		if (FEMALE_HEXCODES.includes(code)) {
			genders.add(FEMALE);
		} else if (MALE_HEXCODES.includes(code)) {
			genders.add(MALE);
		}
	});

	return genders.size === 1 ? [...genders][0] : null;
}
