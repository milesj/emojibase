/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function fromHexToCodepoint(code: string): number[] {
  return code.split('-').map(point => parseInt(point, 16));
}
