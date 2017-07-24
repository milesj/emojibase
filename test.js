const loadNames = require('./lib/loaders/loadNames').default;
const loadData = require('./lib/loaders/loadData').default;
const loadSequences = require('./lib/loaders/loadSequences').default;

// loadNames();
for (let i = 1; i <= 5; i += 1) {
  loadData(`${i}.0`);
  loadSequences(`${i}.0`);
}
