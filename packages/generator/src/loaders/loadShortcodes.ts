import { ShortcodeMap } from '../types';

export async function loadShortcodes(): Promise<ShortcodeMap> {
	const { shortcodes } = await import('../resources/shortcodes');

	return shortcodes;
}
