#! /usr/bin/env node
/* eslint-disable */

const regeneratorRuntime = require('regenerator-runtime');
const generateShortcodes = require('../packages/generator/lib/generators/generateShortcodes')
  .default;

global.regeneratorRuntime = regeneratorRuntime;

generateShortcodes();
