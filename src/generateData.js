/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { emojiDataStable, expandEmojiData } from 'unicode-emoji-data';
import emojiOneData from 'emojione/emoji.json';
import createKeywords from './createKeywords';
import createShortnames from './createShortnames';

// Pre-poluate unicode emoji data
const EMOJI = expandEmojiData(emojiDataStable);

// Pre-poluate a mapping of hexcodes to EmojiOne
const EMOJI_ONE = {};

Object.keys(emojiOneData).forEach((key: string) => {
  const emoji = emojiOneData[key];

  EMOJI_ONE[emoji.unicode.toUpperCase()] = emoji;
});

// Cache the results after generation
const EMOJI_CACHE = [];

export default function generateData(): Promise<Object[]> {
  if (EMOJI_CACHE.length) {
    return Promise.resolve(EMOJI_CACHE);
  }

  EMOJI.forEach((emoji: Object) => {
    let hexcode = emoji.codepoint;

    if (emoji.presentation && emoji.presentation.default) {
      hexcode = emoji.presentation.default.split(' ').join('-');
    }

    // Omit emoji without a code
    if (!hexcode) {
      return;
    }

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
    }

    EMOJI_CACHE.push({
      ...emoji,
      ...extraEmoji,
    });
  });

  return Promise.resolve(EMOJI_CACHE);
}
