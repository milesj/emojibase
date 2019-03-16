import { LATEST_UNICODE_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseNames from '../parsers/parseNames';
import { UnicodeNamesMap } from '../types';

export default function loadNames(
  version: string = LATEST_UNICODE_VERSION,
): Promise<UnicodeNamesMap> {
  return fetchAndCache(
    `http://unicode.org/Public/${version}/ucd/UnicodeData.txt`,
    `${version}/unicode-names.json`,
    parseNames,
  );
}
