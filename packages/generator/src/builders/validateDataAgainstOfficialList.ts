import log from '../helpers/log';
import flattenData from '../helpers/flattenData';
import loadEmojiList from '../loaders/loadEmojiList';
import { Emoji, EmojiMap, EmojiSource } from '../types';

// This commonly logs errors as the official emoji list is not historical and
// represents latest and future state.
export default async function validateDataAgainstOfficialList(data: EmojiMap): Promise<void> {
  const officialSource = await loadEmojiList();
  const emojis = flattenData(data);

  Object.keys(officialSource).forEach(hexcode => {
    const officialEmoji: EmojiSource = officialSource[hexcode];

    // Start off by checking if the emoji actually exists
    if (!emojis[hexcode]) {
      log.error('validate', `Emoji ${hexcode} does not exist.`);

      return;
    }

    // Compare and validate fields
    const emoji: Emoji = emojis[hexcode];
    const errors: string[] = [];

    Object.keys(officialEmoji).forEach(fieldName => {
      const name = fieldName as keyof EmojiSource;

      if (officialEmoji[name] !== emoji[name]) {
        // console.log({ emoji, officialEmoji });
        errors.push(
          `Invalid field ${fieldName}. Found ${emoji[name]}, require ${officialEmoji[name]}`,
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
