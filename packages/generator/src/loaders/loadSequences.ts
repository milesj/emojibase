import { LATEST_EMOJI_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseSequences from '../parsers/parseSequences';
import { EmojiDataMap } from '../types';

export default function loadSequences(
  version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiDataMap> {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-sequences.txt`,
    `${version}/sequences.json`,
    data => parseSequences(version, data, 'RGI_Emoji_Modifier_Sequence'),
  );
}
