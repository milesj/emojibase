import fs from 'fs';
import path from 'path';
import log from './log';

export default function readCache<T>(name: string): T | null {
  const cachePath = path.resolve(process.cwd(), 'cache', name);

  if (fs.existsSync(cachePath)) {
    log.success('cache', `Using ${name} cached data`);

    return JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  log.info('cache', `No cached data found for ${name}`);

  return null;
}
