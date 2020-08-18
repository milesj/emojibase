import isHidden from './isHidden';
import { EmojiMap } from '../types';

export default function filterData(data: EmojiMap): EmojiMap {
  const cleaned: EmojiMap = {};

  Object.keys(data).forEach((hexcode) => {
    const emoji = data[hexcode];

    if (isHidden(emoji)) {
      return;
    }

    cleaned[hexcode] = emoji;
  });

  return cleaned;
}
