/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import extractSet from '../../extractSet';

import type { Format } from '../../types';

export default function mapSetGrouped(data: Object[], keyName: string, format: Format): Object {
  const groups = {};

  data.forEach((row: Object) => {
    const group = row[keyName];
    const nextRow = extractSet(row, format);

    delete nextRow[keyName];

    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group].push(nextRow);
  });

  return groups;
}
