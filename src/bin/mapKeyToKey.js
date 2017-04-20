/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

function getValue(row: Object, key: string) {
  return (key === 'shortname') ? row.shortnames[0] : row[key];
}

export default function mapKeyToKey(data: Object[], keyName: string, valueName: string): Object {
  const map = {};

  data.forEach((row: Object) => {
    map[getValue(row, keyName)] = getValue(row, valueName);
  });

  return map;
}
