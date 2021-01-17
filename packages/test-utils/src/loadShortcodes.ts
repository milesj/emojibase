import { ShortcodesDataset } from 'emojibase';

export default function loadShortcodes(): ShortcodesDataset {
  // eslint-disable-next-line global-require
  return require('../test-shortcodes.json');
}
