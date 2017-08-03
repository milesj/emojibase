/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseAnnotations from '../parsers/parseAnnotations';
import { LATEST_CLDR_VERSION } from '../constants';

import type { CLDRAnnotationMap } from '../types';

export default function loadAnnotations(
  locale: string,
  version: string = LATEST_CLDR_VERSION,
): Promise<CLDRAnnotationMap> {
  const releaseVersion = version.replace(/\./g, '-');

  return fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/annotations/${locale}.xml`,
    `annotations-${locale}-${version}.json`,
    data => parseAnnotations(version, data),
  );
}
