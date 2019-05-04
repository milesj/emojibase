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
    if (emoticon.includes('/')) {
      list.push(...generateEmoticonPermutations(emoticon.replace('/', '\\'), options));
    }

    // Bracket and curly brace mouth variants
    if (emoticon.includes(')')) {
      list.push(...generateEmoticonPermutations(emoticon.replace(')', ']'), options));
      list.push(...generateEmoticonPermutations(emoticon.replace(')', '}'), options));
    }

    if (emoticon.includes('(')) {
      list.push(...generateEmoticonPermutations(emoticon.replace('(', '['), options));
      list.push(...generateEmoticonPermutations(emoticon.replace('(', '{'), options));
    }

    // Eye variant
    if (emoticon.includes(':')) {
      list.push(...generateEmoticonPermutations(emoticon.replace(':', '='), options));
    }

    // Nose variant for ALL
    if (withNose) {
      list.forEach(emo => {
        if (!emo.includes('-')) {
          list.push(`${emo.slice(0, emo.length - 1)}-${emo.slice(-1)}`);
        }
      });
    }
  }

  // Sort from longest to shortest
  list.sort((a, b) => b.length - a.length);

  return Array.from(new Set(list));
}
