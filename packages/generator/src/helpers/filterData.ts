import hasProperty from './hasProperty';
import { HIDDEN_EMOJI_PROPERTIES } from '../constants';
import { EmojiMap } from '../types';

export default function filterData(data: EmojiMap): EmojiMap {
  const cleaned: EmojiMap = {};

  Object.keys(data).forEach(hexcode => {
    const emoji = data[hexcode];

    if (hasProperty(emoji.property, HIDDEN_EMOJI_PROPERTIES)) {
      return;
    }

    cleaned[hexcode] = emoji;
  });

  return cleaned;
}
