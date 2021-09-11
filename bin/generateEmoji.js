#! /usr/bin/env node
/* eslint-disable */

const { generateData, generateRegex, generateVersions } = require('../packages/generator');

function handleError(error) {
	console.error(error.message, error.stack);
}

process.on('unhandledRejection', handleError);

Promise.resolve()
	.then(() => generateVersions())
	.then(() => generateData())
	.then(() => generateRegex())
	.catch(handleError);
