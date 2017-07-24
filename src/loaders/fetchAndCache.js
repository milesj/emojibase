/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import 'isomorphic-fetch';
import fs from 'fs';
import path from 'path';
import log from '../helpers/log';

const CACHE_FOLDER: string = path.resolve(__dirname, '../../cache');

export default async function fetchAndCache<T>(
  url: string,
  name: string,
  parser: (text: string) => T,
): T {
  log.info('load', `Loading ${name} data from ${url}`);

  const cachePath = path.join(CACHE_FOLDER, name);

  if (fs.existsSync(cachePath)) {
    // log.success('load', `Using ${name} cached data`);

    // return JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  // Parse the response
  const text = await fetch(url)
    .then(response => response.text())
    .catch((error) => {
      log.error('load', `Failed to fetch ${name}: ${error.message}`);

      throw error;
    });

  const data = parser(text);

  // Cache the data
  fs.writeFileSync(cachePath, JSON.stringify(data), 'utf8');

  log.success('load', `Fetched and cached ${name}`);

  return data;
}
