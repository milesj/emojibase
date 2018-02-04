/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import log from '../helpers/log';

import type { ParsedTotals } from '../types';

export default function verifyTotals<T: Object>(version: string, data: T, totals: ParsedTotals): T {
  // v1.0 doesnt have totals
  if (version === '1.0') {
    return data;
  }

  const totalsToCheck = {};

  // Gather totals
  Object.values(data).forEach(emoji => {
    // $FlowIgnore
    emoji.property.forEach(property => {
      if (totalsToCheck[property]) {
        totalsToCheck[property] += 1;
      } else {
        totalsToCheck[property] = 1;
      }
    });
  });

  // Check totals
  Object.keys(totals).forEach(property => {
    if (property in totalsToCheck) {
      const expected = totals[property];
      const actual = totalsToCheck[property];

      if (actual !== expected) {
        log.error(
          'verify',
          `Invalid ${version} ${property} count detected. ` +
            `Expected ${expected}, found ${actual}`,
        );
      }
    }

    delete totalsToCheck[property];
  });

  // Check for unknowns
  Object.keys(totalsToCheck).forEach(property => {
    log.error('verify', `Unknown ${version} property ${property}`);
  });

  return data;
}
