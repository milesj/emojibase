/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import chalk from 'chalk';
import { emojiDataStable, emojiDataBeta, expandEmojiData } from 'unicode-emoji-data';
import emojiOneData from 'emojione/emoji.json';
import createKeywords from './createKeywords';
import createShortnames from './createShortnames';
import toCodepoint from './toCodepoint';

// Pre-poluate unicode emoji data
const EMOJI = expandEmojiData(emojiDataStable);
const BETA_EMOJI = expandEmojiData(emojiDataBeta);

// Pre-poluate a mapping of hexcodes to EmojiOne
const EMOJI_ONE = {};

Object.keys(emojiOneData).forEach((key: string) => {
  const emoji = emojiOneData[key];

  EMOJI_ONE[emoji.unicode.toUpperCase()] = emoji;
});

// Cache the results after packaging
export const CACHE = {
  stable: [],
  beta: [],
};

export default function packageData(beta: boolean = false): Object[] {
  const cacheKey = beta ? 'beta' : 'stable';

  if (CACHE[cacheKey].length) {
    return CACHE[cacheKey];
  }

  (beta ? BETA_EMOJI : EMOJI).forEach((emoji: Object) => {
    // Includes ZWJ (zero width joiner) and variation selectors
    let hexcodeZWJ = (emoji.presentation && emoji.presentation.default)
      ? emoji.presentation.default
      : emoji.codepoint;

    // Omit emoji without a hexcode
    if (!hexcodeZWJ) {
      return;
    }

    // Replace spaces with dashes to match EmojiOne
    hexcodeZWJ = hexcodeZWJ.trim().replace(/\s/g, '-');

    // Create a literal unicode character using ZWJ based hexcodes
    const unicode = String.fromCodePoint(...toCodepoint(hexcodeZWJ));

    // Create a hexcode without ZWJ and variation selectors
    const hexcode = hexcodeZWJ.replace(/(-(200D|FE0F))/g, '');

    // Package our data
    const extraEmoji = {
      hexcode,
      hexcodeZWJ,
      unicode,
      category: 'symbols',
      codepoint: toCodepoint(hexcode),
      keywords: createKeywords(emoji.name),
      shortnames: createShortnames(emoji.name),
    };

    // Inherit values from EmojiOne if they exist
    if (EMOJI_ONE[hexcode]) {
      const emojiOne = EMOJI_ONE[hexcode];

      extraEmoji.category = emojiOne.category;

      // Remove colons for a smaller filesize
      extraEmoji.shortnames = [
        emojiOne.shortname,
        ...emojiOne.aliases,
      ].map(sn => sn.replace(/:/g, ''));

      if (emojiOne.keywords.length) {
        extraEmoji.keywords = emojiOne.keywords;
      }

      // Delete the reference so we can infer what's not been used
      delete EMOJI_ONE[hexcode];
    }

    // Cache the merged values
    CACHE[cacheKey].push({
      ...emoji,
      ...extraEmoji,
    });
  });

  // Verify all of EmojiOne has been used
  if (process.env.NODE_ENV === 'development') {
    const remainingEmojiOnes = Object.values(EMOJI_ONE);

    if (remainingEmojiOnes.length) {
      console.log(chalk.yellow('Not all EmojiOne definitions have been used!'));

      remainingEmojiOnes.forEach((emoji: *) => {
        // $FlowIgnore Object.values() is typed incorrectly
        console.log(chalk.gray(`  ${emoji.name}`));
      });
    }
  }

  return CACHE[cacheKey];
}
