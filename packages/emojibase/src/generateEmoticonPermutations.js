/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function generateEmoticonPermutations(
  emoticon: string,
  withNose?: boolean = true,
): string[] {
  const list = [emoticon];

  // Uppercase variant
  if (emoticon.toUpperCase() !== emoticon) {
    list.push(...generateEmoticonPermutations(emoticon.toUpperCase(), withNose));
  }

  // Backwards slash variant
  if (emoticon.indexOf('/') >= 0) {
    list.push(...generateEmoticonPermutations(emoticon.replace('/', '\\'), withNose));
  }

  // Bracket and curly brace smile variants
  if (emoticon.indexOf(')') >= 0) {
    list.push(...generateEmoticonPermutations(emoticon.replace(')', ']'), withNose));
    list.push(...generateEmoticonPermutations(emoticon.replace(')', '}'), withNose));
  }

  if (emoticon.indexOf('(') >= 0) {
    list.push(...generateEmoticonPermutations(emoticon.replace('(', '['), withNose));
    list.push(...generateEmoticonPermutations(emoticon.replace('(', '{'), withNose));
  }

  // Eye variant
  if (emoticon.indexOf(':') >= 0) {
    list.push(...generateEmoticonPermutations(emoticon.replace(':', '='), withNose));
  }

  // Nose variant for ALL
  if (withNose) {
    list.forEach((emo) => {
      if (emo.indexOf('-') === -1) {
        list.push(`${emo.slice(0, emo.length - 1)}-${emo.slice(-1)}`);
      }
    });
  }

  // Sort from longest to shortest
  list.sort((a, b) => b.length - a.length);

  return Array.from(new Set(list));
}
