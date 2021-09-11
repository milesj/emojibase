import { MetadataDataset } from 'emojibase';

export function loadMeta(): MetadataDataset {
	// eslint-disable-next-line global-require
	return require('../test-meta.json') as MetadataDataset;
}
