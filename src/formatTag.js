/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { remove as removeDiacritics } from 'diacritics';

export default function formatTag(tag: string): string {
  return removeDiacritics(tag).replace(/[ \s]+/g, '-').replace(/\.|“|”|’/g, '');
}
