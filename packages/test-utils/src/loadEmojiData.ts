import { Emoji } from 'emojibase';

let DATA: Emoji[] = [];

export default function loadEmojiData(): Emoji[] {
  if (DATA.length > 0) {
    return DATA;
  }

  // eslint-disable-next-line global-require, @typescript-eslint/no-unsafe-assignment
  DATA = require('../test-data.json');

  return DATA;
}
