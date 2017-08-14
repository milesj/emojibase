/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { SKIN_MODIFIER_PATTERN, SUPPORTED_LOCALES } from '../../packages/emojibase/lib/constants';
import buildEmojiData from '../builders/buildEmojiData';
import buildAnnotationData from '../builders/buildAnnotationData';
import cleanHexcode from '../helpers/cleanHexcode';
import log from '../helpers/log';
import readCache from '../helpers/readCache';
import writeDataset from '../helpers/writeDataset';
import filterData from '../helpers/filterData';
import extractSubset from './extractSubset';
import toUnicode from './toUnicode';

import type { CLDRAnnotationMap, FinalEmoji } from '../types';

function createEmoji(baseEmoji: Object, annotations: CLDRAnnotationMap): FinalEmoji {
  const emoji: Object = {
    // Classification
    name: baseEmoji.name || baseEmoji.description.toUpperCase(),
    hexcode: baseEmoji.hexcode,
    shortcodes: baseEmoji.shortcodes || [],
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

  if ('tone' in baseEmoji && baseEmoji.tone !== null) {
    emoji.tone = baseEmoji.tone;
  }

  // Presentation variations
  if ('variations' in baseEmoji) {
    emoji.emoji = toUnicode(baseEmoji.variations.emoji);
    emoji.text = toUnicode(baseEmoji.variations.text);
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

  // Skin modifications
  if ('modifications' in baseEmoji) {
    emoji.skins = Object.keys(baseEmoji.modifications).map((skinTone) => {
      const skin = createEmoji(baseEmoji.modifications[skinTone], annotations);
      const skinHexcode = skin.hexcode.match(SKIN_MODIFIER_PATTERN);

      // Inherit values from the parent
      // $FlowIgnore We know the modifier hexcode exists
      skin.annotation = `${emoji.annotation}, ${annotations[skinHexcode[0]].annotation}`;
      skin.shortcodes = emoji.shortcodes.map(code => `${code}_tone${skinTone}`);

      return skin;
    });
  }

  return emoji;
}

export default async function generateData() {
  log.title('data', 'Generating emoji datasets');

  const data = await buildEmojiData();
  const filteredData = filterData(data);

  // Generate datasets for each locale
  SUPPORTED_LOCALES.forEach(async (locale) => {
    const annotations = await buildAnnotationData(locale);
    const emojis = Object.keys(filteredData).map(hexcode => (
      createEmoji(filteredData[hexcode], annotations)
    ));

    // Sort by order
    emojis.sort((a, b) => (a.order || 0) - (b.order || 0));

    writeDataset(`${locale}/data.json`, emojis);
    writeDataset(`${locale}/compact.json`, extractSubset(emojis, 'compact'));
  });

  // Generate metadata and specialized datasets
  const unicode = new Set();
  const hexcodes = new Set();
  const shortcodes = new Set();

  const addMetadata = (hexcode) => {
    unicode.add(toUnicode(hexcode));
    hexcodes.add(hexcode);
  };

  Object.keys(filteredData).forEach((hexcode) => {
    const { modifications, variations, shortcodes: codes } = filteredData[hexcode];

    addMetadata(hexcode);

    if (variations) {
      addMetadata(variations.emoji);
      addMetadata(variations.text);
    }

    if (modifications) {
      Object.keys(modifications).forEach((skinTone) => {
        addMetadata(modifications[skinTone].hexcode);
      });
    }

    codes.forEach((code) => {
      shortcodes.add(code);
    });
  });

  writeDataset('meta/groups.json', readCache('group-hierarchy.json'));
  writeDataset('meta/unicode.json', unicode);
  writeDataset('meta/hexcodes.json', hexcodes);
  writeDataset('meta/shortcodes.json', shortcodes);

  log.success('data', 'Generated emoji datasets');
}
