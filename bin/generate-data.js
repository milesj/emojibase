#! /usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const packageData = require('../lib/packageData').default;
const writeFile = require('../lib/bin/writeFile').default;
const mapKeyToKey = require('../lib/bin/mapKeyToKey').default;
const mapSet = require('../lib/bin/mapSet').default;
const mapSetIndexed = require('../lib/bin/mapSetIndexed').default;
const mapSetGrouped = require('../lib/bin/mapSetGrouped').default;
const constants = require('../lib/constants');

function createFilePath(name) {
  return path.join(__dirname, `../data/${name}`);
}

function generateFormat(rawData, format) {
  console.log(`Generating data for ${format} format`);

  return Promise.resolve(rawData)
    // Save file as a list
    .then(data => (
      writeFile(
        createFilePath(`${format}-list.json`),
        data,
        dump => mapSet(dump, format)
      )
    ))
    // Save file as a map
    .then(data => (
      writeFile(
        createFilePath(`${format}-map.json`),
        data,
        dump => mapSetIndexed(dump, 'hexcode', format)
      )
    ))
    // Save file by category
    .then(data => (
      writeFile(
        createFilePath(`${format}-by-category.json`),
        data,
        dump => mapSetGrouped(dump, 'category', format)
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
        dump => dump.map(row => row.hexcode)
      )
    ))
    // Save shortnames
    .then(data => (
      writeFile(
        createFilePath('extra/shortnames.json'),
        data,
        dump => dump.map(row => row.shortnames[0])
      )
    ))
    // Save unicodes
    .then(data => (
      writeFile(
        createFilePath('extra/unicode.json'),
        data,
        dump => dump.map(row => row.unicode)
      )
    ))
    // Save hexcode to shortname
    .then(data => (
      writeFile(
        createFilePath('extra/hexcode-to-shortname.json'),
        data,
        dump => mapKeyToKey(dump, 'hexcode', 'shortname')
      )
    ));
}

const data = packageData();

Promise.all([
  generateFormat(data, constants.EXPANDED),
  generateFormat(data, constants.STANDARD),
  generateFormat(data, constants.COMPACT),
  generateExtra(data),
])
  .then(() => {
    console.log(chalk.green('Data dumps generated successfully'));
  })
  .catch((error) => {
    console.log(chalk.red('Failed to generate data dumps'));
    console.log(chalk.gray(error.message));
  });
