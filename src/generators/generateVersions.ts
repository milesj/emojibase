/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import buildVersionedData from '../builders/buildVersionedData';
import log from '../helpers/log';
import writeDataset from '../helpers/writeDataset';

export default async function generateVersions(): Promise<void> {
  log.title('data', 'Generating versioned datasets');

  const { emojiVersions, unicodeVersions } = await buildVersionedData();
  const emoji = {};
  const unicode = {};

  Object.keys(emojiVersions).forEach(version => {
    emoji[version] = Object.keys(emojiVersions[version]);
  });

  writeDataset('versions/emoji.json', emoji);

  Object.keys(unicodeVersions).forEach(version => {
    unicode[version] = Object.keys(unicodeVersions[version]);
  });

  writeDataset('versions/unicode.json', unicode);

  log.success('data', 'Generated versioned datasets');
}
