import { LATEST_CLDR_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseLocalization from '../parsers/parseLocalization';
import formatLocale from '../helpers/formatLocale';
import { CLDRLocaleMap } from '../types';

const SUBDIVISION_FALLBACK_LOCALES: { [key: string]: string } = {
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
  const territoryPromise = fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/main/${pathLocale}.xml`,
    `cldr-${releaseVersion}/messages-${locale}.json`,
    data => parseLocalization(version, data, 'territory'),
  );

  // Load subdivision names from subdivision XML
  const subdivisionPromise = fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/subdivisions/${SUBDIVISION_FALLBACK_LOCALES[
      locale
    ] || pathLocale}.xml`,
    `cldr-${releaseVersion}/subdivisions-${locale}.json`,
    data => parseLocalization(version, data, 'subdivision'),
  );

  return Promise.all([subdivisionPromise, territoryPromise]).then(
    ([subdivisions, territories]) => ({
      subdivisions,
      territories,
    }),
  );
}
