/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function cleanName(name) {
  return name.toLowerCase().split(';')[0].replace(/[^a-z0-9 ]+/g, '');
}
