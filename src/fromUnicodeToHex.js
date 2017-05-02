/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable no-restricted-syntax */

import { SEQUENCE_REMOVAL_PATTERN } from './constants';

export default function fromUnicodeToHex(unicode: string, strip: boolean = true): string {
  const hexcode = [];

  for (const codepoint of unicode) {
    const hex = codepoint.codePointAt(0).toString(16).toUpperCase();

    if (!strip || (strip && !hex.match(SEQUENCE_REMOVAL_PATTERN))) {
      hexcode.push(hex.padStart(4, '0'));
    }
  }

  return hexcode.join('-');
}
