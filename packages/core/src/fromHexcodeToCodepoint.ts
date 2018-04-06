/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export default function fromHexcodeToCodepoint(code: string, joiner: string = '-'): number[] {
  return code.split(joiner).map(point => parseInt(point, 16));
}
