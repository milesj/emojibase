/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { EmojiMap } from '../types';

export default async function joinData(emojis: EmojiMap, data: EmojiMap) {
  Object.keys(data).forEach((hexcode) => {
    emojis[hexcode] = data[hexcode];
  });
}
