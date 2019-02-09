import { FEMALE, MALE } from 'emojibase';
import { Gender, Hexcode } from '../types';
import { FEMALE_SIGN, MALE_SIGN } from '../constants';

export default function extractGender(hexcode: Hexcode): Gender | null {
  if (hexcode.includes(FEMALE_SIGN)) {
    return FEMALE;
  } else if (hexcode.includes(MALE_SIGN)) {
    return MALE;
  }

  return null;
}
