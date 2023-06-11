import fs from 'node:fs';
import path from 'node:path';
import { log } from './log';

export function readCache<T>(name: string): T | undefined {
	const cachePath = path.resolve(process.cwd(), 'cache', name);

	if (fs.existsSync(cachePath)) {
		log.success('cache', `Using ${name} cached data`);

		return JSON.parse(fs.readFileSync(cachePath, 'utf8')) as T;
	}

	log.info('cache', `No cached data found for ${name}`);

	return undefined;
}
