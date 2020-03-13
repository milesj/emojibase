import { LATEST_EMOJI_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseVariations from '../parsers/parseVariations';
import { EmojiVariationMap } from '../types';

export default function loadVariations(
  version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiVariationMap> {
  return fetchAndCache(
    parseFloat(version) >= 13
      ? `http://unicode.org/Public/${version}.0/ucd/emoji/emoji-variation-sequences.txt`
      : `http://unicode.org/Public/emoji/${version}/emoji-variation-sequences.txt`,
    `${version}/variations.json`,
    data => parseVariations(version, data),
  );
}
