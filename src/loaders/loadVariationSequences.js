/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseVariationSequences from '../parsers/parseVariationSequences';
import { LATEST_EMOJI_VERSION } from '../constants';

import type { VariationMap } from '../types';

export default function loadVariationSequences(
  version: string = LATEST_EMOJI_VERSION,
): VariationMap {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-variation-sequences.txt`,
    `variation-sequences-${version}.json`,
    parseVariationSequences,
  );
}
