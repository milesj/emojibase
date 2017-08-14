/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function fromCodepointToUnicode(codepoint: number[]): string {
  return String.fromCodePoint(...codepoint);
}
