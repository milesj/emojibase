import { EMOJI, FULLY_QUALIFIED, TEXT } from 'emojibase';
import { SEQUENCE_REMOVAL_PATTERN, SKIN_MODIFIER_PATTERN } from '../constants';
import { hasProperty } from '../helpers/hasProperty';
import {
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

		// Pull in the official name for each hexcode part
		const name: string[] = [];

		// Tag and flag sequences don't have meaningful names,
		// so use the descriptions parsed from the offical data files
		if (
			hasProperty(emoji.property, [
				'Emoji_Flag_Sequence',
				'RGI_Emoji_Flag_Sequence',
				'Emoji_Tag_Sequence',
				'RGI_Emoji_Tag_Sequence',
			])
		) {
			name.push(emoji.description.toUpperCase());
		} else {
			let hasSkinTone = '';

			hexcode.split('-').forEach((code) => {
				if (code.match(SEQUENCE_REMOVAL_PATTERN)) {
					// Skip joiners
				} else if (code.match(SKIN_MODIFIER_PATTERN)) {
					hasSkinTone = code;
				} else if (names[code]) {
					name.push(names[code]);
				}
			});

			// If an emoji sequence utilizes a skin tone, let's move that part of
			// the name to the very end, as it's quite jarring otherwise.
			if (hasSkinTone) {
				name.push(names[hasSkinTone]);
			}
		}

		emoji.name = name.join(', ');
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
