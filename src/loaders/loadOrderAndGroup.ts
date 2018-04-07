/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { LATEST_EMOJI_VERSION } from '../../packages/core/src/constants';
import fetchAndCache from './fetchAndCache';
import parseOrderAndGroup from '../parsers/parseOrderAndGroup';
import { EmojiGroupMap } from '../types';

export default function loadOrderAndGroup(
  version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiGroupMap> {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-test.txt`,
    `groups-and-order-${version}.json`,
    parseOrderAndGroup,
  );
}
