/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function extractGender(name: string): ?string {
  if (name.indexOf(', FEMALE SIGN') >= 0) {
    return 'female';

  } else if (name.indexOf(', MALE SIGN') >= 0) {
    return 'male';
  }

  return null;
}
