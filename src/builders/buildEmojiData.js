/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import writeCache from '../helpers/writeCache';
import loadData from '../loaders/loadData';
import loadNames from '../loaders/loadNames';
import loadOrderAndGroup from '../loaders/loadOrderAndGroup';
import loadVariations from '../loaders/loadVariations';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';
import loadAndJoinVersionedData from './loadAndJoinVersionedData';
import extractModifiersFromData from './extractModifiersFromData';
import joinMetadataToData from './joinMetadataToData';
import joinModifiersToData from './joinModifiersToData';

export default async function buildEmojiData() {
  // Load names, groups, order, and variations first
  const names = await loadNames();
  const groups = await loadOrderAndGroup();
  const variations = await loadVariations();

  // Load and join data from all emoji release versions
  const emojis = {};
  const modifiers = {};

  await loadAndJoinVersionedData(emojis, loadData, 1); // v1.0+
  await loadAndJoinVersionedData(emojis, loadSequences, 3); // v3.0+
  await loadAndJoinVersionedData(emojis, loadZwjSequences, 3); // v3.0+

  // Extract and join modifiers (skin tones) to base modifier emoji data
  extractModifiersFromData(emojis, modifiers);
  joinModifiersToData(emojis, modifiers);

  // Join names, groups, and variations to primary data
  joinMetadataToData(emojis, names, groups, variations);

  // Write to cache
  writeCache('final-emoji-data.json', emojis);

  return emojis;
}
