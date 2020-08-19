import { stripHexcode } from 'emojibase';
import { EmojiMap, HexcodeMap, Hexcode } from '../types';

export default class Database {
  emojis: EmojiMap;

  hexcodeMapping: HexcodeMap<Hexcode> = {};

  constructor(emojis: EmojiMap) {
    this.emojis = emojis;
    this.mapEmojis(emojis);
  }

  // Some external shortcode providers use either the variation or sequenceless
  // hexcodes for mapping their shortcodes, while we use the variationless one.
  // Let's add additional mappings for the variations so we capture everything.
  private mapEmojis(emojis: EmojiMap) {
    Object.values(emojis).forEach((emoji) => {
      this.hexcodeMapping[emoji.hexcode] = emoji.hexcode;

      // Without sequences
      const otherHexcode = stripHexcode(emoji.hexcode);

      if (otherHexcode !== emoji.hexcode && !this.hexcodeMapping[otherHexcode]) {
        this.hexcodeMapping[otherHexcode] = otherHexcode;
      }

      // Variations
      if (emoji.variations) {
        const { emoji: emojiHexcode, text: textHexcode } = emoji.variations;

        if (emojiHexcode && !this.hexcodeMapping[emojiHexcode]) {
          this.hexcodeMapping[emojiHexcode] = emoji.hexcode;
        }

        if (textHexcode && !this.hexcodeMapping[textHexcode]) {
          this.hexcodeMapping[textHexcode] = emoji.hexcode;
        }
      }

      // Skin tones
      if (emoji.modifications) {
        this.mapEmojis(emoji.modifications);
      }
    });
  }
}
