/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import log from '../helpers/log';
import writeCache from '../helpers/writeCache';
import loadData from '../loaders/loadData';
import loadNames from '../loaders/loadNames';
import loadOrderAndGroup from '../loaders/loadOrderAndGroup';
import loadVariations from '../loaders/loadVariations';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';
import joinData from './joinData';
import joinMetadataToData from './joinMetadataToData';
import joinModifiersToData from './joinModifiersToData';
import verifyData from './verifyData';

import type { EmojiMap } from '../types';

export default async function buildEmojiData(): EmojiMap {
  log.title('build', 'Building emoji data');

  // 1) Load and merge all emoji data from the latest version release
  const emojis = {};

  joinData(emojis, await loadData());
  joinData(emojis, await loadSequences());
  joinData(emojis, await loadZwjSequences());

  // 2) Load and merge metadata into the emoji data
  const names = await loadNames();
  const groups = await loadOrderAndGroup();
  const variations = await loadVariations();

  joinMetadataToData(emojis, names, groups, variations);

  // 3) Append skin tone modifications
  joinModifiersToData(emojis); // Requires names

  // 4) Verify and cache the data
  writeCache('final-emoji-data.json', verifyData(emojis));

  log.success('build', 'Built emoji data');

  return emojis;
}
