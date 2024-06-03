import type { ShortcodesDataset } from 'emojibase';

export function loadShortcodes(): ShortcodesDataset {
	return require('../test-shortcodes.json') as ShortcodesDataset;
}
