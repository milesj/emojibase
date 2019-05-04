import fs from 'fs-extra';
import path from 'path';

export default function writeFile(targetFolder: string, fileName: string, data: any): Promise<any> {
  const filePath = path.resolve(targetFolder, fileName);

  return fs
    .ensureDir(path.dirname(filePath))
    .then(() => fs.writeFile(filePath, data, 'utf8'))
    .then(() => data);
}
