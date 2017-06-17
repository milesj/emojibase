/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { WS_PATTERN } from './constants';

const NON_ALNUM_CHARS: RegExp = /[^a-z0-9- ]+/g;
const UNNECESSARY_WORDS: RegExp = /(\b(and|because|but|for|if|in|or|of|the|when|with|without|sign)\b)/g;

export default function cleanName(name: string): string {
  let cleaned = name.toLowerCase().split(';')[0].replace(NON_ALNUM_CHARS, '');

  // Remove unnessary words
  cleaned = cleaned.replace(UNNECESSARY_WORDS, ' ');

  // Remove extra spaces
  cleaned = cleaned.replace(WS_PATTERN, ' ');

  return cleaned.trim();
}
