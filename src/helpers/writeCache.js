/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import path from 'path';
import log from './log';
import writeFile from './writeFile';

const CACHE_FOLDER = path.resolve(__dirname, '../../cache');

export default function writeCache(name: string, data: *) {
  writeFile(
    CACHE_FOLDER,
    name,
    JSON.stringify(data, null, '  '), // Easier debugging
  );

  log.info('cache', `Caching ${name}`);
}
