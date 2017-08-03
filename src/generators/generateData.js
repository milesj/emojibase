/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import buildEmojiData from '../builders/buildEmojiData';
import buildAnnotationData from '../builders/buildAnnotationData';
import cleanHexcode from '../helpers/cleanHexcode';
import log from '../helpers/log';
import writeDataset from '../helpers/writeDataset';
import flattenAndFilterData from './flattenAndFilterData';
import toUnicode from './toUnicode';
import { SUPPORTED_LOCALES } from '../constants';

import type { CLDRAnnotationMap } from '../types';

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

export default async function generateData() {
  log.title('data', 'Generating emoji datasets');

  SUPPORTED_LOCALES.forEach(async (locale) => {
    const annotations = await buildAnnotationData(locale);
    const data = flattenAndFilterData(await buildEmojiData());
    const emojis = Object.keys(data).map(hexcode => createEmoji(data[hexcode], annotations));

    // Sort by order
    emojis.sort((a, b) => a.order - b.order);

    writeDataset(`${locale}/data.json`, emojis);
  });

  log.success('data', 'Generated emoji datasets');
}
