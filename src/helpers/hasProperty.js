/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { Property } from '../types';

export default function hasProperty(property: Property[], search: Property[]): boolean {
  return property.some(prop => search.includes(prop));
}
