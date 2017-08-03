/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import buildEmojiData from '../builders/buildEmojiData';
import buildAnnotationData from '../builders/buildAnnotationData';
import cleanHexcode from '../helpers/cleanHexcode';
import hasProperty from '../helpers/hasProperty';
import writeDataset from '../helpers/writeDataset';
import fromCodepointToUnicode from '../fromCodepointToUnicode';
import fromHexToCodepoint from '../fromHexToCodepoint';
import { SUPPORTED_LOCALES } from '../constants';

import type { CLDRAnnotationMap } from '../types';

function toUnicode(hexcode: string): string {
  return fromCodepointToUnicode(fromHexToCodepoint(hexcode));
}

function createEmoji(baseEmoji: Object, annotations: CLDRAnnotationMap): Object {
  const emoji: Object = {
    // Classification
    hexcode: baseEmoji.hexcode,
    name: baseEmoji.name || baseEmoji.description.toUpperCase(),
    // Presentation
    emoji: toUnicode(baseEmoji.hexcode),
    type: baseEmoji.type,
    // Categorization
    order: baseEmoji.order,
    group: baseEmoji.group,
    subgroup: baseEmoji.group,
  };

  // Diversity
  if ('gender' in baseEmoji && baseEmoji.gender !== null) {
    emoji.gender = baseEmoji.gender;
  }

  if ('skin' in baseEmoji && baseEmoji.skin !== null) {
    emoji.skin = baseEmoji.skin;
  }

  // Presentation variations
  if ('variations' in baseEmoji) {
    emoji.emoji = toUnicode(baseEmoji.variations.emoji);
    emoji.text = toUnicode(baseEmoji.variations.text);
  }

  // Skin modifications
  if ('modifications' in baseEmoji) {
    emoji.skins = Object.keys(baseEmoji.modifications).map(skinTone => (
      createEmoji(baseEmoji.modifications[skinTone], annotations)
    ));
  }

  // Annotations
  const hexcodeWithoutModifiers = cleanHexcode(baseEmoji.hexcode); // No ZWJ, selectors
  const annotation = annotations[hexcodeWithoutModifiers];

  if (annotation) {
    if (annotation.annotation) {
      emoji.annotation = annotation.annotation;
    }

    if (annotation.tags && annotation.tags.length > 0) {
      emoji.tags = annotation.tags;
    }
  }

  // TODO shortcode

  return emoji;
}

export default function generateData() {
  SUPPORTED_LOCALES.forEach(async (locale) => {
    const annotations = await buildAnnotationData(locale);
    const data = await buildEmojiData();
    const emojis = [];

    Object.keys(data).forEach((hexcode) => {
      const emoji = data[hexcode];

      // Omit modifiers and components from the final output,
      // as they're not emoji characters to be used directly
      if (hasProperty(emoji.property, ['Emoji_Modifier', 'Emoji_Component'])) {
        return;
      }

      emojis.push(createEmoji(emoji, annotations));
    });

    // Sort by order
    emojis.sort((a, b) => a.order - b.order);

    writeDataset(`${locale}/data.json`, emojis);
  });
}
