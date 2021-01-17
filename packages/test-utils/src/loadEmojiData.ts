import { Emoji, joinShortcodes, ShortcodesDataset } from 'emojibase';

export default function loadEmojiData(shortcodeDatasets?: ShortcodesDataset[]): Emoji[] {
  // eslint-disable-next-line global-require, @typescript-eslint/no-unsafe-assignment
  const data = require('../test-data.json');

  return shortcodeDatasets ? joinShortcodes(data, shortcodeDatasets) : data;
}
