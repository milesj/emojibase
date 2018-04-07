/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { FEMALE, FEMALE_SIGN, MALE, MALE_SIGN } from 'emojibase';
import { Gender, Hexcode } from '../types';

export default function extractGender(hexcode: Hexcode): Gender | null {
  if (hexcode.includes(FEMALE_SIGN)) {
    return FEMALE;
  } else if (hexcode.includes(MALE_SIGN)) {
    return MALE;
  }

  return null;
}
