import { Emoji, flattenEmojiData } from 'emojibase';
import loadEmojiData from './loadEmojiData';

let DATA: Emoji[] = [];

export default function loadFlatEmojiData(): Emoji[] {
  if (DATA.length === 0) {
    DATA = flattenEmojiData(loadEmojiData());
  }

  return DATA;
}
