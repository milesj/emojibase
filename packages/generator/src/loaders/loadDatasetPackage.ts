import path from 'path';
import fs from 'fs-extra';

export async function loadDataset<T>(dataPath: string): Promise<T> {
	return fs.readJson(path.join(process.cwd(), 'packages/data', dataPath)) as Promise<T>;
}
