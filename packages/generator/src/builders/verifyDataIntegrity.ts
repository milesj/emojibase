/* eslint-disable complexity */

import {
	EMOJI_VARIATION_SELECTOR,
	SKIN_MODIFIER_PATTERN,
	TEXT_VARIATION_SELECTOR,
} from '../constants';
import { isHidden } from '../helpers/isHidden';
import { isObject } from '../helpers/isObject';
import { log } from '../helpers/log';
import { toArray } from '../helpers/toArray';
import { EmojiMap, EmojiVariation } from '../types';

export function verifyDataIntegrity(emojis: EmojiMap): EmojiMap {
	const usedEmoticons: EmojiMap = {};

	Object.keys(emojis).forEach((hexcode) => {
		const emoji = emojis[hexcode];
		const errors: string[] = [];

		if (isHidden(emoji)) {
			return;
		}

		// Verify no skin tone modifications are in the root,
		// excluding the Fitzpatrick modifiers themselves
		if (hexcode.match(SKIN_MODIFIER_PATTERN) && hexcode.length !== 5) {
			errors.push('Emoji with Fitzpatrick modifier found at the root.');
		}

		// Verify there are 5 skin tone modifications if applicable
		// Multi-person skin tones will have more than 5
		if (emoji.modifications) {
			const count = Object.keys(emoji.modifications).length;

			if (count < 5) {
				errors.push(`Invalid number of skin tone modifications. Expect 5 or more, found ${count}.`);
			}
		}

		// Verify there are 2 presentation variations if applicable
		if (isObject<EmojiVariation>(emoji.variations)) {
			if (!emoji.variations.text?.endsWith(TEXT_VARIATION_SELECTOR)) {
				errors.push(`Invalid text presentation variation. Found ${emoji.variations.text}.`);
			}

			if (!emoji.variations.emoji?.endsWith(EMOJI_VARIATION_SELECTOR)) {
				errors.push(`Invalid emoji presentation variation. Found ${emoji.variations.emoji}.`);
			}

			const count = Object.keys(emoji.variations).length;

			if (count !== 2) {
				errors.push(`Invalid number of presentation variations. Expected 2, found ${count}.`);
			}
		}

		// Verify a name exists
		if (!emoji.name) {
			errors.push('Missing Unicode name.');
		}

		// Verify that no emoticons have been duplicated
		if (emoji.emoticon) {
			toArray(emoji.emoticon).forEach((emoticon) => {
				if (usedEmoticons[emoticon]) {
					errors.push(`Emoticon has been used elsewhere: ${usedEmoticons[emoticon].name}`);
				} else {
					usedEmoticons[emoticon] = emoji;
				}
			});
		}

		// Display errors
		if (errors.length > 0) {
			log.error('verify', `Error(s) detected for ${emoji.name} (${hexcode}):\n`, errors.join('\n'));
		}
	});

	return emojis;
}
