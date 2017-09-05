/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default async function joinData(emojis: Object, data: Object) {
  Object.keys(data).forEach((hexcode) => {
    emojis[hexcode] = data[hexcode];
  });
}
