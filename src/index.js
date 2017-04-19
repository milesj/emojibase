/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import packageData from './packageData';
import extractSet from './extractSet';
import toCodepoint from './toCodepoint';
import { EXPANDED, STANDARD, COMPACT, CUSTOM } from './constants';

if (process.env.NODE_ENV !== 'development') {
  console.warn('emoji-database should only be used to generate data in development.');
  console.warn('Please use the provided datasets, or generate your own using these tools.');
}

export { packageData, extractSet, toCodepoint, EXPANDED, STANDARD, COMPACT, CUSTOM };
