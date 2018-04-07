/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { LATEST_CLDR_VERSION } from '../../packages/core/src/constants';
import fetchAndCache from './fetchAndCache';
import parseLocalization from '../parsers/parseLocalization';
import formatLocale from '../helpers/formatLocale';
import { CLDRLocaleMap } from '../types';

const SUBDIVISION_FALLBACK_LOCALES = {
  'en-gb': 'en',
  'es-mx': 'es',
};

export default async function loadLocalization(
  locale: string,
  version: string = LATEST_CLDR_VERSION,
): Promise<CLDRLocaleMap> {
  const releaseVersion = version.replace(/\./g, '-');
  const pathLocale = formatLocale(locale);

  // Load territory names from main XML
  const territories = await fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/main/${pathLocale}.xml`,
    `messages-${locale}-${version}.json`,
    data => parseLocalization(version, data, 'territory'),
  );

  // Load subdivision names from subdivision XML
  const subdivisions = await fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/subdivisions/${SUBDIVISION_FALLBACK_LOCALES[
      locale
    ] || pathLocale}.xml`,
    `subdivisions-${locale}-${version}.json`,
    data => parseLocalization(version, data, 'subdivision'),
  );

  return Promise.resolve({
    subdivisions,
    territories,
  });
}
