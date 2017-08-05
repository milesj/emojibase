/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { FIRST_UNICODE_EMOJI_VERSION } from '../constants';

export default function extractUnicodeVersion(comment: string): ?number {
  const unicodeVersion = comment.match(/^V?([0-9.]+)/);

  return parseFloat(unicodeVersion ? unicodeVersion[1] : FIRST_UNICODE_EMOJI_VERSION);
}
