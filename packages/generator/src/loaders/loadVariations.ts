import { LATEST_EMOJI_VERSION, LATEST_UNICODE_VERSION } from 'emojibase';
import { parseVariations } from '../parsers/parseVariations';
import { EmojiVariationMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadVariations(
	emojiVersion: number = Number.parseFloat(LATEST_EMOJI_VERSION),
	unicodeVersion: number = Number.parseFloat(LATEST_UNICODE_VERSION),
): Promise<EmojiVariationMap> {
	const version = (
		emojiVersion >= 13 ? Math.min(emojiVersion, unicodeVersion) : emojiVersion
	).toFixed(1);

	return fetchAndCache(
		Number(version) >= 13
			? `http://unicode.org/Public/${version}.0/ucd/emoji/emoji-variation-sequences.txt`
			: `http://unicode.org/Public/emoji/${version}/emoji-variation-sequences.txt`,
		`${version}/variations.json`,
		(data) => parseVariations(version, data),
	);
}
