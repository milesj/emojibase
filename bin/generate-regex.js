#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const regenerate = require('regenerate');
const generateData = require('../lib/generateData').default;

// If we separate each surrogate pair into a trie per code point,
// we can efficiently create nested groups and ranges.
const codePointGroups = {
  4: [regenerate(), regenerate(), regenerate(), regenerate()],
  3: [regenerate(), regenerate(), regenerate()],
  2: [regenerate(), regenerate()],
  1: [regenerate()],
};

console.log('Generating regex pattern');

generateData()
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
  })
  // Generate the regex pattern groups
  .then(() => {
    return [4, 3, 2, 1].map((group) => {
      const pattern = codePointGroups[group]
        .map(trie => ((group === 1) ? trie.toString() : `(?:${trie.toString()})`))
        .join('');

      return (group === 1) ? pattern : `(?:${pattern})`;
    });
  })
  // Join the groups, escape the asterisk emoj, and write the file
  .then((regex) => {
    fs.writeFile(
      path.join(__dirname, '../regex.js'),
      'module.exports = \'' + regex.join('|').replace('*', '\\*') + '\';',
      (error) => {
        if (error) {
          console.error(chalk.red('  regex.js failed to write'));
        } else {
          console.log(chalk.green('  regex.js created'));
        }
      }
    );
  });
