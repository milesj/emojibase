/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fromCodepointToUnicode from '../../packages/emojibase/lib/fromCodepointToUnicode';
import fromHexcodeToCodepoint from '../../packages/emojibase/lib/fromHexcodeToCodepoint';

export default function toUnicode(hexcode: string): string {
  return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
}
