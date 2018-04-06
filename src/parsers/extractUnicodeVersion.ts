/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { FIRST_UNICODE_EMOJI_VERSION } from '../../packages/core/src/constants';

export default function extractUnicodeVersion(comment: string): number | null {
  const unicodeVersion = comment.match(/^V?([0-9.]+)/);

  return parseFloat(unicodeVersion ? unicodeVersion[1] : FIRST_UNICODE_EMOJI_VERSION);
}
