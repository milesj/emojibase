#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const packageData = require('../lib/packageData').default;
const writeFile = require('../lib/bin/writeFile').default;
const mapSet = require('../lib/bin/mapSet').default;
const mapSetIndexed = require('../lib/bin/mapSetIndexed').default;
const mapSetGrouped = require('../lib/bin/mapSetGrouped').default;
const constants = require('../lib/constants');

function createFilePath(name) {
  return path.join(__dirname, `../data/${name}`);
}

Promise.all([
  constants.EXPANDED,
  constants.FULL,
  constants.STANDARD,
  constants.COMPACT,
].map((format) => {
  console.log(`Generating data for ${format} format`);

  return Promise.resolve(packageData())
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
}))
  .then(() => {
    console.log(chalk.green('Data dumps generated successfully'));
  })
  .catch((error) => {
    console.log(chalk.red('Failed to generate data dumps'));
    console.log(chalk.gray(error.message));
  });
