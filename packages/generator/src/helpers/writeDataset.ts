/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import path from 'path';
import log from './log';
import writeFile from './writeFile';

const DATASET_FOLDER = path.resolve(__dirname, '../../../data');

export default function writeDataset(name: string, data: any, minify: boolean = false) {
  writeFile(DATASET_FOLDER, name, minify ? JSON.stringify(data) : JSON.stringify(data, null, '  '));

  log.info('data', `Creating ${name} dataset`);
}
