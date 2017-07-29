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
import loadAndJoinVersionedData from './loadAndJoinVersionedData';
import joinMetadataToData from './joinMetadataToData';
import joinModifiersToData from './joinModifiersToData';

export default async function buildEmojiData() {
  log.title('build', 'Building emoji data');

  // Load names, groups, order, and variations first
  const names = await loadNames();
  const groups = await loadOrderAndGroup();
  const variations = await loadVariations();

  // Load and join data from all emoji release versions
  const emojis = {};
  const modifiers = {};

  await loadAndJoinVersionedData(emojis, modifiers, loadData, 1); // v1.0+
  await loadAndJoinVersionedData(emojis, modifiers, loadSequences, 3); // v3.0+
  await loadAndJoinVersionedData(emojis, modifiers, loadZwjSequences, 3); // v3.0+

  // Join additional data to primary data (order is important here!)
  joinMetadataToData(emojis, names, groups, variations);
  joinModifiersToData(emojis, modifiers); // Requires names

  // Write to cache
  writeCache('final-emoji-data.json', emojis);
}
