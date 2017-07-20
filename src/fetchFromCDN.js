/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function fetchFromCDN(dataset: string, version: string = '0.9.0'): Promise<*> {
  if (__DEV__) {
    // eslint-disable-next-line
    if (!dataset || dataset.slice(-5) !== '.json') {
      throw new Error('A valid JSON dataset is required to fetch.');
    }

    if (!version) {
      throw new Error('A valid release version is required.');
    }
  }

  return fetch(`https://cdn.jsdelivr.net/npm/emoji-database@${version}/data/${dataset}`, {
    mode: 'cors',
    redirect: 'error',
    credentials: 'omit',
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Failed to load emoji-database dataset.');
  });
}
