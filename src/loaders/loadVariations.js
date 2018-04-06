/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { LATEST_EMOJI_VERSION } from '../../packages/core/lib/constants';
import fetchAndCache from './fetchAndCache';
import parseVariations from '../parsers/parseVariations';

import type { EmojiVariationMap } from '../types';

export default function loadVariations(
  version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiVariationMap> {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-variation-sequences.txt`,
    `variations-${version}.json`,
    data => parseVariations(version, data),
  );
}
