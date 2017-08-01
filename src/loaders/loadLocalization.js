/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseLocalization from '../parsers/parseLocalization';
import { LATEST_CLDR_VERSION } from '../constants';

import type { CLDRLocaleMap } from '../types';

export default function loadLocalization(
  locale: string,
  version: string = LATEST_CLDR_VERSION,
): CLDRLocaleMap {
  const releaseVersion = version.replace(/\./g, '-');

  return fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/main/${locale}.xml`,
    `locale-${locale}-${version}.json`,
    data => parseLocalization(version, data),
  );
}
