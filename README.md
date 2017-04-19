# emoji-database

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
| regex/shortname.js | 31 B | 51 B |
| regex/index.js | 2.43 KB | 900 B |
| data/extra/unicode.json | 25.87 KB | 6.18 KB |
| data/extra/hexcodes.json | 28.63 KB | 5.86 KB |
| data/extra/shortnames.json | 38.04 KB | 9.35 KB |
| data/extra/hexcode-to-shortname.json | 66.68 KB | 15.42 KB |
| data/compact-map.json | 99.34 KB | 16.24 KB |
| data/compact-list.json | 122.67 KB | 16.33 KB |
| data/compact-by-category.json | 122.77 KB | 16.53 KB |
| data/standard-map.json | 267.39 KB | 36.25 KB |
| data/standard-list.json | 290.72 KB | 37.02 KB |
| data/standard-by-category.json | 290.82 KB | 37.75 KB |
| data/expanded-by-category.json | 862.61 KB | 87.02 KB |
| data/expanded-map.json | 886.73 KB | 86.93 KB |
| data/expanded-list.json | 910.06 KB | 87.66 KB |

[emojione]: https://github.com/Ranks/emojione
[unicode-emoji-data]: https://github.com/dematerializer/unicode-emoji-data
