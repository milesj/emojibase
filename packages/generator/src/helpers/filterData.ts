import { EmojiMap } from '../types';
import { isHidden } from './isHidden';

export function filterData(data: EmojiMap): EmojiMap {
	const cleaned: EmojiMap = {};

	Object.keys(data).forEach((hexcode) => {
		const emoji = data[hexcode];

		if (isHidden(emoji)) {
			return;
		}

		cleaned[hexcode] = emoji;
	});

	return cleaned;
}
