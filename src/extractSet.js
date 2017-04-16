/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import cloneDeep from 'lodash/cloneDeep';
import pick from 'lodash/pick';
import { EXPANDED, FULL, STANDARD, COMPACT, CUSTOM } from './constants';

import type { Format } from './types';

export default function extractSet(data: Object, format: Format, fields: string[] = []): Object {
  const { name, hexcode, unicode, codepoint, shortnames, keywords, category } = data;
  const [shortname] = shortnames;

  switch (format) {
    default:
    case EXPANDED:
      return cloneDeep(data);

    case FULL:
      return cloneDeep({
        name,
        hexcode,
        unicode,
        codepoint,
        shortnames,
        keywords,
        category,
      });

    case STANDARD:
      return cloneDeep({
        name,
        hexcode,
        codepoint,
        shortname,
      });

    case COMPACT:
      return cloneDeep({
        hexcode,
        shortname,
      });

    case CUSTOM:
      return cloneDeep(pick(data, fields));
  }
}
