/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import extractSet from '../extractSet';

import type { Format } from '../types';

export default function mapSet(data: Object[], format: Format): Object[] {
  return data.map(row => extractSet(row, format));
}
