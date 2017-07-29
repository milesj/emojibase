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

export default async function buildEmojiData() {
  log.title('build', 'Building emoji data');

  // 1) Load metadata
  const names = await loadNames();
  const groups = await loadOrderAndGroup();
  const variations = await loadVariations();

  // 2) Load and merge all emoji data from the latest version release
  const emojis = {};

  joinData(emojis, await loadData());
  joinData(emojis, await loadSequences());
  joinData(emojis, await loadZwjSequences());

  // 3) Merge metadata into the emoji data
  joinMetadataToData(emojis, names, groups, variations);

  // 4) Append skin tone modifications
  joinModifiersToData(emojis); // Requires names

  // Write to cache
  writeCache('final-emoji-data.json', emojis);
}
