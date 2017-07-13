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

function generateRegex(rawData, display, unicode = false) {
  if (unicode) {
    console.log(`Generating unicode aware ${display} regex pattern`);
  } else {
    console.log(`Generating ${display} regex pattern`);
  }

  const flags = unicode ? 'u' : '';
  const fileName = (display === 'both') ? 'index' : display;
  const codePointGroups = {
    4: new Trie(),
    3: new Trie(),
    2: new Trie(),
    1: new Trie(),
  };

  return Promise.resolve(rawData)
    // Extract the codepoints from the data set
    .then((data) => {
      data.forEach((emoji) => {
        const group = emoji.codepoint.length;

        if (group <= 0 || group > 4) {
          return;
        }

        if (emoji.emoji && (display === 'emoji' || display === 'both')) {
          codePointGroups[group].add(emoji.emoji);
        }

        if (emoji.text && (display === 'text' || display === 'both')) {
          codePointGroups[group].add(emoji.text);
        }
      });

      return codePointGroups;
    })
    // Generate the regex pattern groups
    .then((groups) => {
      if (display === 'text') {
        return groups[1].toRegExp(flags).source;
      }

      return [4, 3, 2, 1].map(group => `(?:${groups[group].toRegExp(flags).source})`).join('|');
    })
    // Save file
    .then(regex => (
      writeFile(
        path.join(__dirname, `../../regex/${unicode ? 'es/' : ''}${fileName}.js`),
        regex,
        pattern => `module.exports = /${pattern}/;\n`,
        false,
      )
    ));
}

function generateExtra(rawData) {
  console.log('Generating shortnames regex pattern');

  return Promise.resolve(rawData)
    // Save hexcodes
    .then(data => (
      writeFile(
        path.join(__dirname, '../../regex/shortname.js'),
        ':[-+\\w]+:',
        pattern => `module.exports = /${pattern}/;\n`,
        false,
      )
    ));
}

// Package the data
const data = packageData();

Promise.all([
  generateRegex(data, 'both'),
  generateRegex(data, 'both', true),
  generateRegex(data, 'emoji'),
  generateRegex(data, 'emoji', true),
  generateRegex(data, 'text'),
  generateRegex(data, 'text', true),
  generateExtra(data),
])
  .then(() => {
    console.log(chalk.green('Regex generated successfully'));
  })
  .catch((error) => {
    console.log(chalk.red('Failed to generate regex pattern'));
    console.log(chalk.gray(error.message));
  });
