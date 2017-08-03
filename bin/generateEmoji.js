#! /usr/bin/env node

const generateData = require('../lib/generators/generateData').default;
const generateRegex = require('../lib/generators/generateRegex').default;
const generateVersions = require('../lib/generators/generateVersions').default;

function handleError(error) {
  console.log(error.message, error.stack);
}

process.on('unhandledRejection', handleError);

Promise.resolve()
  .then(() => generateVersions())
  .then(() => generateData())
  .then(() => generateRegex())
  .catch(handleError);
