import buildEmojiData from '../builders/buildEmojiData';
import filterData from '../helpers/filterData';
import log from '../helpers/log';
import generateCldr from './shortcodes/generateCldr';
import generateEmojibase from './shortcodes/generateEmojibase';
import generateGitHub from './shortcodes/generateGitHub';
import generateIamCal from './shortcodes/generateIamCal';
import generateJoyPixels from './shortcodes/generateJoyPixels';
import writeCache from '../helpers/writeCache';
import Database from './Database';

export default async function generateShortcodes(): Promise<void> {
  log.title('data', 'Generating shortcode datasets');

  const data = await buildEmojiData();
  const emojis = filterData(data);
  const db = new Database(emojis);

  // For debugging
  await writeCache('temp/emoji-map.json', emojis);

  // Generate CLDR shortcodes for each locale
  await generateCldr(db);

  // Generate platform shortcodes
  await generateEmojibase(db);
  await generateGitHub(db);
  await generateIamCal(db);
  await generateJoyPixels(db);
}
