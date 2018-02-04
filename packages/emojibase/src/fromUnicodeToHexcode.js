/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable no-restricted-syntax */

import { SEQUENCE_REMOVAL_PATTERN } from './constants';

export default function fromUnicodeToHexcode(unicode: string, strip?: boolean = true): string {
  const hexcode = [];

  for (const codepoint of unicode) {
    let hex = codepoint
      .codePointAt(0)
      .toString(16)
      .toUpperCase();

    while (hex.length < 4) {
      hex = `0${hex}`;
    }

    if (!strip || (strip && !hex.match(SEQUENCE_REMOVAL_PATTERN))) {
      hexcode.push(hex);
    }
  }

  return hexcode.join('-');
}
