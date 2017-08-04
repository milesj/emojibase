/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import path from 'path';

import type { ShortcodeMap } from '../types';

export default function loadShortcodes(): Promise<ShortcodeMap> {
  // eslint-disable-next-line
  return Promise.resolve(require(path.resolve(__dirname, '../resources/shortcodes.js')));
}
