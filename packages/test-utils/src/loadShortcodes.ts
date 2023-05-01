import { ShortcodesDataset } from 'emojibase';

export function loadShortcodes(): ShortcodesDataset {
	// eslint-disable-next-line unicorn/prefer-module
	return require('../test-shortcodes.json') as ShortcodesDataset;
}
