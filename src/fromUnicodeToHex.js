/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable no-restricted-syntax */

const JOINER_REGEX = /^200D|FE0F$/;

export default function fromUnicodeToHex(unicode: string, stripJoiners: boolean = true): string {
  const hexcode = [];

  for (const codepoint of unicode) {
    const hex = codepoint.codePointAt(0).toString(16).toUpperCase();

    if (!stripJoiners || (stripJoiners && !hex.match(JOINER_REGEX))) {
      hexcode.push(hex.padStart(4, '0'));
    }
  }

  return hexcode.join('-');
}
