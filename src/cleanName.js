/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

const CLEAN_PATTERN = /(\b(and|because|but|for|if|in|or|of|the|when|with|without|sign)\b)/g;

export default function cleanName(name: string): string {
  let cleaned = name.toLowerCase().split(';')[0].replace(/[^a-z0-9- ]+/g, '');

  // Remove unnessary words
  cleaned = cleaned.replace(CLEAN_PATTERN, ' ');

  // Remove extra spaces
  cleaned = cleaned.replace(/\s+/g, ' ');

  return cleaned.trim();
}
