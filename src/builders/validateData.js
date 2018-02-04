/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import log from '../helpers/log';
import flattenData from '../helpers/flattenData';
import loadEmojiList from '../loaders/loadEmojiList';

import type { EmojiMap } from '../types';

export default async function validateData(data: EmojiMap): Promise<void> {
  const officialSource = await loadEmojiList();
  const emojis = flattenData(data);

  Object.keys(officialSource).forEach(hexcode => {
    const officialEmoji = officialSource[hexcode];

    // Start off by checking if the emoji actually exists
    if (!emojis[hexcode]) {
      log.error('verify', `Emoji ${hexcode} does not exist.`);

      return;
    }

    // Compare and validate fields
    const emoji = emojis[hexcode];
    const errors = [];

    Object.keys(officialEmoji).forEach(fieldName => {
      if (officialEmoji[fieldName] !== emoji[fieldName]) {
        errors.push(
          `Invalid field ${fieldName}. Found ${emoji[fieldName]}, require ${
            officialEmoji[fieldName]
          }`,
        );
      }
    });

    // Display errors
    if (errors.length > 0) {
      log.error('verify', `Error(s) detected for ${emoji.name} (${hexcode}):\n`, errors.join('\n'));
    }
  });
}
