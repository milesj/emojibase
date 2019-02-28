#! /usr/bin/env node
/* eslint-disable */

const regeneratorRuntime = require('regenerator-runtime');
const generateData = require('../packages/generator/lib/generators/generateData').default;
const generateRegex = require('../packages/generator/lib/generators/generateRegex').default;
const generateVersions = require('../packages/generator/lib/generators/generateVersions').default;

function handleError(error) {
  console.error(error.message, error.stack);
}

global.regeneratorRuntime = regeneratorRuntime;

process.on('unhandledRejection', handleError);

Promise.resolve()
  .then(() => generateVersions())
  .then(() => generateData())
  .then(() => generateRegex())
  .catch(handleError);
