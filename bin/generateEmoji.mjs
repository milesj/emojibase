#! /usr/bin/env node

import { generateData, generateRegex, generateVersions } from 'emojibase-generator';

function handleError(error) {
	console.error(error.message, error.stack);
}

process.on('unhandledRejection', handleError);

Promise.resolve()
	.then(() => generateVersions())
	.then(() => generateData())
	.then(() => generateRegex())
	.catch(handleError);
