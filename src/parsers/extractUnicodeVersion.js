/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

// The first unicode version in which emoji were included
const FIRST_UNICODE_RELEASE_VERSION = 6;

export default function extractUnicodeVersion(comment: string): ?number {
  const unicodeVersion = comment.match(/^V?([0-9.]+)/);

  return unicodeVersion ? parseFloat(unicodeVersion[1]) : FIRST_UNICODE_RELEASE_VERSION;
}
