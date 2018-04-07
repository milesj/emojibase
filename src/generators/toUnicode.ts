/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import fromCodepointToUnicode from '../../packages/core/src/fromCodepointToUnicode';
import fromHexcodeToCodepoint from '../../packages/core/src/fromHexcodeToCodepoint';
import { Hexcode } from '../types';

export default function toUnicode(hexcode: Hexcode): string {
  return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
}
