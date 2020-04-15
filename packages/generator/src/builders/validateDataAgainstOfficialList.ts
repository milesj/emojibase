import { TEXT, EMOJI } from 'emojibase';
import log from '../helpers/log';
import flattenData from '../helpers/flattenData';
import loadEmojiList from '../loaders/loadEmojiList';
import loadEmojiStyles from '../loaders/loadEmojiStyles';
import { Emoji, EmojiMap, EmojiSource } from '../types';

// This commonly logs errors as the official emoji list is not historical and
// represents latest and future state.
export default async function validateDataAgainstOfficialList(data: EmojiMap): Promise<void> {
  const officialSource = await loadEmojiList();
  const defaultStyles = await loadEmojiStyles();
  const emojis = flattenData(data);

  Object.keys(officialSource).forEach((hexcode) => {
    const officialEmoji: EmojiSource = officialSource[hexcode];

    // Start off by checking if the emoji actually exists
    if (!emojis[hexcode]) {
      log.error('validate', `Emoji ${hexcode} does not exist.`);

      return;
    }

    // Compare and validate fields
    const emoji: Emoji = emojis[hexcode];
    const errors: string[] = [];

    Object.keys(officialEmoji).forEach((fieldName) => {
      const name = fieldName as keyof EmojiSource;

      if (officialEmoji[name] !== emoji[name]) {
        errors.push(
          `Invalid field ${fieldName}. Found ${emoji[name]}, require ${officialEmoji[name]}`,
        );
      }
    });

    // Check for accurate presentation style
    if (defaultStyles.text[hexcode] && emoji.type !== TEXT) {
      errors.push(`Default presentation style should be text, but found ${emoji.type}.`);
    } else if (defaultStyles.emoji[hexcode] && emoji.type !== EMOJI) {
      errors.push(`Default presentation style should be emoji, but found ${emoji.type}.`);
    }

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
