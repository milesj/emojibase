/* eslint-disable sort-keys, no-cond-assign, complexity */

import { DARK_SKIN, LIGHT_SKIN, MEDIUM_DARK_SKIN, MEDIUM_LIGHT_SKIN, MEDIUM_SKIN } from 'emojibase';
import {
  DARK_SKIN_MODIFIER,
  EMOJI_VARIATION_SELECTOR,
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
import hasProperty from '../helpers/hasProperty';
import log from '../helpers/log';
import extractSkinTone from '../parsers/extractSkinTone';
import { Emoji, EmojiMap, EmojiModification, SkinTone } from '../types';

const SKIN_HEXCODE_PATTERN = new RegExp(`-(${SKIN_MODIFIER_PATTERN.source})`, 'g');

const SKIN_TONES: { [hexcode: string]: SkinTone } = {
  [LIGHT_SKIN_MODIFIER]: LIGHT_SKIN, // 1
  [MEDIUM_LIGHT_SKIN_MODIFIER]: MEDIUM_LIGHT_SKIN, // 2
  [MEDIUM_SKIN_MODIFIER]: MEDIUM_SKIN, // 3
  [MEDIUM_DARK_SKIN_MODIFIER]: MEDIUM_DARK_SKIN, // 4
  [DARK_SKIN_MODIFIER]: DARK_SKIN, // 5
};

export default function joinModifiersToData(emojis: EmojiMap) {
  Object.keys(emojis).forEach((hexcode) => {
    const emoji = emojis[hexcode];

    // Handle appending a skin tone modification
    const addModification = (parent: Emoji, mod: EmojiModification) => {
      const modsMap = parent.modifications || {};

      modsMap[mod.hexcode] = {
        ...mod,
        ...modsMap[mod.hexcode],
      };

      parent.modifications = modsMap;
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
      let tone: SkinTone | SkinTone[] | undefined | null;
      let parentEmoji: Emoji | undefined;

      // Multi-person skin tones
      // http://unicode.org/reports/tr51/#multiperson_skintones
      if ((match = hexcode.match(MULTI_PERSON_SKIN_TONE_PATTERN))) {
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
        tone = extractSkinTone(emoji.name);
      }

      if (parentEmoji && tone) {
        addModification(parentEmoji, {
          ...emoji,
          tone,
        });
      } else {
        log.error('error', `No parent emoji found for ${hexcode}`);
      }

      // Remove the modification from the root
      delete emojis[hexcode];

      // Generate Emoji_Modifier_Base modifications manually
    } else if (hasProperty(emoji.property, ['Emoji_Modifier_Base'])) {
      Object.keys(SKIN_TONES).forEach((skinHexcode) => {
        const mod = emojis[skinHexcode];

        // @ts-expect-error
        addModification(emoji, {
          hexcode: `${emoji.hexcode}-${mod.hexcode}`,
          name: `${emoji.name}, ${mod.name}`,
          tone: SKIN_TONES[skinHexcode],
        });
      });
    }
  });
}
