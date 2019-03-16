import { LATEST_EMOJI_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseEmojiList from '../parsers/parseEmojiList';
import { EmojiSourceMap } from '../types';

export default function loadEmojiList(
  version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiSourceMap> {
  return fetchAndCache(
    'http://unicode.org/emoji/charts/emoji-list.html',
    `${version}/emoji-source-list.json`,
    data => parseEmojiList(data),
  );
}
