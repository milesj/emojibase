/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { CodePoint, Unicode } from './types';

export default function fromCodepointToUnicode(codepoint: CodePoint[]): Unicode {
  return String.fromCodePoint(...codepoint);
}
