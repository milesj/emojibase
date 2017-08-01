/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import buildData from '../builders/buildEmojiData';
import buildAnnotationData from '../builders/buildAnnotationData';
import { SUPPORTED_LOCALES } from '../constants';

export default function generateData() {
  SUPPORTED_LOCALES.forEach(async (locale) => {
    await buildAnnotationData(locale);
  });
}
