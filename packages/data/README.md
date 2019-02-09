# Emojibase Data

[![Build Status](https://travis-ci.org/milesj/emojibase.svg?branch=master)](https://travis-ci.org/milesj/emojibase)
[![npm version](https://badge.fury.io/js/emojibase-data.svg)](https://www.npmjs.com/package/emojibase-data)
[![npm deps](https://david-dm.org/milesj/emojibase.svg?path=packages/data)](https://www.npmjs.com/package/emojibase-data)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/emojibase-data/badge?style=rounded)](https://www.jsdelivr.com/package/npm/emojibase-data)

Install the package.

```
yarn add emojibase-data
```

Import and use the localized JSON dataset.

```ts
import data from 'emojibase-data/en/data.json';
```

Or fetch the dataset from our CDN.

```ts
import { fetchFromCDN } from 'emojibase';

fetchFromCDN('en/data.json').then(data => data);
```

Please refer to the [official documentation](https://github.com/milesj/emojibase) for more
information.
