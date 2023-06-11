import path from 'node:path';
import { log } from './log';
import { writeFile } from './writeFile';

const DATASET_FOLDER = path.resolve(process.cwd(), 'packages/data');

export async function writeDataset<T>(name: string, data: T, minify: boolean = false): Promise<T> {
	log.info('data', `Creating ${name} dataset`);

	await writeFile(
		DATASET_FOLDER,
		name,
		minify ? JSON.stringify(data) : JSON.stringify(data, null, '  '),
	);

	return data;
}
