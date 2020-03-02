import { LATEST_UNICODE_VERSION } from 'emojibase';
import fetchAndCache from './fetchAndCache';
import parseNames from '../parsers/parseNames';
import { UnicodeNamesMap } from '../types';

export default function loadNames(
  version: string = LATEST_UNICODE_VERSION,
): Promise<UnicodeNamesMap> {
  return fetchAndCache(
    parseFloat(version) >= 13
      ? `http://unicode.org/Public/${version}/ucd/UnicodeData-13.0.0d6.txt` // TEMP
      : `http://unicode.org/Public/${version}/ucd/UnicodeData.txt`,
    `${parseFloat(version).toFixed(1)}/unicode-names.json`,
    parseNames,
  );
}
