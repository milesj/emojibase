/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseNames from '../parsers/parseNames';
import { LATEST_UNICODE_VERSION } from '../constants';

import type { UnicodeNamesMap } from '../types';

export default function loadNames(version: string = LATEST_UNICODE_VERSION): UnicodeNamesMap {
  return fetchAndCache(
    `http://unicode.org/Public/${version}/ucd/UnicodeData.txt`,
    `unicode-names-${version}.json`,
    parseNames,
  );
}
