/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import { LATEST_CLDR_VERSION } from '../../packages/emojibase/lib/constants';
import fetchAndCache from './fetchAndCache';
import parseAnnotations from '../parsers/parseAnnotations';
import formatLocale from '../helpers/formatLocale';

import type { CLDRAnnotationMap } from '../types';

export default function loadAnnotations(
  locale: string,
  derived: boolean = false, // Contains modifiers and sequences
  version: string = LATEST_CLDR_VERSION,
): Promise<CLDRAnnotationMap> {
  const releaseVersion = version.replace(/\./g, '-');
  const folderName = derived ? 'annotationsDerived' : 'annotations';
  const pathLocale = formatLocale(locale);

  return fetchAndCache(
    `http://unicode.org/repos/cldr/tags/release-${releaseVersion}/common/${folderName}/${pathLocale}.xml`,
    `${folderName}-${locale}-${version}.json`,
    data => parseAnnotations(version, data),
  );
}
