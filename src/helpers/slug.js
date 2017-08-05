/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function slug(value: string): string {
  return value.toLowerCase().replace('&', '').replace(/\s+/g, '-');
}
