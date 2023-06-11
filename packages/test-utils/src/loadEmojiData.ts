import { Emoji, joinShortcodes, ShortcodesDataset } from 'emojibase';

export function loadEmojiData(shortcodeDatasets?: ShortcodesDataset[]): Emoji[] {
	const data = require('../test-data.json') as Emoji[];

	return shortcodeDatasets ? joinShortcodes(data, shortcodeDatasets) : data;
}
