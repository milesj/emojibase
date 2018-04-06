/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { SEQUENCE_REMOVAL_PATTERN } from './constants';

const STRIP_PATTERN = new RegExp(`(-| )?(${SEQUENCE_REMOVAL_PATTERN.source})`, 'g');

/**
 * Remove variation selectors and zero width joiners, while fixing any multi dash issues.
 */
export default function stripHexcode(hexcode: string): string {
  return hexcode.replace(STRIP_PATTERN, '');
}
