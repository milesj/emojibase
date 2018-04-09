/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { SEQUENCE_REMOVAL_PATTERN } from './constants';
import { Hexcode, Unicode } from './types';

export default function fromUnicodeToHexcode(unicode: Unicode, strip: boolean = true): Hexcode {
  const hexcode: string[] = [];

  Array.from(unicode).forEach(codepoint => {
    // @ts-ignore
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
  });

  return hexcode.join('-');
}
