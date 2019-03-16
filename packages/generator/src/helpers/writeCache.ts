import path from 'path';
import log from './log';
import writeFile from './writeFile';

const CACHE_FOLDER = path.resolve(__dirname, '../../../../cache');

export default function writeCache(name: string, data: any, encode: boolean = true): Promise<any> {
  log.info('cache', `Caching ${name}`);

  return writeFile(
    CACHE_FOLDER,
    name,
    encode ? JSON.stringify(data, null, '  ') : data, // Easier debugging
  ).then(() => data);
}
