import fs from 'fs-extra';
import path from 'path';

export default function writeFile<T>(targetFolder: string, fileName: string, data: T): Promise<T> {
  const filePath = path.resolve(targetFolder, fileName);

  return fs
    .ensureDir(path.dirname(filePath))
    .then(() => fs.writeFile(filePath, data, 'utf8'))
    .then(() => data);
}
