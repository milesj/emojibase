/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { LATEST_CLDR_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseAnnotations from '../parsers/parseAnnotations';
import formatLocale from '../helpers/formatLocale';
import { CLDRAnnotationMap } from '../types';

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
