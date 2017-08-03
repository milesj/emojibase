const generateData = require('./lib/generators/generateData').default;
const generateVersions = require('./lib/generators/generateVersions').default;

process.on('unhandledRejection', (error) => {
  console.error(error.stack);
});

Promise.resolve()
  .then(() => generateVersions())
  .then(() => generateData())
  .catch((error) => {
    console.error(error);
  });
