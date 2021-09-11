import { Emoji, flattenEmojiData, ShortcodesDataset } from 'emojibase';
import { loadEmojiData } from './loadEmojiData';

export function loadFlatEmojiData(shortcodeDatasets?: ShortcodesDataset[]): Emoji[] {
	return flattenEmojiData(loadEmojiData(), shortcodeDatasets);
}
