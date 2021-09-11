import path from 'path';
import { EmoticonMap } from '../types';

export async function loadEmoticons(): Promise<EmoticonMap> {
	// Relative to the lib/ folder!
	return Promise.resolve(require(path.resolve(__dirname, '../emoticons.js')) as EmoticonMap);
}
