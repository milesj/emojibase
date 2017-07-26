/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseOrderAndGroup from '../parsers/parseOrderAndGroup';
import { LATEST_EMOJI_VERSION } from '../constants';

import type { EmojiGroupMap } from '../types';

export default function loadOrderAndGroup(version: string = LATEST_EMOJI_VERSION): EmojiGroupMap {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-test.txt`,
    `groups-and-order-${version}.json`,
    parseOrderAndGroup,
  );
}
