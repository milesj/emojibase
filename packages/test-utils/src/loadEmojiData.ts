/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { Emoji } from 'emojibase';

let DATA: Emoji[] = [];

export default function loadEmojiData(): Emoji[] {
  if (DATA.length > 0) {
    return DATA;
  }

  // eslint-disable-next-line global-require
  DATA = require('../test-data.json');

  return DATA;
}
