import path from 'path';
import { ShortcodeMap } from '../types';

export async function loadShortcodes(): Promise<ShortcodeMap> {
	// Relative to the lib/ folder!
	return Promise.resolve(require(path.resolve(__dirname, '../shortcodes.js')) as ShortcodeMap);
}
