# emoji-database
[![Build Status](https://travis-ci.org/milesj/emoji-database.svg?branch=master)](https://travis-ci.org/milesj/emoji-database)

A collection of up-to-date, pre-generated, specification compliant, emoji datasets and
regex patterns. Data is generated with [unicode-emoji-data][unicode-emoji-data] and
[emojione][emojione] packages, for increased accuracy and customizability.

## Installation

```
npm install emoji-database --save
// Or
yarn add emoji-database
```

## Filesizes

| File | Filesize | Gzipped |
| --- | --- | --- |
| regex/shortname.js | 30 B | 50 B |
| regex/index.js | 5.39 KB | 1.34 KB |
| data/extra/unicode.json | 25.87 KB | 6.18 KB |
| data/extra/hexcodes.json | 28.63 KB | 5.86 KB |
| data/extra/shortnames.json | 38.26 KB | 9.39 KB |
| data/extra/shortname-to-unicode.json | 64.13 KB | 15.68 KB |
| data/extra/hexcode-to-shortname.json | 66.89 KB | 15.37 KB |
| data/compact-map.json | 99.55 KB | 16.21 KB |
| data/compact-list.json | 122.88 KB | 16.34 KB |
| data/compact-by-category.json | 122.97 KB | 16.27 KB |
| data/standard-map.json | 267.61 KB | 36.19 KB |
| data/standard-list.json | 290.94 KB | 36.97 KB |
| data/standard-by-category.json | 291.03 KB | 37.33 KB |
| data/expanded-by-category.json | 898.46 KB | 93.55 KB |
| data/expanded-map.json | 922.27 KB | 93.91 KB |
| data/expanded-list.json | 945.6 KB | 94.59 KB |

[emojione]: https://github.com/Ranks/emojione
[unicode-emoji-data]: https://github.com/dematerializer/unicode-emoji-data
