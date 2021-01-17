import { MetadataDataset } from 'emojibase';

let DATA: MetadataDataset;

export default function loadMeta(): MetadataDataset {
  if (!DATA) {
    // eslint-disable-next-line global-require, @typescript-eslint/no-unsafe-assignment
    DATA = require('../test-meta.json');
  }

  return DATA;
}
