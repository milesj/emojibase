/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import {
  LIGHT_SKIN,
  LIGHT_SKIN_MODIFIER,
  MEDIUM_LIGHT_SKIN,
  MEDIUM_LIGHT_SKIN_MODIFIER,
  MEDIUM_SKIN,
  MEDIUM_SKIN_MODIFIER,
  MEDIUM_DARK_SKIN,
  MEDIUM_DARK_SKIN_MODIFIER,
  DARK_SKIN,
  DARK_SKIN_MODIFIER,
} from '../constants';

const SKIN_MODIFIERS = {
  [LIGHT_SKIN]: LIGHT_SKIN_MODIFIER, // 1
  [MEDIUM_LIGHT_SKIN]: MEDIUM_LIGHT_SKIN_MODIFIER, // 2
  [MEDIUM_SKIN]: MEDIUM_SKIN_MODIFIER, // 3
  [MEDIUM_DARK_SKIN]: MEDIUM_DARK_SKIN_MODIFIER, // 4
  [DARK_SKIN]: DARK_SKIN_MODIFIER, // 5
};

export default function joinModifiersToData(
  emojis: Object,
  modifiers: Object,
) {
  Object.keys(emojis).forEach((hexcode) => {
    const emoji = emojis[hexcode];

    // Only base modifiers may use skin tones
    if (!emoji.property.includes('Emoji_Modifier_Base')) {
      return;
    }

    // Add an array of skin tone modifications
    Object.keys(SKIN_MODIFIERS).forEach((skinTone) => {
      const mod = modifiers[SKIN_MODIFIERS[skinTone]];

      if (!emoji.modifications) {
        emoji.modifications = [];
      }

      emoji.modifications.push({
        ...mod,
        name: `${emoji.name}; ${mod.name}`,
        hexcode: `${emoji.hexcode}-${mod.hexcode}`,
        skin: skinTone,
      });
    });
  });
}
