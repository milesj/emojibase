/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { fromCodepointToUnicode, fromHexcodeToCodepoint } from '../../packages/emojibase/lib';

export default function toUnicode(hexcode: string): string {
  return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
}
