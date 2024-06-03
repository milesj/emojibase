import type { EmojiDataMap } from '../types';

export function joinData(emojis: EmojiDataMap, data: EmojiDataMap) {
	Object.keys(data).forEach((hexcode) => {
		emojis[hexcode] = data[hexcode];
	});
}
