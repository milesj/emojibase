/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import pick from 'lodash/pick';
import { EXPANDED, FULL, STANDARD, COMPACT, CUSTOM } from './constants';

export default function extractSet(data: Object, format: string, fields: string[] = []): Object {
  const { name, hexcode, unicode, codepoint, shortnames, keywords, category } = data;
  const [shortname] = shortnames;

  switch (format) {
    default:
    case EXPANDED:
      return {
        ...data,
      };

    case FULL:
      return {
        name,
        hexcode,
        unicode,
        codepoint,
        shortnames,
        keywords,
        category,
      };

    case STANDARD:
      return {
        name,
        hexcode,
        codepoint,
        shortname,
      };

    case COMPACT:
      return {
        hexcode,
        shortname,
      };

    case CUSTOM:
      return pick(data, fields);
  }
}
