/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fs from 'fs';
import path from 'path';
import log from './log';

const DATA_DUMP_FOLDER = path.resolve(__dirname, '../../packages/emojibase-data');

export default function writeDump(name: string, data: *) {
  const cachePath = path.join(DATA_DUMP_FOLDER, name);
  const parentDir = path.dirname(cachePath);

  if (!fs.existsSync(parentDir)) {
    fs.mkdirSync(parentDir);
  }

  fs.writeFileSync(
    cachePath,
    JSON.stringify(data, null, '  '), // Easier debugging
    'utf8',
  );

  log.info('dump', `Dumping ${name}`);
}
