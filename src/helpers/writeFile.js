/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fs from 'fs';
import path from 'path';

export default function writeFile(targetFolder: string, fileName: string, data: *) {
  const filePath = path.resolve(targetFolder, fileName);
  const parentFolder = path.dirname(filePath);

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  if (!fs.existsSync(parentFolder)) {
    fs.mkdirSync(parentFolder);
  }

  fs.writeFileSync(filePath, data, 'utf8');
}
