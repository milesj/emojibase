import { LATEST_EMOJI_VERSION } from 'emojibase';
import { parseMetadata } from '../parsers/parseMetadata';
import type { EmojiMetadataMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadMetadata(
	version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiMetadataMap> {
	return fetchAndCache(
		Number(version) >= 17
		// TODO: emoji-test.txt for v17 is currently dead, change this when resolved.
			? `https://distfiles.alpinelinux.org/distfiles/v3.23/emoji-test-17.0.0.txt` //`https://unicode.org/Public/${version}.0/emoji/emoji-test.txt`
			: `http://unicode.org/Public/emoji/${version}/emoji-test.txt`,
		`${version}/metadata.json`,
		parseMetadata,
	);
}
