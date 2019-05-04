import path from 'path';
import log from './log';
import writeFile from './writeFile';

const DATASET_FOLDER = path.resolve(__dirname, '../../../data');

export default function writeDataset(
  name: string,
  data: any,
  minify: boolean = false,
): Promise<any> {
  log.info('data', `Creating ${name} dataset`);

  return writeFile(
    DATASET_FOLDER,
    name,
    minify ? JSON.stringify(data) : JSON.stringify(data, null, '  '),
  ).then(() => data);
}
