/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
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
