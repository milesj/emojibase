/* eslint-disable sort-keys, complexity */

import { DARK_SKIN, LIGHT_SKIN, MEDIUM_DARK_SKIN, MEDIUM_LIGHT_SKIN, MEDIUM_SKIN } from 'emojibase';
import {
	DARK_SKIN_MODIFIER,
	EMOJI_VARIATION_SELECTOR,
	HANDSHAKE_MIXED_SKIN_TONE_PATTERN,
	LIGHT_SKIN_MODIFIER,
	MAN,
	MEDIUM_DARK_SKIN_MODIFIER,
	MEDIUM_LIGHT_SKIN_MODIFIER,
	MEDIUM_SKIN_MODIFIER,
	MULTI_PERSON_GROUPING_HEXCODES,
	MULTI_PERSON_SKIN_TONE_PATTERN,
	SKIN_MODIFIER_PATTERN,
	WOMAN,
} from '../constants';
import { hasProperty } from '../helpers/hasProperty';
import { reportFailure } from '../helpers/validation';
import type { Emoji, EmojiMap, EmojiModification, SkinTone } from '../types';

const SKIN_HEXCODE_PATTERN = new RegExp(`-(${SKIN_MODIFIER_PATTERN.source})`, 'g');

const SKIN_TONES: Record<string, SkinTone> = {
	[LIGHT_SKIN_MODIFIER]: LIGHT_SKIN, // 1
	[MEDIUM_LIGHT_SKIN_MODIFIER]: MEDIUM_LIGHT_SKIN, // 2
	[MEDIUM_SKIN_MODIFIER]: MEDIUM_SKIN, // 3
	[MEDIUM_DARK_SKIN_MODIFIER]: MEDIUM_DARK_SKIN, // 4
	[DARK_SKIN_MODIFIER]: DARK_SKIN, // 5
};

// Skin tones only come from the RGI modifier and ZWJ sequences. They are never synthesized for
// every Emoji_Modifier_Base, as not all have them (e.g. 1F46A family).
// http://unicode.org/reports/tr51/#Emoji_Sets
export function joinModifiersToData(emojis: EmojiMap) {
	Object.keys(emojis).forEach((hexcode) => {
		const emoji = emojis[hexcode];

		// Handle appending a skin tone modification
		const addModification = (parent: Emoji, mod: EmojiModification) => {
			parent.modifications = { ...parent.modifications, [mod.hexcode]: mod };
		};

		// Merge Emoji_ZWJ_Sequence and Emoji_Modifier_Sequence emojis into their parent
		if (
			hasProperty(emoji.property, [
				'Emoji_ZWJ_Sequence',
				'RGI_Emoji_ZWJ_Sequence',
				'Emoji_Modifier_Sequence',
				'RGI_Emoji_Modifier_Sequence',
			]) &&
			hexcode.match(SKIN_MODIFIER_PATTERN)
		) {
			let match;
			let tone: SkinTone | SkinTone[] | null | undefined;
			let parentEmoji: Emoji | undefined;

			// Mixed skin tones
			// http://unicode.org/reports/tr51/#multiperson_skintones
			if (!parentEmoji && (match = hexcode.match(HANDSHAKE_MIXED_SKIN_TONE_PATTERN))) {
				const [, skinTone1, skinTone2] = match;

				parentEmoji = emojis['1F91D']; // Handshake
				tone =
					skinTone1 === skinTone2
						? SKIN_TONES[skinTone1]
						: [SKIN_TONES[skinTone1], SKIN_TONES[skinTone2]];
			}

			// Multi-person skin tones
			// http://unicode.org/reports/tr51/#multiperson_skintones
			if (!parentEmoji && (match = hexcode.match(MULTI_PERSON_SKIN_TONE_PATTERN))) {
				const [, genderType1, skinTone1, groupType1, groupType2, genderType2, skinTone2] = match;
				let parentHexcode = '';

				MULTI_PERSON_GROUPING_HEXCODES.some((group) => {
					if (group.type[0] === groupType1 && (!groupType2 || group.type[1] === groupType2)) {
						if (
							(genderType1 === WOMAN && genderType2 === MAN) ||
							(genderType1 === MAN && genderType2 === WOMAN)
						) {
							parentHexcode = group.parentBoth;
						} else if (genderType1 === MAN && genderType2 === MAN) {
							parentHexcode = group.parentMen;
						} else if (genderType1 === WOMAN && genderType2 === WOMAN) {
							parentHexcode = group.parentWomen;
						} else {
							parentHexcode = group.parentOther;
						}

						return true;
					}

					return false;
				});

				parentEmoji = emojis[parentHexcode];
				tone =
					skinTone1 === skinTone2
						? SKIN_TONES[skinTone1]
						: [SKIN_TONES[skinTone1], SKIN_TONES[skinTone2]];
			}

			// Single skin tone
			if (!parentEmoji && hexcode.match(SKIN_MODIFIER_PATTERN)) {
				// Some ZWJ parent emoji can easily be found by removing their skin tone modifier:
				//    1F468-1F3FB-200D-2695-FE0F ->
				//    1F468-200D-2695-FE0F
				const parentHexcode = hexcode.replace(SKIN_HEXCODE_PATTERN, '');

				// While others need to replace their skin tone modifier with the emoji variation selector:
				//    26F9-1F3FB-200D-2640-FE0F ->
				//    26F9-FE0F-200D-2640-FE0F
				const parentHexcodeWithVariation = hexcode.replace(
					SKIN_MODIFIER_PATTERN,
					EMOJI_VARIATION_SELECTOR,
				);

				parentEmoji = emojis[parentHexcode] || emojis[parentHexcodeWithVariation];
				tone = SKIN_TONES[hexcode.match(SKIN_MODIFIER_PATTERN)![0]];
			}

			if (parentEmoji && tone) {
				addModification(parentEmoji, {
					...emoji,
					tone,
				});
			} else {
				reportFailure('build', `No parent emoji found for ${hexcode}`);
			}

			// Remove the modification from the root
			delete emojis[hexcode];
		}
	});
}
