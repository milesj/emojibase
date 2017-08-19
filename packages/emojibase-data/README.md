# Emojibase Data

Install the package.

```
yarn add emojibase-data
```

Import and use the localized JSON dataset.

```javascript
import data from 'emojibase-data/en/data.json';
```

Or fetch the dataset from our CDN.

```javascript
import { fetchFromCDN } from 'emojibase';

fetchFromCDN('en/data.json').then(data => data);
```

Please refer to the [official documentation](https://github.com/milesj/emojibase) for more information.
