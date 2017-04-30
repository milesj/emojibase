/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import chalk from 'chalk';
import { remove as removeDiacritics } from 'diacritics';
import { emojiDataStable, emojiDataBeta, expandEmojiData } from 'unicode-emoji-data';
import emojiOneData from 'emojione/emoji.json';
import createTags from './createTags';
import createShortnames from './createShortnames';
import extractGender from './extractGender';
import extractSkinTone from './extractSkinTone';
import fromHexToCodepoint from './fromHexToCodepoint';

// Pre-poluate unicode emoji data
const EMOJI = expandEmojiData(emojiDataStable);
const BETA_EMOJI = expandEmojiData(emojiDataBeta);

// Pre-poluate a mapping of hexcodes to EmojiOne
const EMOJI_ONE = {};

Object.keys(emojiOneData).forEach((hexcode: string) => {
  EMOJI_ONE[hexcode.toUpperCase()] = emojiOneData[hexcode];
});

// Cache the results after packaging
export const CACHE = {
  stable: [],
  beta: [],
};

const WS_REGEX = /\s/g;
const JOINER_REGEX = /(-(200D|FE0F))/g;

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

    const { name, defaultPresentation } = emoji;

    // Replace spaces with dashes to match EmojiOne
    hexcodeZWJ = hexcodeZWJ.trim().replace(WS_REGEX, '-');

    // Create a literal unicode character using ZWJ based hexcodes
    const unicode = String.fromCodePoint(...fromHexToCodepoint(hexcodeZWJ));

    // Create a hexcode without ZWJ and variation selectors
    const hexcode = hexcodeZWJ.replace(JOINER_REGEX, '');

    // Package our data
    const extraEmoji = {
      category: 'symbols',
      codepoint: fromHexToCodepoint(hexcode),
      display: (defaultPresentation === 'emoji') ? 1 : 0,
      gender: extractGender(name),
      hexcode,
      name,
      order: null,
      skin: extractSkinTone(name),
      shortnames: createShortnames(name),
      tags: createTags(name),
      unicode,
    };

    // Inherit values from EmojiOne if they exist
    if (EMOJI_ONE[hexcode]) {
      const emojiOne = EMOJI_ONE[hexcode];

      extraEmoji.category = emojiOne.category;
      extraEmoji.order = emojiOne.order;

      // Pull in tags and strip spaces
      const tags = emojiOne.keywords
        .filter(kw => kw !== '')
        .map(kw => removeDiacritics(kw).replace(/ /g, '-').replace(/\.|“|”|’/g, ''));

      if (tags.length) {
        extraEmoji.tags = tags;
      }

      // Remove colons for a smaller filesize
      extraEmoji.shortnames = [emojiOne.shortname]
        .concat(emojiOne.shortname_alternates)
        .map(sn => sn.replace(/:/g, ''));

      // Delete the reference so we can infer what's not been used
      delete EMOJI_ONE[hexcode];
    }

    // Cache the merged values
    CACHE[cacheKey].push(extraEmoji);
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
