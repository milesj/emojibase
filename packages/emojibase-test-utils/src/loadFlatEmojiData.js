/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { flattenEmojiData } from 'emojibase';
import loadEmojiData from './loadEmojiData';

let DATA = [];

export default function loadFlatEmojiData(): Object[] {
  if (DATA.length > 0) {
    return DATA;
  }

  DATA = flattenEmojiData(loadEmojiData());

  return DATA;
}
