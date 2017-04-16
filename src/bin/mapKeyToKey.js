/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function mapKeyToKey(data: Object[], keyName: string, valueName: string): Object {
  const map = {};

  data.forEach((row: Object) => {
    map[row[keyName]] = (valueName === 'shortname') ? row.shortnames[0] : row[valueName];
  });

  return map;
}
