/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { SEQUENCE_REMOVAL_PATTERN } from '../../packages/emojibase/lib/constants';

const SEQUENCE_HEXCODE_PATTERN = new RegExp(`-(${SEQUENCE_REMOVAL_PATTERN.source})`, 'g');

/**
 * Remove variation selectors and zero width joiners,
 * while fixing any multi dash issues.
 */
export default function cleanHexcode(hexcode: string): string {
  return hexcode.replace(SEQUENCE_HEXCODE_PATTERN, '');
}
