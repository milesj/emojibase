/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import cleanName from './cleanName';

export default function createShortnames(name) {
  return [`:${cleanName(name).replace(/ /g, '_')}:`];
}
