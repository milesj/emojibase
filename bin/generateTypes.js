#! /usr/bin/env node
/* eslint-disable */

const regeneratorRuntime = require('regenerator-runtime');
const generateTypes = require('../packages/generator/lib/generators/generateTypes').default;

global.regeneratorRuntime = regeneratorRuntime;

generateTypes();
