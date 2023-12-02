import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';
import fetch, { RequestInit } from 'node-fetch';
import { log } from '../helpers/log';
import { readCache } from '../helpers/readCache';
import { writeCache } from '../helpers/writeCache';

// Speed up lookups
const localCache: Record<string, unknown> = {};

export async function fetchAndCache<T>(
	url: string,
	name: string,
	parser: (text: string) => T,
	options?: RequestInit,
): Promise<T> {
	// Check the cache first
	const cache = localCache[name] || readCache(name);

	if (cache) {
		localCache[name] = cache;

		return cache as T;
	}

	log.info('load', `Fetching ${name} data from ${chalk.gray(url)}`);

	// Parse the response
	let text = '';

	try {
		text = await fetch(url, options).then((response) => {
			if (response.ok) {
				return response.text();
			}

			throw new Error(`${response.status} ${response.statusText}`);
		});
	} catch (error: unknown) {
		log.error('load', `Failed to fetch ${url}: ${(error as Error).message}`);

		throw error;
	}

	// Cache the data
	// eslint-disable-next-line promise/prefer-await-to-then
	return writeCache(name, parser(text)).then((data) => {
		localCache[name] = data;

		log.success('load', `Fetched and cached ${name}`);

		return data;
	});
}

export async function importJsonModule<T>(name: string): Promise<T> {
	log.info('load', `Loading data from ${chalk.gray(name)}`);

	const path = await import.meta.resolve!(name);
	const data = await fs.promises.readFile(fileURLToPath(path), 'utf8');

	return JSON.parse(data) as T;
}
