/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import path from 'path';
import log from './log';
import writeFile from './writeFile';

const REGEX_FOLDER = path.resolve(__dirname, '../../regex');

export default function writeRegex(name: string, pattern: any, flags: string = '') {
  writeFile(REGEX_FOLDER, name, `module.exports = /${pattern}/${flags};\n`);

  log.info('regex', `Creating ${name} regex pattern`);
}
