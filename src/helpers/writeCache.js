/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fs from 'fs';
import path from 'path';
import log from './log';

const CACHE_FOLDER = path.resolve(__dirname, '../../cache');

export default function writeCache(name: string, data: *) {
  if (!fs.existsSync(CACHE_FOLDER)) {
    fs.mkdirSync(CACHE_FOLDER);
  }

  fs.writeFileSync(
    path.join(CACHE_FOLDER, name),
    JSON.stringify(data, null, '  '), // Easier debugging
    'utf8',
  );

  log.info('cache', `Writing ${name}`);
}
