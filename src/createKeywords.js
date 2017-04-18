/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import cleanName from './cleanName';

export default function createKeywords(name: string): string[] {
  return cleanName(name).split(' ');
}
