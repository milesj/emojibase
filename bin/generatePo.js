#! /usr/bin/env node
/* eslint-disable */

const regeneratorRuntime = require('regenerator-runtime');
const generatePoFiles = require('../packages/generator/lib/generators/generatePoFiles').default;

global.regeneratorRuntime = regeneratorRuntime;

generatePoFiles();
