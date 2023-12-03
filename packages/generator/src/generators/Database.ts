/* eslint-disable unicorn/better-regex */

import { stripHexcode } from 'emojibase';
import { transliterate } from 'transliteration';
import { log } from '../helpers/log';
import { toArray } from '../helpers/toArray';
import { Emoji, EmojiMap, Hexcode, HexcodeMap, ShortcodeDataMap } from '../types';
import { toUnicode } from './toUnicode';

export class Database {
	preset = 'shortcodes';

	// List of non-flat emojis
	emojiList: Emoji[];

	// Mapping of flat emojis to hexcodes
	emojiMap: EmojiMap = {};

	// Mapping of all hexcode variants to their parent hexcode
	hexcodeLookup: HexcodeMap<Hexcode> = {};

	// Mapping of shortcodes to their hexcode for duplicate detection
	shortcodeReference: Record<string, Record<string, Hexcode>> = {};

	constructor(emojis: EmojiMap) {
		this.emojiList = Object.values(emojis);
		this.mapEmojis(emojis);
	}

	static slugify(value: string, transform: boolean = false): string {
		return (
			(transform ? transliterate(value) : value)
				.toLocaleLowerCase()
				// Apply separators
				.replace(/(\s|`|\/|\\|･|（|）|／)+/g, '_')
				// Remove special chars
				.replace(/([!"&'()[\],.:;<>«»?ʼ’‘“”—–„：])/g, '')
				// Remove multiple underscores
				.replace(/_{2,}/g, '_')
				// Remove leading underscores
				.replace(/^_+/, '')
				// Remove trailing underscores
				.replace(/_+$/, '')
				.trim()
		);
	}

	addShortcodes(map: ShortcodeDataMap, hexcode: Hexcode, shortcodes: string[] | string) {
		const item = map[hexcode];
		const list = item
			? new Set([...toArray(item), ...toArray(shortcodes)])
			: new Set(toArray(shortcodes));

		map[hexcode] = this.formatShortcodes([...list]);

		if (!this.shortcodeReference[this.preset]) {
			this.shortcodeReference[this.preset] = {};
		}

		list.forEach((shortcode) => {
			const usedHexcode = this.shortcodeReference[this.preset][shortcode];

			if (usedHexcode && usedHexcode !== hexcode) {
				log.error(
					this.preset,
					`Shortcode "${shortcode}" has already been defined for emoji ${toUnicode(
						usedHexcode,
					)} (${usedHexcode}). Duplicate added for emoji ${toUnicode(hexcode)} (${hexcode}).`,
				);
			}

			this.shortcodeReference[this.preset][shortcode] = hexcode;
		});
	}

	formatShortcodes(shortcodes: string[] | string): string[] | string {
		if (Array.isArray(shortcodes) && shortcodes.length === 1) {
			return shortcodes[0];
		}

		return shortcodes;
	}

	getEmoji(hexcode: Hexcode): Emoji | null {
		const code =
			this.hexcodeLookup[hexcode.toUpperCase()] ||
			this.hexcodeLookup[stripHexcode(hexcode.toUpperCase())];
		const emoji = (code && this.emojiMap[code]) || null;

		if (!emoji) {
			log.error(this.preset, `Shortcode ${hexcode} does not exist within our system.`);
		}

		return emoji;
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
				this.hexcodeLookup[otherHexcode] = emoji.hexcode;
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
