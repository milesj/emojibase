import { LATEST_EMOJI_VERSION } from 'emojibase';
import { parseEmojiList } from '../parsers/parseEmojiList';
import { EmojiSourceMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadEmojiList(
	version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiSourceMap> {
	return fetchAndCache(
		`https://unicode.org/emoji/charts-${version}/emoji-list.html`,
		`${version}/emoji-source-list.json`,
		(data) => parseEmojiList(data),
	);
}
