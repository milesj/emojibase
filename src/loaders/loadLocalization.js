/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseLocalization from '../parsers/parseLocalization';
import { LATEST_CLDR_VERSION } from '../constants';

import type { CLDRLocaleMap } from '../types';

export default async function loadLocalization(
  locale: string,
  version: string = LATEST_CLDR_VERSION,
): Promise<CLDRLocaleMap> {
  const releaseVersion = version.replace(/\./g, '-');

  // Load territory names from main XML
  const territories = await fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/main/${locale}.xml`,
    `messages-${locale}-${version}.json`,
    data => parseLocalization(version, data, 'territory'),
  );

  // Load subdivision names from subdivision XML
  const subdivisions = await fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/subdivisions/${locale}.xml`,
    `subdivisions-${locale}-${version}.json`,
    data => parseLocalization(version, data, 'subdivision'),
  );

  return Promise.resolve({
    subdivisions,
    territories,
  });
}
