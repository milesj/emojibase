#! /usr/bin/env node
/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import path from 'path';
import chalk from 'chalk';
import packageData, { EMOJI_ONE } from '../packageData';
import { EXPANDED, STANDARD, COMPACT } from '../constants';
import mapKeyToKey from './helpers/mapKeyToKey';
import mapSet from './helpers/mapSet';
import mapSetIndexed from './helpers/mapSetIndexed';
import mapSetGrouped from './helpers/mapSetGrouped';
import writeFile from './helpers/writeFile';

function createFilePath(name) {
  return path.join(__dirname, `../../data/${name}`);
}

function generateFormat(rawData, format) {
  console.log(`Generating data for ${format} format`);

  return Promise.resolve(rawData)
    // Save file as a list
    .then(data => (
      writeFile(
        createFilePath(`${format}/list.json`),
        data,
        dump => mapSet(dump, format),
      )
    ))
    // Save file as a map
    .then(data => (
      writeFile(
        createFilePath(`${format}/map.json`),
        data,
        dump => mapSetIndexed(dump, 'hexcode', format),
      )
    ))
    // Save file by category
    .then(data => (
      writeFile(
        createFilePath(`${format}/by-category.json`),
        data,
        dump => mapSetGrouped(dump, 'category', format),
      )
    ));
}

function generateExtra(rawData) {
  console.log('Generating extra data');

  return Promise.resolve(rawData)
    // Save hexcodes
    .then(data => (
      writeFile(
        createFilePath('extra/hexcodes.json'),
        data,
        dump => dump.map(row => row.hexcode),
      )
    ))
    // Save shortnames
    .then(data => (
      writeFile(
        createFilePath('extra/shortnames.json'),
        data,
        dump => dump.map(row => row.shortnames[0]),
      )
    ))
    // Save unicodes
    .then(data => (
      writeFile(
        createFilePath('extra/unicode.json'),
        data,
        dump => dump.map(row => row.unicode),
      )
    ))
    // Save hexcode to shortname
    .then(data => (
      writeFile(
        createFilePath('extra/hexcode-to-shortname.json'),
        data,
        dump => mapKeyToKey(dump, 'hexcode', 'shortname'),
      )
    ))
    // Save shortname to unicode
    .then(data => (
      writeFile(
        createFilePath('extra/shortname-to-unicode.json'),
        data,
        dump => mapKeyToKey(dump, 'shortname', 'unicode'),
      )
    ));
}

// Package the data
const data = packageData();

// Verify all of EmojiOne has been used
const remainingEmojiOnes = Object.values(EMOJI_ONE);

if (remainingEmojiOnes.length > 0) {
  console.log(chalk.yellow('Not all EmojiOne definitions have been used!'));

  remainingEmojiOnes.forEach((emoji) => {
    console.log(chalk.gray(`  ${emoji.name}`));
  });
}

Promise.all([
  generateFormat(data, EXPANDED),
  generateFormat(data, STANDARD),
  generateFormat(data, COMPACT),
  generateExtra(data),
])
  .then(() => {
    console.log(chalk.green('Data dumps generated successfully'));
  })
  .catch((error) => {
    console.log(chalk.red('Failed to generate data dumps'));
    console.log(chalk.gray(error.message));
  });
