/* eslint-disable sort-keys, no-cond-assign, complexity */

import { LIGHT_SKIN, MEDIUM_LIGHT_SKIN, MEDIUM_SKIN, MEDIUM_DARK_SKIN, DARK_SKIN } from 'emojibase';
import log from '../helpers/log';
import hasProperty from '../helpers/hasProperty';
import extractSkinTone from '../parsers/extractSkinTone';
import { Emoji, EmojiModification, EmojiMap, SkinTone } from '../types';
import {
  LIGHT_SKIN_MODIFIER,
  MEDIUM_LIGHT_SKIN_MODIFIER,
  MEDIUM_SKIN_MODIFIER,
  MEDIUM_DARK_SKIN_MODIFIER,
  DARK_SKIN_MODIFIER,
  SKIN_MODIFIER_PATTERN,
  EMOJI_VARIATION_SELECTOR,
  MULTI_PERSON_SKIN_TONE_PATTERN,
  WOMAN,
  MAN,
} from '../constants';

const SKIN_HEXCODE_PATTERN = new RegExp(`-(${SKIN_MODIFIER_PATTERN.source})`, 'g');

const SKIN_TONES: { [hexcode: string]: SkinTone } = {
  [LIGHT_SKIN_MODIFIER]: LIGHT_SKIN, // 1
  [MEDIUM_LIGHT_SKIN_MODIFIER]: MEDIUM_LIGHT_SKIN, // 2
  [MEDIUM_SKIN_MODIFIER]: MEDIUM_SKIN, // 3
  [MEDIUM_DARK_SKIN_MODIFIER]: MEDIUM_DARK_SKIN, // 4
  [DARK_SKIN_MODIFIER]: DARK_SKIN, // 5
};

export default function joinModifiersToData(emojis: EmojiMap) {
  Object.keys(emojis).forEach(hexcode => {
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
      if ((match = hexcode.match(MULTI_PERSON_SKIN_TONE_PATTERN))) {
        const [, genderType1, skinTone1, groupType, genderType2, skinTone2] = match;
        let parentHexcode = '';

        // HANDSHAKE
        if (groupType === '1F91D') {
          if (
            (genderType1 === WOMAN && genderType2 === MAN) ||
            (genderType1 === MAN && genderType2 === WOMAN)
          ) {
            parentHexcode = '1F46B'; // woman and man holding hands
          } else if (genderType1 === MAN && genderType2 === MAN) {
            parentHexcode = '1F46C'; // men holding hands
          } else if (genderType1 === WOMAN && genderType2 === WOMAN) {
            parentHexcode = '1F46D'; // women holding hands
          } else {
            parentHexcode = '1F9D1-200D-1F91D-200D-1F9D1'; // people holding hands
          }
        }

        parentEmoji = emojis[parentHexcode];
        tone = [SKIN_TONES[skinTone1], SKIN_TONES[skinTone2]];

        // Flatten if the same tone
        if (tone[0] === tone[1]) {
          [tone] = tone;
        }

        // Single skin tone
      } else if (hexcode.match(SKIN_MODIFIER_PATTERN)) {
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
      Object.keys(SKIN_TONES).forEach(skinHexcode => {
        const mod = emojis[skinHexcode];

        // @ts-ignore
        addModification(emoji, {
          hexcode: `${emoji.hexcode}-${mod.hexcode}`,
          name: `${emoji.name}, ${mod.name}`,
          tone: SKIN_TONES[skinHexcode],
        });
      });
    }
  });
}
