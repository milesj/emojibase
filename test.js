const loadNames = require('./lib/loaders/loadNames').default;
const loadData = require('./lib/loaders/loadData').default;

// loadNames();
for (let i = 1; i <= 5; i += 1) {
  loadData(`${i}.0`);
}
