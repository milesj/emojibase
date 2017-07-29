/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseSequences from '../parsers/parseSequences';
import { LATEST_EMOJI_VERSION } from '../constants';

import type { EmojiDataMap } from '../types';

export default function loadSequences(version: string = LATEST_EMOJI_VERSION): EmojiDataMap {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-sequences.txt`,
    `sequences-${version}.json`,
    data => parseSequences(version, data, 'Emoji_Modifier_Sequence'),
  );
}
