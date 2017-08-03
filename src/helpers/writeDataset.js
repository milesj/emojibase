/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import path from 'path';
import log from './log';
import writeFile from './writeFile';

const DATASET_FOLDER = path.resolve(__dirname, '../../packages/emojibase-data');

export default function writeDataset(name: string, data: *) {
  writeFile(
    DATASET_FOLDER,
    name,
    JSON.stringify(data, null, '  '), // Easier diffing
  );

  log.info('data', `Creating ${name} dataset`);
}
