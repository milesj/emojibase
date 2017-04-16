/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import packageData from './packageData';
import extractSet from './extractSet';
import { EXPANDED, FULL, STANDARD, COMPACT, CUSTOM } from './constants';

if (process.env.NODE_ENV !== 'development') {
  console.warn('emoji-database should only be used in development to generate data.');
  console.warn('Please use the provided data dumps, or generate your own using these tools.');
}

export { packageData, extractSet, EXPANDED, FULL, STANDARD, COMPACT, CUSTOM };
