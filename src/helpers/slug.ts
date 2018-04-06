/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export default function slug(value: string): string {
  return value
    .toLowerCase()
    .replace('&', '')
    .replace(/\s+/g, '-');
}
