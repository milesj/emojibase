import { LATEST_EMOJI_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseData from '../parsers/parseData';
import { EmojiDataMap } from '../types';

export default function loadData(version: string = LATEST_EMOJI_VERSION): Promise<EmojiDataMap> {
  return fetchAndCache(
    Number.parseFloat(version) >= 13
      ? `http://unicode.org/Public/${version}.0/ucd/emoji/emoji-data.txt`
      : `http://unicode.org/Public/emoji/${version}/emoji-data.txt`,
    `${version}/data.json`,
    (data) => parseData(version, data),
  );
}
