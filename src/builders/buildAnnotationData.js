/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import log from '../helpers/log';
import loadAnnotations from '../loaders/loadAnnotations';
import { SUPPORTED_LOCALES } from '../constants';

import type { EmojiAnnotationMap } from '../types';

export default async function buildAnnotationData(): { [locale: string]: EmojiAnnotationMap } {
  log.title('build', 'Building localized annotation data');

  const annotations = {};

  SUPPORTED_LOCALES.forEach(async (locale) => {
    annotations[locale] = await loadAnnotations(locale);
  });

  log.success('build', 'Built localized annotation data');

  return annotations;
}
