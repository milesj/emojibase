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
  let text = '';

  if (fs.existsSync(cachePath)) {
    // log.success('load', `Using ${name} cached data`);

    // return JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  // Parse the response
  try {
    text = await fetch(url).then((response) => {
      if (response.ok) {
        return response.text();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    });
  } catch (error) {
    log.error('load', `Failed to fetch ${url}: ${error.message}`);

    return {};
  }

  const data = parser(text);

  // Cache the data
  fs.writeFileSync(cachePath, JSON.stringify(data), 'utf8');

  log.success('load', `Fetched and cached ${name}`);

  return data;
}
