/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

let DATA = [];

// TODO
export default function loadEmojiData(): object[] {
  if (DATA.length > 0) {
    return DATA;
  }

  // eslint-disable-next-line global-require
  DATA = require('../test-data.json');

  return DATA;
}
