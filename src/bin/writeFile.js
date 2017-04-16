/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

type DataDump = Object | Object[];

export default function writeFile(
  filePath: string,
  data: DataDump,
  callback: (data: DataDump) => DataDump,
): DataDump {
  return new Promise((resolve: *, reject: *) => {
    const fileName = path.basename(filePath);

    fs.writeFile(filePath, JSON.stringify(callback(data)), (error: Error) => {
      if (error) {
        console.error(`  ${chalk.red('✖')} ${chalk.gray(fileName)}`);
        reject(error);
      } else {
        console.log(`  ${chalk.green('✔')} ${chalk.gray(fileName)}`);
        resolve(data);
      }
    });
  });
}
