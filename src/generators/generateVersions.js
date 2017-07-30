/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import buildVersionedData from '../builders/buildVersionedData';
import cleanHexcode from '../helpers/cleanHexcode';
import log from '../helpers/log';
import writeDump from '../helpers/writeDump';

export default async function generateVersions() {
  log.title('dump', 'Generating versioned data dumps');

  const { emojiVersions, unicodeVersions } = await buildVersionedData();
  const emoji = {};
  const unicode = {};

  Object.keys(emojiVersions).forEach((version) => {
    emoji[version] = Object.keys(emojiVersions[version]).map(cleanHexcode);
  });

  writeDump('emoji-versions.json', emoji);

  Object.keys(unicodeVersions).forEach((version) => {
    unicode[version] = Object.keys(unicodeVersions[version]).map(cleanHexcode);
  });

  writeDump('unicode-versions.json', unicode);

  log.success('dump', 'Generated versioned dumps');
}
