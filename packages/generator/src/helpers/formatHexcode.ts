/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { Hexcode } from '../types';

export default function formatHexcode(hex: Hexcode): Hexcode {
  return hex.replace(/\s+/g, '-');
}
