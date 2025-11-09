import { LATEST_EMOJI_VERSION } from 'emojibase';
import { parseMetadata } from '../parsers/parseMetadata';
import type { EmojiMetadataMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadMetadata(
	version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiMetadataMap> {
	return fetchAndCache(
		Number(version) >= 17
		// TODO: emoji-test.txt is currently dead, change this before upstreaming
			? `https://ftp.dyslexicfish.net/unicode/unicode.org%20%E2%88%95%20Public%20%E2%88%95%2017.0.0/emoji/emoji-test.txt` //`https://unicode.org/Public/${version}.0/emoji/emoji-test.txt`
			: `http://unicode.org/Public/emoji/${version}/emoji-test.txt`,
		`${version}/metadata.json`,
		parseMetadata,
	);
}
