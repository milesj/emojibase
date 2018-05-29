/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { fromCodepointToUnicode, fromHexcodeToCodepoint } from 'emojibase';
import { Hexcode, Unicode } from '../types';

export default function toUnicode(hexcode: Hexcode): Unicode {
  return fromCodepointToUnicode(fromHexcodeToCodepoint(hexcode));
}
