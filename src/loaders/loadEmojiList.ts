/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import fetchAndCache from './fetchAndCache';
import parseEmojiList from '../parsers/parseEmojiList';
import { EmojiSourceMap } from '../types';

export default function loadEmojiList(): Promise<EmojiSourceMap> {
  return fetchAndCache(
    'http://unicode.org/emoji/charts/emoji-list.html',
    'emoji-source-list.json',
    data => parseEmojiList(data),
  );
}
