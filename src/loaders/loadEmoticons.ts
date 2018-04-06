/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import path from 'path';
import { EmoticonMap } from '../types';

export default function loadEmoticons(): Promise<EmoticonMap> {
  // eslint-disable-next-lines
  return Promise.resolve(require(path.resolve(__dirname, '../resources/emoticons.js')));
}
