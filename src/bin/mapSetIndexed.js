/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import extractSet from '../extractSet';

import type { Format } from '../types';

export default function mapSetIndexed(data: Object[], keyName: string, format: Format): Object {
  const map = {};

  data.forEach((row: Object) => {
    const key = row[keyName];
    const nextRow = extractSet(row, format);

    delete nextRow[keyName];

    map[key] = nextRow;
  });

  return map;
}
