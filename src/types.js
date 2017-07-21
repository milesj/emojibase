/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export type Format = 'expanded' | 'standard' | 'compact' | 'custom';

export type UnicodeNamesMap = { [hexcode: string]: string };

export type ParsedLine = {
  comment: string,
  fields: string[],
};
