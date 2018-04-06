/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fromCodepointToUnicode from '../../packages/core/lib/fromCodepointToUnicode';
import fromHexcodeToCodepoint from '../../packages/core/lib/fromHexcodeToCodepoint';

export default function toUnicode(hexcode: string): string {
  return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
}
