import { ShortcodesDataset } from 'emojibase';

let DATA: ShortcodesDataset;

export default function loadShortcodes(): ShortcodesDataset {
  if (!DATA) {
    // eslint-disable-next-line global-require, @typescript-eslint/no-unsafe-assignment
    DATA = require('../test-shortcodes.json');
  }

  return DATA;
}
