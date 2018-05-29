/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export default function isObject<T>(value: T): boolean {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
