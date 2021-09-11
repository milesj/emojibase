/* eslint-disable no-nested-ternary */

import { EMOJI, TEXT } from 'emojibase';
import { EmojiData, EmojiDataMap, ParsedLine, Property } from '../types';
import { extractEmojiVersion } from './extractEmojiVersion';
import { extractLineDescription } from './extractLineDescription';
import { extractUnicodeVersion } from './extractUnicodeVersion';
import { parse } from './parse';
import { spreadHexcode } from './spreadHexcode';
import { verifyTotals } from './verifyTotals';

/**
 * Parses the official unicode emoji data.
 *
 * Example: http://unicode.org/Public/emoji/5.0/emoji-data.txt
 */
export function parseData(version: string, content: string, unicodeVersion?: number): EmojiDataMap {
	const { lines, totals } = parse(content);
	const data = lines.reduce((map: EmojiDataMap, line: ParsedLine) => {
		const [rawHexcode, property, , modifier] = line.fields;

		// v11.0 included EP, which reserves slots for future emoji.
		// We don't need to pull these in at this time.
		if (property === 'Extended_Pictographic') {
			return map;
		}

		const emojiVersion = extractEmojiVersion(line.comment) ?? Number.parseFloat(version);
		const emoji: EmojiData = {
			description: extractLineDescription(line.comment),
			hexcode: '',
			property: [(property as Property) || 'Emoji'],
			type: EMOJI,
			unicodeVersion: extractUnicodeVersion(emojiVersion, unicodeVersion),
			version: emojiVersion,
		};

		spreadHexcode(rawHexcode, (hexcode, range) => {
			// v1.0 had a different structure
			if (!range && version === '1.0') {
				emoji.type = property === 'emoji' ? EMOJI : TEXT;
				emoji.property = [
					modifier === 'primary' || modifier === 'secondary'
						? 'Emoji_Modifier_Base'
						: modifier === 'modifier'
						? 'Emoji_Modifier'
						: 'Emoji',
				];
			}

			if (map[hexcode]) {
				// An emoji may belong to multiple properties,
				// so keep a unique list of all applicable.
				map[hexcode].property = [...new Set([...map[hexcode].property, ...emoji.property])];
			} else {
				map[hexcode] = {
					...emoji,
					hexcode,
				};
			}
		});

		return map;
	}, {});

	return verifyTotals('data', version, data, totals);
}
