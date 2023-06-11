import path from 'node:path';
import fs from 'fs-extra';

export async function writeFile<T>(targetFolder: string, fileName: string, data: T): Promise<T> {
	const filePath = path.resolve(targetFolder, fileName);

	await fs.ensureDir(path.dirname(filePath));
	await fs.writeFile(filePath, data as string, 'utf8');

	return data;
}
