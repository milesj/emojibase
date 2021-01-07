import { LATEST_EMOJI_VERSION, LATEST_UNICODE_VERSION } from 'emojibase';
import parseData from '../parsers/parseData';
import { EmojiDataMap } from '../types';
import fetchAndCache from './fetchAndCache';

export default function loadData(
  emojiVersion: number = Number.parseFloat(LATEST_EMOJI_VERSION),
  unicodeVersion: number = Number.parseFloat(LATEST_UNICODE_VERSION),
): Promise<EmojiDataMap> {
  const version = (emojiVersion >= 13
    ? Math.min(emojiVersion, unicodeVersion)
    : emojiVersion
  ).toFixed(1);

  return fetchAndCache(
    Number(version) >= 13
      ? `http://unicode.org/Public/${version}.0/ucd/emoji/emoji-data.txt`
      : `http://unicode.org/Public/emoji/${version}/emoji-data.txt`,
    `${version}/data.json`,
    (data) => parseData(version, data),
  );
}
