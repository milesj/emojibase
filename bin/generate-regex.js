#! /usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const regenerate = require('regenerate');
const packageData = require('../lib/packageData').default;
const writeFile = require('../lib/bin/writeFile').default;

// If we separate each surrogate pair into a trie per code point,
// we can efficiently create nested groups and ranges.
const codePointGroups = {
  4: [regenerate(), regenerate(), regenerate(), regenerate()],
  3: [regenerate(), regenerate(), regenerate()],
  2: [regenerate(), regenerate()],
  1: [regenerate()],
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

      emoji.codepoint.forEach((codePoint, i) => {
        codePointGroups[group][i].add(String.fromCodePoint(codePoint));
      });
    });

    return data;
  })
  // Generate the regex pattern groups
  .then(() => (
    [4, 3, 2, 1].map((group) => {
      const pattern = codePointGroups[group]
        .map(trie => `(?:${trie.toString()})`)
        .join('');

      return (group === 1) ? pattern : `(?:${pattern})`;
    })
  ))
  // Join the groups, escape the asterisk emoj, and write the file
  .then(regex => (
    writeFile(
      path.join(__dirname, '../regex.js'),
      regex.join('|').replace('*', '\\*'),
      pattern => `module.exports = '(${pattern})';\n`,
      false
    )
  ))
  .then(() => {
    console.log(chalk.green('Regex generated successfully'));
  })
  .catch((error) => {
    console.log(chalk.red('Failed to generate regex pattern'));
    console.log(chalk.gray(error.message));
  });
