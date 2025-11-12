import { LATEST_EMOJI_VERSION } from 'emojibase';
import { parseMetadata } from '../parsers/parseMetadata';
import type { EmojiMetadataMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadMetadata(
	version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiMetadataMap> {
	return fetchAndCache(
		Number(version) >= 17
			? `https://unicode.org/Public/${version}.0/emoji/emoji-test.txt`
			: `http://unicode.org/Public/emoji/${version}/emoji-test.txt`,
		`${version}/metadata.json`,
		parseMetadata,
	);
}
