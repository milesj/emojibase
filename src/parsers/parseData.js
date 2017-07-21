/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

export default function parseData(version: string, data: string): string[] {
  const emojis = [];

  data.split('\n').forEach((line) => {
    // Skip comment or empty lines
    if (line.charAt(0) === '#' || !line.trim()) {
      return;
    }

    const emoji = {};
    const columns = line.split(';');

    // v1 has a different format
    if (version === '1.0') {
      emoji.hexcode = columns[0].trim().replace(/ /g, '-');
      emoji.type = columns[1].trim();

    } else {

    }
  });

  return emojis;
}
