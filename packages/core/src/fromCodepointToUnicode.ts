/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export default function fromCodepointToUnicode(codepoint: number[]): string {
  return String.fromCodePoint(...codepoint);
}
