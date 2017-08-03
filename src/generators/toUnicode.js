/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fromCodepointToUnicode from '../fromCodepointToUnicode';
import fromHexcodeToCodepoint from '../fromHexcodeToCodepoint';

export default function toUnicode(hexcode: string): string {
  return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
}
