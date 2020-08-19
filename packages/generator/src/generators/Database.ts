import { stripHexcode } from 'emojibase';
import { EmojiMap, Emoji, HexcodeMap, Hexcode } from '../types';

export default class Database {
  emojiList: Emoji[];

  emojiMap: EmojiMap = {};

  hexcodeMapping: HexcodeMap<Hexcode> = {};

  constructor(emojis: EmojiMap) {
    this.emojiList = Object.values(emojis);
    this.mapEmojis(emojis);
  }

  formatShortcodes(shortcodes: string | string[]): string | string[] {
    if (Array.isArray(shortcodes) && shortcodes.length === 1) {
      return shortcodes[0];
    }

    return shortcodes;
  }

  getEmoji(hexcode: Hexcode): Emoji | null {
    const code =
      this.hexcodeMapping[hexcode.toUpperCase()] ||
      this.hexcodeMapping[stripHexcode(hexcode.toUpperCase())];

    return (code && this.emojiMap[code]) || null;
  }

  // Some external shortcode providers use either the variation or sequenceless
  // hexcodes for mapping their shortcodes, while we use the variationless one.
  // Let's add additional mappings for the variations so we capture everything.
  private mapEmojis(emojis: EmojiMap) {
    Object.values(emojis).forEach((emoji) => {
      this.emojiMap[emoji.hexcode] = emoji;
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
