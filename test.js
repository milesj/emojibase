// const loadNames = require('./lib/loaders/loadNames').default;
// const loadData = require('./lib/loaders/loadData').default;
// const loadSequences = require('./lib/loaders/loadSequences').default;
// const loadZwjSequences = require('./lib/loaders/loadZwjSequences').default;
// const loadVariations = require('./lib/loaders/loadVariations').default;
// const loadOrderAndGroup = require('./lib/loaders/loadOrderAndGroup').default;
//
// loadNames();
// loadOrderAndGroup();
// loadVariations();
//
// for (let i = 1; i <= 5; i += 1) {
//   loadData(`${i}.0`);
//   loadSequences(`${i}.0`);
//   loadZwjSequences(`${i}.0`);
// }

const buildEmojiData = require('./lib/builders/buildEmojiData').default;

Promise.resolve(buildEmojiData())
  .then()
  .catch((error) => {
    console.error(error);
  });
