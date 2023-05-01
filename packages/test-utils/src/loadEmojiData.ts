import { Emoji, joinShortcodes, ShortcodesDataset } from 'emojibase';

export function loadEmojiData(shortcodeDatasets?: ShortcodesDataset[]): Emoji[] {
	// eslint-disable-next-line unicorn/prefer-module
	const data = require('../test-data.json') as Emoji[];

	return shortcodeDatasets ? joinShortcodes(data, shortcodeDatasets) : data;
}
