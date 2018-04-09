/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import log from '../helpers/log';
import flattenData from '../helpers/flattenData';
import loadEmojiList from '../loaders/loadEmojiList';
import { Emoji, EmojiMap, EmojiSource } from '../types';

// This current logs errors as the source emoji list has been updated with emoji v6,
// but our source files are still v5.
export default async function validateData(data: EmojiMap): Promise<void> {
  const officialSource = await loadEmojiList();
  const emojis = flattenData(data);

  Object.keys(officialSource).forEach(hexcode => {
    const officialEmoji = officialSource[hexcode];

    // Start off by checking if the emoji actually exists
    if (!emojis[hexcode]) {
      log.error('validate', `Emoji ${hexcode} does not exist.`);

      return;
    }

    // Compare and validate fields
    const emoji: Emoji = emojis[hexcode];
    const errors: string[] = [];

    Object.keys(officialEmoji).forEach(fieldName => {
      // @ts-ignore
      if (officialEmoji[fieldName] !== emoji[fieldName]) {
        errors.push(
          // @ts-ignore
          `Invalid field ${fieldName}. Found ${emoji[fieldName]}, require ${
            // @ts-ignore
            officialEmoji[fieldName]
          }`,
        );
      }
    });

    // Display errors
    if (errors.length > 0) {
      log.error(
        'validate',
        `Error(s) detected for ${emoji.name} (${hexcode}):\n`,
        errors.join('\n'),
      );
    }
  });
}
