import chalk from 'chalk';
import fetch from 'node-fetch';
import log from '../helpers/log';
import readCache from '../helpers/readCache';
import writeCache from '../helpers/writeCache';

// Speed up lookups
const localCache: { [key: string]: unknown } = {};

export default async function fetchAndCache<T>(
  url: string,
  name: string,
  parser: (text: string) => T,
): Promise<T> {
  // Check the cache first
  const cache = localCache[name] || readCache(name);

  if (cache) {
    localCache[name] = cache;

    return Promise.resolve(cache as T);
  }

  log.info('load', `Fetching ${name} data from ${chalk.gray(url)}`);

  // Parse the response
  let text = '';

  try {
    text = await fetch(url).then(response => {
      if (response.ok) {
        return response.text();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    });
  } catch (error) {
    log.error('load', `Failed to fetch ${url}: ${error.message}`);

    return Promise.reject(error);
  }

  // Cache the data
  return writeCache(name, parser(text)).then(data => {
    localCache[name] = data;

    log.success('load', `Fetched and cached ${name}`);

    return data;
  });
}
