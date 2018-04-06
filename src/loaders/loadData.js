/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { LATEST_EMOJI_VERSION } from '../../packages/core/lib/constants';
import fetchAndCache from './fetchAndCache';
import parseData from '../parsers/parseData';

import type { EmojiDataMap } from '../types';

export default function loadData(version: string = LATEST_EMOJI_VERSION): Promise<EmojiDataMap> {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-data.txt`,
    `data-${version}.json`,
    data => parseData(version, data),
  );
}
