/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import pick from 'lodash/pick';
import pickBy from 'lodash/pickBy';
import { EXPANDED, STANDARD, COMPACT, CUSTOM } from './constants';

import type { Format } from './types';

function isDefined(value: *): boolean {
  return (value !== null && typeof value !== 'undefined');
}

export default function extractSet(data: Object, format: Format, fields: string[] = []): Object {
  const { name, unicode, hexcode, codepoint, shortnames } = data;
  const [shortname] = shortnames;

  switch (format) {
    default:
    case EXPANDED:
      return pickBy(data, isDefined);

    case STANDARD:
      return pickBy({
        name,
        unicode,
        hexcode,
        codepoint,
        shortname,
      }, isDefined);

    case COMPACT:
      return pickBy({
        unicode,
        hexcode,
        shortname,
      }, isDefined);

    case CUSTOM:
      return pick(data, fields);
  }
}
