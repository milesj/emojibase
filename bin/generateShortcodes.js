#! /usr/bin/env node
/* eslint-disable */

const generateShortcodes = require('../packages/generator/lib/generators/generateShortcodes')
  .default;

generateShortcodes();
