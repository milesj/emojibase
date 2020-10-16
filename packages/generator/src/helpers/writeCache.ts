import path from 'path';
import log from './log';
import writeFile from './writeFile';

const CACHE_FOLDER = path.resolve(process.cwd(), 'cache');

export default function writeCache<T>(name: string, data: T, encode: boolean = true): Promise<T> {
  log.info('cache', `Caching ${name}`);

  return writeFile(
    CACHE_FOLDER,
    name,
    encode ? JSON.stringify(data, null, '  ') : data, // Easier debugging
  ).then(() => data);
}
