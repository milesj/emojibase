import { MetadataDataset } from 'emojibase';

export default function loadMeta(): MetadataDataset {
  // eslint-disable-next-line global-require
  return require('../test-meta.json');
}
