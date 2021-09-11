import { MetadataDataset } from 'emojibase';

export function loadMeta(): MetadataDataset {
	return require('../test-meta.json') as MetadataDataset;
}
