/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { emojiData, expandEmojiData } from 'unicode-emoji-data';
import { combinedAnnotationsForLanguage } from 'unicode-emoji-annotations';
import emojiOneData from 'emojione/emoji.json';
import createTags from './createTags';
import createShortnames from './createShortnames';
// import extractGender from './extractGender';
// import extractSkinTone from './extractSkinTone';
import formatTag from './formatTag';
import fromHexToCodepoint from './fromHexToCodepoint';
import { WS_PATTERN, SEQUENCE_REMOVAL_PATTERN } from './constants';

// Pre-poluate unicode emoji data
export const EMOJI = expandEmojiData(emojiData);

// Pre-poluate unicode emoji annotations
export const EMOJI_ANNOTATIONS = {};

combinedAnnotationsForLanguage('en').forEach((annotation) => {
  EMOJI_ANNOTATIONS[annotation.sequence] = annotation;
});

function getAnnotation(hexcode: string, key: string): * {
  return EMOJI_ANNOTATIONS[hexcode] ? EMOJI_ANNOTATIONS[hexcode][key] : null;
}

// Pre-poluate a mapping of hexcodes to EmojiOne
export const EMOJI_ONE = {};

Object.keys(emojiOneData).forEach((hexcode: string) => {
  EMOJI_ONE[hexcode.toUpperCase()] = emojiOneData[hexcode];
});

// Cache the results after packaging
export const CACHE = [];

export default function packageData(): Object[] {
  if (CACHE.length > 0) {
    return CACHE;
  }

  EMOJI.forEach((emoji: Object) => {
    const { name, presentation, defaultPresentation } = emoji;
    const { variation = {} } = presentation;

    // Includes zero width joiner (ZWJ) and variation selectors
    const emojiHexcode = variation.emoji || presentation.default;
    const textHexcode = variation.text || '';

    // Omit emoji without a hexcode
    if (!emojiHexcode && !textHexcode) {
      return;
    }

    // Create a unicode character using ZWJ based hexcodes
    const emojiUnicode = emojiHexcode ? String.fromCodePoint(...fromHexToCodepoint(
      emojiHexcode.replace(WS_PATTERN, '-'),
    )) : null;

    const textUnicode = textHexcode ? String.fromCodePoint(...fromHexToCodepoint(
      textHexcode.replace(WS_PATTERN, '-'),
    )) : null;

    // Create a hexcode without sequences
    const hexcode = (emojiHexcode || textHexcode)
      .replace(SEQUENCE_REMOVAL_PATTERN, '')
      .trim()
      .replace(WS_PATTERN, '-');

    // Package our data
    const extraEmoji = {
      category: 'other',
      codepoint: fromHexToCodepoint(hexcode),
      display: defaultPresentation || 'emoji',
      emoji: emojiUnicode,
      // gender: extractGender(name),
      hexcode,
      name,
      order: null,
      // skin: extractSkinTone(name),
      shortnames: createShortnames(name),
      tags: getAnnotation(hexcode, 'keywords') || createTags(name),
      text: textUnicode,
    };

    // Remove diacritics and special characters from tags
    extraEmoji.tags = extraEmoji.tags.map(formatTag);

    // Inherit values from EmojiOne if they exist
    if (EMOJI_ONE[hexcode]) {
      const emojiOne = EMOJI_ONE[hexcode];

      extraEmoji.category = emojiOne.category;
      extraEmoji.order = emojiOne.order;

      // Remove colons for a smaller filesize
      extraEmoji.shortnames = [emojiOne.shortname]
        .concat(emojiOne.shortname_alternates)
        .map(sn => sn.replace(/:/g, ''));

      // Delete the reference so we can infer what's not been used
      delete EMOJI_ONE[hexcode];
    }

    // Cache the merged values
    CACHE.push(extraEmoji);
  });

  // Sort by order
  CACHE.sort((a, b) => a.order - b.order);

  return CACHE;
}
