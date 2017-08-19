/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { FinalEmoji } from '../../../src/types';

export default function fetchFromCDN(
  path: string,
  version?: string = 'latest',
  options?: Object = {},
): Promise<FinalEmoji[]> {
  if (__DEV__) {
    if (!path || path.slice(-5) !== '.json') {
      throw new Error('A valid JSON dataset is required to fetch.');
    }

    if (!version) {
      throw new Error('A valid release version is required.');
    }
  }

  const cacheKey = `emojibase/${version}/${path}`;
  const cachedData = sessionStorage.getItem(cacheKey);

  // Check the cache first
  if (cachedData) {
    return Promise.resolve(JSON.parse(cachedData));
  }

  return fetch(`https://cdn.jsdelivr.net/npm/emojibase-data@${version}/${path}`, {
    mode: 'cors',
    redirect: 'error',
    credentials: 'omit',
    ...options,
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to load emojibase dataset.');
    }

    return response.json();
  }).then((data) => {
    try {
      sessionStorage.setItem(cacheKey, JSON.stringify(data));
    } catch (error) {
      // Do not allow quota errors to break the app
    }

    return data;
  });
}
