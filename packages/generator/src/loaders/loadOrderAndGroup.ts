import { LATEST_EMOJI_VERSION } from 'emojibase';
import { parseOrderAndGroup } from '../parsers/parseOrderAndGroup';
import { EmojiGroupMap } from '../types';
import { fetchAndCache } from './fetchAndCache';

export async function loadOrderAndGroup(
	version: string = LATEST_EMOJI_VERSION,
): Promise<EmojiGroupMap> {
	return fetchAndCache(
		`http://unicode.org/Public/emoji/${version}/emoji-test.txt`,
		`${version}/groups-and-order.json`,
		parseOrderAndGroup,
	);
}
