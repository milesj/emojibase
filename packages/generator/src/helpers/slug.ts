/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export default function slug(value: string): string {
  return value
    .toLowerCase()
    .replace('&', '')
    .replace(/\s+/g, '-');
}
