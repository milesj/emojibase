/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { LATEST_EMOJI_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseData from '../parsers/parseData';
import { EmojiDataMap } from '../types';

export default function loadData(version: string = LATEST_EMOJI_VERSION): Promise<EmojiDataMap> {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-data.txt`,
    `data-${version}.json`,
    data => parseData(version, data),
  );
}
