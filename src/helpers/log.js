/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */
/* eslint-disable no-console */

import chalk from 'chalk';

export default {
  log(type: string, message: string) {
    console.log(chalk.gray(`[${type}]`.padEnd(8, ' ')), message);
  },

  info(type: string, message: string) {
    this.log(type, message);
  },

  title(type: string, message: string) {
    this.log(type, chalk.cyan(message));
  },

  success(type: string, message: string) {
    this.log(type, chalk.green(`✔ ${message}`));
  },

  error(type: string, message: string) {
    this.log(type, chalk.red(`✖ ${message}`));
  },
};
