/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function formatHexcode(hex: string): string {
  return hex.replace(/\s+/g, '-');
}
