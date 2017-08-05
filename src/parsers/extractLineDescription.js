/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function extractLineDescription(comment: string): string {
  let description = comment.trim();

  // Remove unicode version
  description = description.replace(/^V?([0-9.]+)/, '');

  // Remove range
  description = description.replace(/\[\d+\]/, '');

  // Remove example emojis
  description = description.replace(/\(*.+\)/, '');

  return description.toLowerCase().trim();
}
