import { CompactEmoji, Emoji } from 'emojibase';

export function extractCompact(data: Emoji[]): CompactEmoji[] {
	return data.map((full) => {
		const { hexcode, emoji, emoticon, order, group, annotation, tags, text, skins } = full;
		const compact: CompactEmoji = {
			annotation,
			group,
			hexcode,
			order,
			tags,
			unicode: emoji || text,
		};

		if (emoticon) {
			compact.emoticon = emoticon;
		}

		if (skins) {
			compact.skins = extractCompact(skins);
		}

		if (compact.tags?.length === 0) {
			delete compact.tags;
		}

		return compact;
	});
}
