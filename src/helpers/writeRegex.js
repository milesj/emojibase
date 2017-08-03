/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import path from 'path';
import log from './log';
import writeFile from './writeFile';

const REGEX_FOLDER = path.resolve(__dirname, '../../packages/emojibase-regex');

export default function writeRegex(name: string, pattern: *) {
  writeFile(
    REGEX_FOLDER,
    name,
    `module.exports = /${pattern}/;\n`,
  );

  log.info('regex', `Creating ${name} regex pattern`);
}
