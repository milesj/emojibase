#! /usr/bin/env node

const generateData = require('./lib/generators/generateData').default;
const generateRegex = require('./lib/generators/generateRegex').default;
const generateVersions = require('./lib/generators/generateVersions').default;

process.on('unhandledRejection', (error) => {
  console.error(error.stack);
});

Promise.resolve()
  .then(() => generateVersions())
  .then(() => generateData())
  .then(() => generateRegex())
  .catch((error) => {
    console.error(error);
  });
