import { EMOJI } from 'emojibase';
import { decodeEscapeSequence } from '../helpers/decodeEscapeSequence';
import type { EmojiDataMap, ParsedLine, Property } from '../types';
import { extractEmojiVersion } from './extractEmojiVersion';
import { extractLineDescription } from './extractLineDescription';
import { parse } from './parse';
import { spreadHexcode } from './spreadHexcode';
import { verifyTotals } from './verifyTotals';

/**
 * Parses the official unicode emoji sequences data.
 *
 * Example:
 *  http://unicode.org/Public/emoji/5.0/emoji-sequences.txt
 *  http://unicode.org/Public/emoji/5.0/emoji-zwj-sequences.txt
 */
export function parseSequences(
	version: string,
	content: string,
	defaultProperty: Property,
): EmojiDataMap {
	const { lines, totals } = parse(content);
	const data = lines.reduce((map: EmojiDataMap, line: ParsedLine) => {
		const [rawHexcode, property, description] = line.fields;

		const emojiVersion = extractEmojiVersion(line.comment) ?? Number.parseFloat(version);

		spreadHexcode(rawHexcode, (hexcode, range) => {
			map[hexcode] = {
				// A range shares one description ("bookmark..water pistol"),
				// so each code point's name is filled in from the metadata later
				description: range
					? ''
					: decodeEscapeSequence(description || extractLineDescription(line.comment)),
				hexcode,
				property: [(property as Property) || defaultProperty],
				type: EMOJI,
				version: emojiVersion,
			};
		});

		return map;
	}, {});

	// v2.0 doesnt have totals
	if (version === '2.0') {
		return data;
	}

	return verifyTotals('sequences', version, data, totals);
}
