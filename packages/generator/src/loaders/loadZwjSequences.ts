import { LATEST_EMOJI_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseSequences from '../parsers/parseSequences';
import { EmojiDataMap } from '../types';

export default function loadZwjSequences(
  version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiDataMap> {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-zwj-sequences.txt`,
    `${version}/zwj-sequences.json`,
    data => parseSequences(version, data, 'Emoji_ZWJ_Sequence'),
  );
}
