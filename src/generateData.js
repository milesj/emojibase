/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { emojiDataBeta, expandEmojiData } from 'unicode-emoji-data';
import emojiOneData from 'emojione/emoji.json';
import createKeywords from './createKeywords';
import createShortnames from './createShortnames';

// Pre-poluate unicode emoji data
const EMOJI = expandEmojiData(emojiDataBeta);

// Pre-poluate a mapping of hexcodes to EmojiOne
const EMOJI_ONE = {};

Object.keys(emojiOneData).forEach((key: string) => {
  const emoji = emojiOneData[key];

  EMOJI_ONE[emoji.unicode.toUpperCase()] = emoji;
});

// Cache the results after generation
const EMOJI_CACHE = [];

export default function generateData(): Object[] {
  if (EMOJI_CACHE.length) {
    return EMOJI_CACHE;
  }

  EMOJI.forEach((emoji: Object) => {
    let hexcode = (emoji.presentation && emoji.presentation.default)
      ? emoji.presentation.default
      : emoji.codepoint;

    // Omit emoji without a hexcode
    if (!hexcode) {
      return;
    }

    // Remove any zero width joiners and variation selectors
    hexcode = hexcode.replace(/ 200D/g, '').replace(/ FE0F/g, '');

    // Match formats with EmojiOne
    hexcode = hexcode.split(' ').join('-');

    // Build our data
    const codepoint = hexcode.split('-').map(point => parseInt(point, 16));
    const extraEmoji = {
      hexcode,
      codepoint,
      unicode: String.fromCodePoint(...codepoint),
      category: 'symbols',
      keywords: createKeywords(emoji.name),
      shortnames: createShortnames(emoji.name),
    };

    // Inherit values from EmojiOne if they exist
    if (EMOJI_ONE[hexcode]) {
      const emojiOne = EMOJI_ONE[hexcode];

      extraEmoji.category = emojiOne.category;
      extraEmoji.shortnames = [
        emojiOne.shortname,
        ...emojiOne.aliases,
      ];

      if (emojiOne.keywords.length) {
        extraEmoji.keywords = emojiOne.keywords;
      }

      delete EMOJI_ONE[hexcode];
    }

    EMOJI_CACHE.push({
      ...emoji,
      ...extraEmoji,
    });
  });

  // Verify all of EmojiOne has been used
  if (!Object.keys(EMOJI_ONE).length) {
    console.error('Not all EmojiOne definitions have been used!');
    console.log(EMOJI_ONE);
  }

  return EMOJI_CACHE;
}
