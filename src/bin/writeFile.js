/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export default function writeFile(filePath: string, data: Object | Object[]): Object | Object[] {
  return new Promise((resolve: *, reject: *) => {
    const fileName = path.basename(filePath);

    fs.writeFile(
      filePath,
      JSON.stringify(data),
      (error: Error) => {
        if (error) {
          console.error(chalk.red(`${fileName} failed to write`));
          reject(error);
        } else {
          console.log(chalk.green(`${fileName} created`));
          resolve(data);
        }
      },
    );
  });
}
