import { LATEST_UNICODE_VERSION } from 'emojibase';
import parseNames from '../parsers/parseNames';
import { UnicodeNamesMap } from '../types';
import fetchAndCache from './fetchAndCache';

export default function loadNames(
  version: string = LATEST_UNICODE_VERSION,
): Promise<UnicodeNamesMap> {
  return fetchAndCache(
    `http://unicode.org/Public/${version}/ucd/UnicodeData.txt`,
    `${Number.parseFloat(version).toFixed(1)}/unicode-names.json`,
    parseNames,
  );
}
