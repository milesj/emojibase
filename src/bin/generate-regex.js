#! /usr/bin/env node
/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */
/* eslint-disable no-magic-numbers */

import path from 'path';
import chalk from 'chalk';
import { Trie } from 'regexgen';
import packageData from '../packageData';
import writeFile from './helpers/writeFile';

// If we separate each surrogate pair into a trie,
// we can efficiently create nested groups and ranges.
const codePointGroups = {
  4: new Trie(),
  3: new Trie(),
  2: new Trie(),
  1: new Trie(),
};

console.log('Generating regex pattern');

Promise.resolve(packageData())
  // Extract the codepoints from the data set
  .then((data) => {
    data.forEach((emoji) => {
      const group = emoji.codepoint.length;

      if (group <= 0 || group > 4) {
        return;
      }

      codePointGroups[group].add(emoji.unicode);
    });

    return data;
  })
  // Generate the regex pattern groups
  .then(() => (
    [4, 3, 2, 1].map(group => `(?:${codePointGroups[group].toRegExp().source})`).join('|')
  ))
  // Join the groups, escape the asterisk emoj, and write the file
  .then(regex => (
    writeFile(
      path.join(__dirname, '../../regex/index.js'),
      regex,
      pattern => `module.exports = /${pattern}/;\n`,
      false,
    )
  ))
  // Create a shortname regex also
  .then(() => (
    writeFile(
      path.join(__dirname, '../../regex/shortname.js'),
      ':[-+\\w]+:',
      pattern => `module.exports = /${pattern}/;\n`,
      false,
    )
  ))
  .then(() => {
    console.log(chalk.green('Regex generated successfully'));
  })
  .catch((error) => {
    console.log(chalk.red('Failed to generate regex pattern'));
    console.log(chalk.gray(error.message));
  });
