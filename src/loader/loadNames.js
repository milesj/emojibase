/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseNames from '../parser/parseNames';
import { LATEST_UNICODE_VERSION } from '../constants';

export default function loadNames(version: string = LATEST_UNICODE_VERSION): Object {
  return fetchAndCache(
    `http://unicode.org/Public/${version}/ucd/UnicodeData.txt`,
    'unicode-names.json',
    parseNames,
  );
}
