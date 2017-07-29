/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fs from 'fs';
import path from 'path';
import log from './log';

export default function writeCache(name: string, data: *) {
  fs.writeFileSync(
    path.resolve(__dirname, '../../cache', name),
    JSON.stringify(data, null, '  '), // Easier debugging
    'utf8',
  );

  log.info('cache', `Writing ${name}`);
}
