/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import path from 'path';

import type { EmoticonMap } from '../types';

export default function loadEmoticons(): Promise<EmoticonMap> {
  // eslint-disable-next-line
  return Promise.resolve(require(path.resolve(__dirname, '../resources/emoticons.js')));
}
