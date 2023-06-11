import path from 'node:path';
import { log } from './log';
import { writeFile } from './writeFile';

const CACHE_FOLDER = path.resolve(process.cwd(), 'cache');

export async function writeCache<T>(name: string, data: T, encode: boolean = true): Promise<T> {
	log.info('cache', `Caching ${name}`);

	await writeFile(
		CACHE_FOLDER,
		name,
		encode ? JSON.stringify(data, null, '  ') : data, // Easier debugging
	);

	return data;
}
