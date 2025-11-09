import { LATEST_EMOJI_VERSION, LATEST_UNICODE_VERSION } from 'emojibase';
import { parseData } from '../parsers/parseData';
import type { EmojiDataMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadData(
	emojiVersion: string = LATEST_EMOJI_VERSION,
	unicodeVersion: string = LATEST_UNICODE_VERSION,
): Promise<EmojiDataMap> {
	// Endpoint changed for v17+
	if (Number(emojiVersion) >= 17) {
		const version = Math.min(
			Number.parseFloat(emojiVersion),
			Number.parseFloat(unicodeVersion),
		).toFixed(1);

		return fetchAndCache(
			`https://unicode.org/Public/${version}.0.0/ucd/emoji/emoji-data.txt`,
			`${version}/data.json`,
			(data) => parseData(emojiVersion, data, Number.parseFloat(unicodeVersion)),
		);
	}

	// Endpoint changed for v13+
	if (Number(emojiVersion) >= 13) {
		const version = Math.min(
			Number.parseFloat(emojiVersion),
			Number.parseFloat(unicodeVersion),
		).toFixed(1);

		return fetchAndCache(
			`http://unicode.org/Public/${version}.0/ucd/emoji/emoji-data.txt`,
			`${version}/data.json`,
			(data) => parseData(emojiVersion, data, Number.parseFloat(unicodeVersion)),
		);
	}

	return fetchAndCache(
		`http://unicode.org/Public/emoji/${emojiVersion}/emoji-data.txt`,
		`${emojiVersion}/data.json`,
		(data) => parseData(emojiVersion, data),
	);
}
