import { EMOJI_VARIATION_SELECTOR, TEXT_VARIATION_SELECTOR } from '../constants';
import { EmojiMap } from '../types';

export default function mergeDuplicateVariations(emojis: EmojiMap) {
  Object.keys(emojis).forEach((hexcode) => {
    if (!hexcode.endsWith(EMOJI_VARIATION_SELECTOR) && !hexcode.endsWith(TEXT_VARIATION_SELECTOR)) {
      return;
    }

    const parentHexcode = hexcode.slice(0, -5);
    const parentEmoji = emojis[parentHexcode];

    if (!parentEmoji) {
      return;
    }

    if (!parentEmoji.variations) {
      parentEmoji.variations = {
        emoji: '',
        text: '',
      };
    }

    // Inherit emoji hexcode with variation selector
    if (hexcode.endsWith(EMOJI_VARIATION_SELECTOR)) {
      parentEmoji.variations.emoji = hexcode;
    } else if (hexcode.endsWith(TEXT_VARIATION_SELECTOR)) {
      parentEmoji.variations.text = hexcode;
    }

    // Remove duplicate from list
    delete emojis[hexcode];
  });
}
