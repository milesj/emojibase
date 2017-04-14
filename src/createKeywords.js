/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import cleanName from './cleanName';

export default function createKeywords(name: string): string[] {
  let cleanedName = cleanName(name);

  // Remove conjunction words
  cleanedName = cleanedName.replace(/(\s(and|because|but|for|if|or|of|the|when|with))/g, '');

  return cleanedName.split(' ');
}
