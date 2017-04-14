/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { emojiDataStable, expandEmojiData } from 'unicode-emoji-data';
import emojiOneData from 'emojione/emoji.json';
import createKeywords from './createKeywords';
import createShortnames from './createShortnames';
import { EXPANDED, FULL, STANDARD, COMPACT } from './constants';

// Pre-poluate unicode emoji data
const EMOJI = expandEmojiData(emojiDataStable);

// Pre-poluate a mapping of hexcodes to EmojiOne
const EMOJI_ONE = {};

Object.keys(emojiOneData).forEach((key) => {
  const emoji = emojiOneData[key];

  EMOJI_ONE[emoji.unicode.toUpperCase()] = emoji;
});

export default function generateDataset(format) {
  const set = [];

  EMOJI.forEach((emoji) => {
    let hexcode = emoji.codepoint;

    if (emoji.presentation && emoji.presentation.default) {
      hexcode = emoji.presentation.default.split(' ').join('-');
    }

    // Omit emoji without a codepoint
    if (!hexcode) {
      return;
    }

    const name = emoji.name;
    const codepoint = hexcode.split('-').map(point => parseInt(point, 16));
    const unicode = String.fromCodePoint(...codepoint);
    let category = 'symbols';
    let keywords = createKeywords(emoji.name);
    let shortnames = createShortnames(emoji.name);

    // Inherit values from EmojiOne if they exist
    if (EMOJI_ONE[hexcode]) {
      const emojiOne = EMOJI_ONE[hexcode];

      category = emojiOne.category;
      shortnames = [
        emojiOne.shortname,
        ...emojiOne.aliases,
      ];

      if (emojiOne.keywords.length) {
        keywords = emojiOne.keywords;
      }
    }

    switch (format) {
      case EXPANDED:
        set.push({
          ...emoji,
          name,
          hexcode,
          unicode,
          codepoint,
          shortnames,
          keywords,
          category,
        });
        break;

      case FULL:
        set.push({
          name,
          hexcode,
          unicode,
          codepoint,
          shortnames,
          keywords,
          category,
        });
        break;

      case STANDARD:
        set.push({
          name,
          hexcode,
          unicode,
          codepoint,
          shortname: shortnames[0],
        });
        break;

      case COMPACT:
        set.push({
          hexcode,
          shortname: shortnames[0],
        });
        break;

      default: break;
    }
  });

  return set;
}
