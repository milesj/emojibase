import { FEMALE, MALE } from 'emojibase';
import { FEMALE_SIGN, MALE_SIGN } from '../constants';
import type { Gender, Hexcode } from '../types';

export function extractGender(hexcode: Hexcode): Gender | null {
	if (hexcode.includes(FEMALE_SIGN)) {
		return FEMALE;
	}

	if (hexcode.includes(MALE_SIGN)) {
		return MALE;
	}

	return null;
}
