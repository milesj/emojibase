import type { EmojiDataMap } from '../types';

// Code points are listed in both emoji-data.txt and emoji-sequences.txt (as Basic_Emoji),
// so merge them, keeping every property and preferring the later, more specific source.
export function joinData(emojis: EmojiDataMap, data: EmojiDataMap) {
	Object.keys(data).forEach((hexcode) => {
		const prev = emojis[hexcode];
		const next = data[hexcode];

		emojis[hexcode] = prev
			? {
					...prev,
					...next,
					description: next.description || prev.description,
					property: [...new Set([...prev.property, ...next.property])],
				}
			: next;
	});
}
