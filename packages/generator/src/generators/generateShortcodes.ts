import { stripHexcode } from 'emojibase';
import buildEmojiData from '../builders/buildEmojiData';
import filterData from '../helpers/filterData';
import log from '../helpers/log';
import generateCldr from './shortcodes/generateCldr';
import generateEmojibase from './shortcodes/generateEmojibase';
import generateGitHub from './shortcodes/generateGitHub';
import generateIamCal from './shortcodes/generateIamCal';
import generateJoyPixels from './shortcodes/generateJoyPixels';
import writeCache from '../helpers/writeCache';
import { EmojiMap } from '../types';

// Some external shortcode providers use either the variation or sequenceless
// hexcodes for mapping their shortcodes, while we use the variationless one.
// Let's add additional mappings for the variations so we capture everything.
function createEmojiMap(emojis: EmojiMap): EmojiMap {
  const map: EmojiMap = {};

  Object.values(emojis).forEach((emoji) => {
    const otherHexcode = stripHexcode(emoji.hexcode);

    map[emoji.hexcode] = emoji;

    if (otherHexcode !== emoji.hexcode && !map[otherHexcode]) {
      map[otherHexcode] = emoji;
    }

    if (emoji.variations) {
      const { emoji: emojiHexcode, text: textHexcode } = emoji.variations;

      if (emojiHexcode && !map[emojiHexcode]) {
        map[emojiHexcode] = emoji;
      }

      if (textHexcode && !map[textHexcode]) {
        map[textHexcode] = emoji;
      }
    }

    if (emoji.modifications) {
      Object.assign(map, createEmojiMap(emoji.modifications));
    }
  });

  return map;
}

export default async function generateShortcodes(): Promise<void> {
  log.title('data', 'Generating shortcode datasets');

  const data = await buildEmojiData();
  const emojis = createEmojiMap(filterData(data));

  // For debugging
  await writeCache('temp/emoji-map.json', emojis);

  // Generate CLDR shortcodes for each locale
  await generateCldr(emojis);

  // Generate platform shortcodes
  await generateEmojibase(emojis);
  await generateGitHub(emojis);
  await generateIamCal(emojis);
  await generateJoyPixels(emojis);
}
