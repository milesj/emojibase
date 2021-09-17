import { CompactEmoji, Emoji } from 'emojibase';

export function extractCompact(data: Emoji[]): CompactEmoji[] {
	return data.map((full) => {
		const { hexcode, emoji, emoticon, order, group, label, tags, text, skins } = full;
		const compact: CompactEmoji = {
			group,
			hexcode,
			label,
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
