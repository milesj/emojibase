import log from '../helpers/log';
import { ParsedTotals } from '../types';

export default function verifyTotals<T>(
  type: string,
  version: string,
  data: T,
  totals: ParsedTotals,
): T {
  // v1.0 doesnt have totals
  if (version === '1.0') {
    return data;
  }

  const totalsToCheck: { [key: string]: number } = {};

  // Gather totals
  // eslint-disable-next-line compat/compat
  Object.values(data).forEach(emoji => {
    emoji.property.forEach((property: string) => {
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
    log.error('verify', `Unknown ${version} ${type} property ${property}`);
  });

  return data;
}
