/* eslint-disable complexity */

import { SUPPORTED_LOCALES, stripHexcode, Emoji as FinalEmoji } from 'emojibase';
import buildEmojiData from '../builders/buildEmojiData';
import buildAnnotationData from '../builders/buildAnnotationData';
import log from '../helpers/log';
import readCache from '../helpers/readCache';
import writeDataset from '../helpers/writeDataset';
import filterData from '../helpers/filterData';
import extractCompact from './extractCompact';
import toUnicode from './toUnicode';
import { CLDRAnnotationMap, Emoji, EmojiModification, Hexcode, VersionMap } from '../types';

interface HexcodeVersionMap {
  [hexcode: string]: number;
}

function createEmoji(
  baseEmoji: Emoji | EmojiModification,
  versions: HexcodeVersionMap,
  annotations: CLDRAnnotationMap,
): FinalEmoji {
  /* eslint-disable sort-keys */
  const emoji: FinalEmoji = {
    // Classification
    annotation: '',
    name: baseEmoji.name || baseEmoji.description.toUpperCase(),
    hexcode: baseEmoji.hexcode,
    shortcodes: Array.from(baseEmoji.shortcodes),
    tags: [],
    // Presentation
    emoji: toUnicode(baseEmoji.hexcode),
    text: '',
    type: baseEmoji.type,
    // Categorization
    order: baseEmoji.order,
    group: baseEmoji.group,
    subgroup: baseEmoji.subgroup,
    version: 0,
  };
  /* eslint-enable sort-keys */

  // Release version
  if (versions[baseEmoji.hexcode]) {
    emoji.version = versions[baseEmoji.hexcode];
  }

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

  if ('emoticon' in baseEmoji) {
    emoji.emoticon = baseEmoji.emoticon;
  }

  // Annotations
  const annotation = annotations[stripHexcode(emoji.hexcode)]; // No ZWJ, selectors

  if (annotation) {
    if (annotation.annotation) {
      emoji.annotation = annotation.annotation;
    }

    if (annotation.tags && annotation.tags.size > 0) {
      emoji.tags = Array.from(annotation.tags);

      // Sort the tags for easier diffs
      emoji.tags.sort();

      // Some locales duplicate the annotation in the tag list
      if (emoji.tags.length > 1) {
        emoji.tags = emoji.tags.filter((tag: string) => tag !== emoji.annotation);
      }
    }
  }

  // Skin modifications
  if ('modifications' in baseEmoji) {
    emoji.skins = [];

    baseEmoji.modifications.forEach(mod => {
      const skin = createEmoji(mod, versions, annotations);

      skin.annotation = (annotations[stripHexcode(skin.hexcode)] || {}).annotation || '';
      skin.shortcodes = (emoji.shortcodes || []).map(
        code => `${code}_tone${Array.isArray(skin.tone) ? skin.tone.join('-') : skin.tone}`,
      );

      // Remove any tags
      delete skin.tags;

      emoji.skins!.push(skin);
    });
  }

  return emoji;
}

function createVersionMap(): HexcodeVersionMap {
  const cache: { emojiVersions: VersionMap } | null = readCache(
    'final/emoji-unicode-versions.json',
  );
  const versions: HexcodeVersionMap = {};

  if (!cache) {
    return versions;
  }

  Object.keys(cache.emojiVersions).forEach(version => {
    Object.keys(cache.emojiVersions[version]).forEach(hexcode => {
      versions[hexcode] = Number(version);
    });
  });

  return versions;
}

export default async function generateData(): Promise<void> {
  log.title('data', 'Generating emoji datasets');

  const data = await buildEmojiData();
  const filteredData = filterData(data);
  const versions = createVersionMap();

  // Generate datasets for each locale
  await Promise.all(
    SUPPORTED_LOCALES.map(async (locale: string) => {
      const annotations = await buildAnnotationData(locale);
      const emojis = Object.keys(filteredData).map(hexcode =>
        createEmoji(filteredData[hexcode], versions, annotations),
      );

      // Sort by order
      emojis.sort((a, b) => (a.order || 0) - (b.order || 0));

      return Promise.all([
        writeDataset(`${locale}/raw.json`, emojis),
        writeDataset(`${locale}/data.json`, emojis, true),
        writeDataset(`${locale}/compact.json`, extractCompact(emojis), true),
      ]);
    }),
  );

  // Generate metadata and specialized datasets
  const unicode = new Set();
  const hexcodes = new Set();
  const shortcodes = new Set();

  const addMetadata = (hexcode: Hexcode) => {
    unicode.add(toUnicode(hexcode));
    hexcodes.add(hexcode);
  };

  Object.keys(filteredData).forEach(hexcode => {
    const { modifications, variations, shortcodes: codes } = filteredData[hexcode];

    addMetadata(hexcode);

    if (variations) {
      addMetadata(variations.emoji);
      addMetadata(variations.text);
    }

    if (modifications) {
      modifications.forEach(mod => {
        addMetadata(mod.hexcode);
      });
    }

    codes.forEach(code => {
      shortcodes.add(code);
    });
  });

  await Promise.all([
    writeDataset('meta/groups.json', readCache('final/group-hierarchy.json')),
    writeDataset('meta/unicode.json', Array.from(unicode)),
    writeDataset('meta/hexcodes.json', Array.from(hexcodes)),
    writeDataset('meta/shortcodes.json', Array.from(shortcodes)),
  ]);

  log.success('data', 'Generated emoji datasets');
}
