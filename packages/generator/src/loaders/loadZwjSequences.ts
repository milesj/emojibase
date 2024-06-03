import { LATEST_EMOJI_VERSION } from 'emojibase';
import { parseSequences } from '../parsers/parseSequences';
import type { EmojiDataMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadZwjSequences(
	version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiDataMap> {
	return fetchAndCache(
		`http://unicode.org/Public/emoji/${version}/emoji-zwj-sequences.txt`,
		`${version}/zwj-sequences.json`,
		(data) => parseSequences(version, data, 'RGI_Emoji_ZWJ_Sequence'),
	);
}
