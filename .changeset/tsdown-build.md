---
'emojibase': major
'emojibase-generator': patch
'emojibase-test-utils': major
---

Require Node.js 20 or newer. Packages are now built with tsdown instead of Packemon, which targets
modern syntax and bundles type declarations into a single `index.d.ts` file. Package entry points
are unchanged.
