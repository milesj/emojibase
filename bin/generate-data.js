#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const keyBy = require('lodash/keyBy');
const generateData = require('../lib/generateData').default;
const extractSet = require('../lib/extractSet').default;
const constants = require('../lib/constants');

function writeFile(filename, data) {
  fs.writeFile(
    path.join(__dirname, '../data/' + filename),
    JSON.stringify(data),
    (error) => {
      if (error) {
        console.error(chalk.red('  ' + filename + ' failed to write'));
      } else {
        console.log(chalk.green('  ' + filename + ' created'));
      }
    }
  );

  return data;
}

function getAndRemoveKey(keyName) {
  return (data) => {
    const key = data[keyName];

    delete data[keyName];

    return key;
  };
}

[
  constants.EXPANDED,
  constants.FULL,
  constants.STANDARD,
  constants.COMPACT,
].forEach((format) => {
  console.log('Generating ' + format + ' datasets');

  generateData()
    // Extract a set
    .then(data => data.map(row => extractSet(row, format)))
    // Save file as array
    .then(data => writeFile(format + '-list.json', data))
    // Save file as map
    .then(data => writeFile(format + '-map.json', keyBy(data, getAndRemoveKey('hexcode'))));
});
