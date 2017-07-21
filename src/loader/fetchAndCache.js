/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fs from 'fs';
import path from 'path';
import 'isomorphic-fetch';

const CACHE_FOLDER: string = path.resolve(__dirname, '../../cache');

export default async function fetchAndCache<T>(
  url: string,
  name: string,
  parser: (text: string) => T,
): T {
  const cachePath = path.join(CACHE_FOLDER, name);

  if (fs.existsSync(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  const text = await fetch(url).then(response => response.text());
  const data = parser(text);

  // Cache the parsed response
  fs.writeFileSync(cachePath, JSON.stringify(data), 'utf8');

  return data;
}
