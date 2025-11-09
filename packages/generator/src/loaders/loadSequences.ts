import { LATEST_EMOJI_VERSION } from 'emojibase';
import { parseSequences } from '../parsers/parseSequences';
import type { EmojiDataMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadSequences(version: string = LATEST_EMOJI_VERSION): Promise<EmojiDataMap> {
	return fetchAndCache(
		Number(version) >= 17
			? `https://unicode.org/Public/${version}.0/emoji/emoji-sequences.txt`
			: `http://unicode.org/Public/emoji/${version}/emoji-sequences.txt`,
		`${version}/sequences.json`,
		(data) => parseSequences(version, data, 'RGI_Emoji_Modifier_Sequence'),
	);
}
