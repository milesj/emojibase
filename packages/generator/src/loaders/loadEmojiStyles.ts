import { LATEST_EMOJI_VERSION } from 'emojibase';
import parseEmojiStyles from '../parsers/parseEmojiStyles';
import { EmojiStylesMap } from '../types';
import fetchAndCache from './fetchAndCache';

export default function loadEmojiStyles(
  version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiStylesMap> {
  return fetchAndCache(
    `https://unicode.org/emoji/charts-${version}/emoji-style.html`,
    `${version}/emoji-default-styles.json`,
    (data) => parseEmojiStyles(data),
  );
}
