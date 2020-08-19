import { stripHexcode } from 'emojibase';
import { EmojiMap, Emoji, HexcodeMap, Hexcode } from '../types';

export default class Database {
  // List of non-flat emojis
  emojiList: Emoji[];

  // Mapping of flat emojis to hexcodes
  emojiMap: EmojiMap = {};

  // Mapping of all hexcode variants to their parent hexcode
  hexcodeLookup: HexcodeMap<Hexcode> = {};

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
      this.hexcodeLookup[hexcode.toUpperCase()] ||
      this.hexcodeLookup[stripHexcode(hexcode.toUpperCase())];

    return (code && this.emojiMap[code]) || null;
  }

  // Some external shortcode providers use either the variation or sequenceless
  // hexcodes for mapping their shortcodes, while we use the variationless one.
  // Let's add additional mappings for the variations so we capture everything.
  private mapEmojis(emojis: EmojiMap) {
    Object.values(emojis).forEach((emoji) => {
      this.emojiMap[emoji.hexcode] = emoji;
      this.hexcodeLookup[emoji.hexcode] = emoji.hexcode;

      // Without sequences
      const otherHexcode = stripHexcode(emoji.hexcode);

      if (otherHexcode !== emoji.hexcode && !this.hexcodeLookup[otherHexcode]) {
        this.hexcodeLookup[otherHexcode] = otherHexcode;
      }

      // Variations
      if (emoji.variations) {
        const { emoji: emojiHexcode, text: textHexcode } = emoji.variations;

        if (emojiHexcode && !this.hexcodeLookup[emojiHexcode]) {
          this.hexcodeLookup[emojiHexcode] = emoji.hexcode;
        }

        if (textHexcode && !this.hexcodeLookup[textHexcode]) {
          this.hexcodeLookup[textHexcode] = emoji.hexcode;
        }
      }

      // Skin tones
      if (emoji.modifications) {
        this.mapEmojis(emoji.modifications);
      }
    });
  }
}
