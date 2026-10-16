import { EMOJI, FULLY_QUALIFIED, TEXT } from 'emojibase';
import { getDescription } from '../helpers/getDescription';
import { extractGender } from '../parsers/extractGender';
import type {
	EmojiMap,
	EmojiMetadataMap,
	EmojiVariationMap,
	EmoticonMap,
	UnicodeNamesMap,
} from '../types';

export function joinMetadataToData(
	emojis: EmojiMap,
	names: UnicodeNamesMap,
	metadata: EmojiMetadataMap,
	variations: EmojiVariationMap,
	emoticons: EmoticonMap,
) {
	Object.keys(emojis).forEach((hexcode) => {
		const emoji = emojis[hexcode];

		// Determine the correct default presentation
		// http://unicode.org/reports/tr51/#Emoji_Presentation
		emoji.type = emoji.property.some(
			(prop) =>
				prop === 'Basic_Emoji' || prop === 'Emoji_Presentation' || prop.endsWith('Sequence'),
		)
			? EMOJI
			: TEXT;

		emoji.description = getDescription(emoji, names, metadata);

		// Single code points use their Unicode name. Sequences have none, so use the CLDR short
		// name the data files give them, uppercased to match.
		// http://unicode.org/reports/tr51/#Data_Files_Table
		emoji.name = hexcode.includes('-') ? emoji.description.toUpperCase() : (names[hexcode] ?? '');

		// http://unicode.org/reports/tr51/#Gender
		emoji.gender = extractGender(hexcode);

		emoji.qualifiers = {};

		// Pull in the official group and order
		if (metadata[hexcode]) {
			emoji.group = metadata[hexcode].group;
			emoji.subgroup = metadata[hexcode].subgroup;
			emoji.order = metadata[hexcode].order;
			emoji.qualifiers = metadata[hexcode].qualifiers;
		}

		// Pull in text and emoji variations
		if (variations[hexcode]) {
			emoji.variations = {
				emoji: variations[hexcode].emoji,
				text: variations[hexcode].text,
			};

			if (emoji.variations.emoji) {
				emoji.qualifiers[emoji.variations.emoji] = FULLY_QUALIFIED;
			}

			if (emoji.variations.text) {
				emoji.qualifiers[emoji.variations.text] = FULLY_QUALIFIED;
			}
		}

		// Pull in emoticon
		if (emoticons[hexcode]) {
			emoji.emoticon = emoticons[hexcode];
		}
	});
}
