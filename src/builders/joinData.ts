/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

export default function joinData(emojis: object, data: object) {
  Object.keys(data).forEach(hexcode => {
    emojis[hexcode] = data[hexcode];
  });
}
