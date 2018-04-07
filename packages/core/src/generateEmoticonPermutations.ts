/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { Emoticon } from './types';

export interface PermutationOptions {
  isFace?: boolean;
  withNose?: boolean;
}

export default function generateEmoticonPermutations(
  emoticon: Emoticon,
  options: PermutationOptions = {},
): Emoticon[] {
  const { isFace = true, withNose = true } = options;
  const list = [emoticon];

  // Uppercase variant
  if (emoticon.toUpperCase() !== emoticon) {
    list.push(...generateEmoticonPermutations(emoticon.toUpperCase(), options));
  }

  if (isFace) {
    // Backwards slash mouth variant
    if (emoticon.indexOf('/') >= 0) {
      list.push(...generateEmoticonPermutations(emoticon.replace('/', '\\'), options));
    }

    // Bracket and curly brace mouth variants
    if (emoticon.indexOf(')') >= 0) {
      list.push(...generateEmoticonPermutations(emoticon.replace(')', ']'), options));
      list.push(...generateEmoticonPermutations(emoticon.replace(')', '}'), options));
    }

    if (emoticon.indexOf('(') >= 0) {
      list.push(...generateEmoticonPermutations(emoticon.replace('(', '['), options));
      list.push(...generateEmoticonPermutations(emoticon.replace('(', '{'), options));
    }

    // Eye variant
    if (emoticon.indexOf(':') >= 0) {
      list.push(...generateEmoticonPermutations(emoticon.replace(':', '='), options));
    }

    // Nose variant for ALL
    if (withNose) {
      list.forEach(emo => {
        if (emo.indexOf('-') === -1) {
          list.push(`${emo.slice(0, emo.length - 1)}-${emo.slice(-1)}`);
        }
      });
    }
  }

  // Sort from longest to shortest
  list.sort((a, b) => b.length - a.length);

  return Array.from(new Set(list));
}
