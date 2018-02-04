/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { FEMALE, FEMALE_SIGN, MALE, MALE_SIGN } from '../../packages/emojibase/lib/constants';

import type { Gender } from '../types';

export default function extractGender(hexcode: string): ?Gender {
  if (hexcode.includes(FEMALE_SIGN)) {
    return FEMALE;
  } else if (hexcode.includes(MALE_SIGN)) {
    return MALE;
  }

  return null;
}
