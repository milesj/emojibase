import { EmojiMap } from '../types';

export default function flattenData(data: EmojiMap): EmojiMap {
  const cleaned: EmojiMap = {};

  Object.keys(data).forEach((hexcode) => {
    const emoji = data[hexcode];

    cleaned[hexcode] = emoji;

    // Move modifications up to the root
    if (emoji.modifications) {
      Object.values(emoji.modifications).forEach((mod) => {
        cleaned[mod.hexcode] = mod;
      });
    }
  });

  return cleaned;
}
