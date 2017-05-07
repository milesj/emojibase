/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable no-restricted-syntax */

import { SEQUENCE_REMOVAL_PATTERN } from './constants';

const BASE_HEXADECIMAL = 16;
const HEX_WIDTH = 4;

function padHex(string: string): string {
  let output = string;

  while (output.length < HEX_WIDTH) {
    output = `0${output}`;
  }

  return output;
}

export default function fromUnicodeToHex(unicode: string, strip: boolean = true): string {
  const hexcode = [];

  for (const codepoint of unicode) {
    const hex = codepoint.codePointAt(0).toString(BASE_HEXADECIMAL).toUpperCase();

    if (!strip || (strip && !hex.match(SEQUENCE_REMOVAL_PATTERN))) {
      hexcode.push(padHex(hex));
    }
  }

  return hexcode.join('-');
}
