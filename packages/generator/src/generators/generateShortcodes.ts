import buildEmojiData from '../builders/buildEmojiData';
import filterData from '../helpers/filterData';
import log from '../helpers/log';
import generateCldr from './shortcodes/generateCldr';
import generateEmojibase from './shortcodes/generateEmojibase';
import generateGitHub from './shortcodes/generateGitHub';
import generateIamCal from './shortcodes/generateIamCal';
import { EmojiMap } from '../types';

// Some external shortcode providers use either the emoji/text variation
// hexcodes for mapping their shortcodes, while we use the varitionless one.
// Let's add additional mappings for the variations so we capture everything.
function createEmojiMap(emojis: EmojiMap): EmojiMap {
  Object.values(emojis).forEach((emoji) => {
    if (emoji.variations) {
      const { emoji: emojiHexcode, text: textHexcode } = emoji.variations;

      if (emojiHexcode) {
        emojis[emojiHexcode] = emoji;
      }

      if (textHexcode) {
        emojis[textHexcode] = emoji;
      }
    }
  });

  return emojis;
}

export default async function generateShortcodes(): Promise<void> {
  log.title('data', 'Generating shortcode datasets');

  const data = await buildEmojiData();
  const emojis = createEmojiMap(filterData(data));

  // Generate CLDR shortcodes for each locale
  await generateCldr(emojis);

  // Generate platform shortcodes
  await generateEmojibase(emojis);
  await generateGitHub(emojis);
  await generateIamCal(emojis);
}
