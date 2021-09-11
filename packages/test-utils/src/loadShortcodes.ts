import { ShortcodesDataset } from 'emojibase';

export function loadShortcodes(): ShortcodesDataset {
	// eslint-disable-next-line global-require
	return require('../test-shortcodes.json') as ShortcodesDataset;
}
