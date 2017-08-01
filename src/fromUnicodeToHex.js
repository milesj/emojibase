/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable no-restricted-syntax */

const JOINER_HEXCODE_PATTERN: RegExp = /200D|FE0E|FE0F/;
const BASE_HEXADECIMAL: number = 16;
const HEX_WIDTH: number = 4;

export default function fromUnicodeToHex(unicode: string, strip: boolean = true): string {
  const hexcode = [];

  for (const codepoint of unicode) {
    let hex = codepoint.codePointAt(0).toString(BASE_HEXADECIMAL).toUpperCase();

    while (hex.length < HEX_WIDTH) {
      hex = `0${hex}`;
    }

    if (!strip || (strip && !hex.match(JOINER_HEXCODE_PATTERN))) {
      hexcode.push(hex);
    }
  }

  return hexcode.join('-');
}
