/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { SEQUENCE_REMOVAL_PATTERN } from './constants';
import { Hexcode } from './types';

const STRIP_PATTERN = new RegExp(`(-| )?(${SEQUENCE_REMOVAL_PATTERN.source})`, 'g');

/**
 * Remove variation selectors and zero width joiners, while fixing any multi dash issues.
 */
export default function stripHexcode(hexcode: Hexcode): Hexcode {
  return hexcode.replace(STRIP_PATTERN, '');
}
