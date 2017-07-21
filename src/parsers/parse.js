/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { ParsedLine } from '../types';

/**
 * Parses unicode documents in which each line contains tabular data separated by semi-colons.
 *
 * Examples:
 *  http://unicode.org/Public/10.0.0/ucd/UnicodeData.txt
 *  http://unicode.org/Public/emoji/5.0/emoji-data.txt
 */
export default function parse(data: string): ParsedLine[] {
  const lines = [];

  data.split('\n').forEach((line) => {
    // Skip comments or empty lines
    if (line.charAt(0) === '#' || !line.trim()) {
      return;
    }

    // Extract the trailing comment
    const commentIndex = line.indexOf('#');
    let comment = '';

    if (commentIndex > 0) {
      comment = line.slice(commentIndex + 1);
      line = line.slice(0, commentIndex - 1);
    }

    // Split into fields
    const fields = line.split(';')
      .map(col => col.trim())
      .slice(0, 4);

    lines.push({
      comment,
      fields,
    });
  });

  return lines;
}
