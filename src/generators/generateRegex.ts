/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { Trie } from 'regexgen';
import { EMOTICON_OPTIONS } from '../../packages/core/src/constants';
import generateEmoticonPermutations from '../../packages/core/src/generateEmoticonPermutations';
import buildEmojiData from '../builders/buildEmojiData';
import log from '../helpers/log';
import writeRegex from '../helpers/writeRegex';
import filterData from '../helpers/filterData';
import flattenData from '../helpers/flattenData';
import toUnicode from './toUnicode';

function createRegexPattern(
  codePointGroups: any,
  display: string = 'both',
  unicode: boolean = false,
): string {
  const flags = unicode ? 'u' : '';
  const groups = Object.keys(codePointGroups);

  // Sort from largest to smallest, as we need to match
  // combination characters before base or single characters
  groups.sort((a, b) => Number(b) - Number(a));

  return groups.map(group => codePointGroups[group].toRegExp(flags).source).join('|');
}

function createEmojiRegex(data: Object, display: string = 'both') {
  const fileName = display === 'both' ? 'index' : display;
  const codePointGroups = {};

  // Push the unicode characters into the trie,
  // grouped by the number of codepoints
  const addCodePoint = hexcode => {
    if (!hexcode) {
      return;
    }

    const group = String(hexcode.split('-').length);

    if (!codePointGroups[group]) {
      codePointGroups[group] = new Trie();
    }

    codePointGroups[group].add(toUnicode(hexcode));
  };

  // Note: variation selectors are sometimes added to old emojis,
  // but we still need to support the old non-variation selector,
  // so include the unicode character that does not include FE0E/FE0F
  Object.keys(data).forEach(hexcode => {
    const { variations = {} } = data[hexcode];

    switch (display) {
      // Should contain everything
      default: {
        addCodePoint(hexcode);
        addCodePoint(variations.emoji);
        addCodePoint(variations.text);

        break;
      }

      // Should only contain emoji and no presentation
      case 'emoji': {
        if (variations.emoji) {
          addCodePoint(hexcode);
          addCodePoint(variations.emoji);
        } else if (!variations.text) {
          addCodePoint(hexcode);
        }

        break;
      }

      // Should only contain text presentation
      case 'text': {
        if (variations.text) {
          addCodePoint(hexcode);
          addCodePoint(variations.text);
        }

        break;
      }
    }
  });

  writeRegex(`${fileName}.js`, createRegexPattern(codePointGroups, display));
  writeRegex(`codepoint/${fileName}.js`, createRegexPattern(codePointGroups, display, true), 'u');
}

function createEmoticonRegex(data: Object) {
  const trie = new Trie();
  let emoticons = [];

  Object.keys(data).forEach(hexcode => {
    const { emoticon } = data[hexcode];

    if (emoticon) {
      emoticons.push(...generateEmoticonPermutations(emoticon, EMOTICON_OPTIONS[emoticon] || {}));
    }
  });

  // Remove duplicates
  emoticons = Array.from(new Set(emoticons));

  // Sort by longest first
  emoticons.sort((a, b) => b.length - a.length);

  // Add to trie and generate
  trie.addAll(emoticons);

  writeRegex('emoticon.js', trie.toRegExp().source);
}

export default async function generateRegex(): Promise<void> {
  log.title('regex', 'Generating regex patterns');

  const data = flattenData(filterData(await buildEmojiData()));

  createEmojiRegex(data, 'both');
  createEmojiRegex(data, 'emoji');
  createEmojiRegex(data, 'text');
  createEmoticonRegex(data);

  log.success('regex', 'Generated regex patterns');
}
