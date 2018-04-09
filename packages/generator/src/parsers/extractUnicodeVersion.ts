/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { FIRST_UNICODE_EMOJI_VERSION } from 'emojibase';

export default function extractUnicodeVersion(comment: string): number | null {
  const unicodeVersion = comment.match(/^V?([0-9.]+)/);

  return parseFloat(unicodeVersion ? unicodeVersion[1] : FIRST_UNICODE_EMOJI_VERSION);
}
