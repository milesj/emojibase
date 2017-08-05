/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable complexity */

import log from '../helpers/log';
import isObject from '../helpers/isObject';
import hasProperty from '../helpers/hasProperty';
import {
  SKIN_MODIFIER_PATTERN,
  EMOJI_VARIATION_SELECTOR,
  TEXT_VARIATION_SELECTOR,
} from '../constants';

import type { EmojiMap } from '../types';

export default function verifyData(emojis: EmojiMap): EmojiMap {
  const usedShortcodes = {};

  Object.keys(emojis).forEach((hexcode) => {
    const emoji = emojis[hexcode];
    const errors = [];

    // Skip modifiers and components
    if (hasProperty(emoji.property, ['Emoji_Modifier', 'Emoji_Component'])) {
      return;
    }

    // Verify no skin tone modifications are in the root,
    // excluding the Fitzpatrick modifiers themselves.
    if (hexcode.match(SKIN_MODIFIER_PATTERN) && hexcode.length !== 5) {
      errors.push('Emoji with Fitzpatrick modifier found at the root.');
    }

    // Verify there are 5 skin tone modifications if applicable
    if (isObject(emoji.modifications)) {
      let count = 0;

      Object.keys(emoji.modifications).forEach((skinTone) => {
        const mod = emoji.modifications[skinTone];

        if (parseFloat(skinTone) !== mod.tone) {
          errors.push(`Mismatch skin tone modification. Expected ${mod.tone}, found ${skinTone}.`);
        }

        count += 1;
      });

      if (count !== 5) {
        errors.push(`Invalid number of skin tone modifications. Expect 5, found ${count}.`);
      }
    }

    // Verify there are 2 presentation variations if applicable
    if (isObject(emoji.variations)) {
      if (!emoji.variations.text || !emoji.variations.text.endsWith(TEXT_VARIATION_SELECTOR)) {
        errors.push(`Invalid text presentation variation. Found ${emoji.variations.text}.`);
      }

      if (!emoji.variations.emoji || !emoji.variations.emoji.endsWith(EMOJI_VARIATION_SELECTOR)) {
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

    // Verify that shortcodes exist and that none have been duplicated
    if (!emoji.shortcodes || emoji.shortcodes.length === 0) {
      errors.push('No shortcodes defined.');
    } else {
      const used = [];

      emoji.shortcodes.forEach((shortcode) => {
        if (usedShortcodes[shortcode]) {
          used.push(`${shortcode} (${usedShortcodes[shortcode].name})`);
        } else {
          usedShortcodes[shortcode] = emoji;
        }
      });

      if (used.length > 0) {
        errors.push(`Shortcodes have been used elsewhere: ${used.join(', ')}`);
      }
    }

    // Display errors
    if (errors.length > 0) {
      log.error(
        'verify',
        `Error(s) detected for ${emoji.name} (${hexcode}):\n`,
        errors.join('\n'),
      );
    }
  });

  return emojis;
}
