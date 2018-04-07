/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { LATEST_UNICODE_VERSION } from '../../packages/core/src/constants';
import fetchAndCache from './fetchAndCache';
import parseNames from '../parsers/parseNames';
import { UnicodeNamesMap } from '../types';

export default function loadNames(
  version: string = LATEST_UNICODE_VERSION,
): Promise<UnicodeNamesMap> {
  return fetchAndCache(
    `http://unicode.org/Public/${version}/ucd/UnicodeData.txt`,
    `unicode-names-${version}.json`,
    parseNames,
  );
}
