#!/usr/bin/env node

import { generateRegex } from 'emojibase-generator';

function handleError(error) {
	console.error(error.message, error.stack);
	process.exitCode = 1;
}

process.on('unhandledRejection', handleError);

generateRegex().catch(handleError);
