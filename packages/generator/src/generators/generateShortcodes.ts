import buildEmojiData from '../builders/buildEmojiData';
import filterData from '../helpers/filterData';
import log from '../helpers/log';
import generateCldr from './shortcodes/generateCldr';
import generateEmojibase from './shortcodes/generateEmojibase';
import generateGitHub from './shortcodes/generateGitHub';
import generateIamCal from './shortcodes/generateIamCal';

export default async function generateShortcodes(): Promise<void> {
  log.title('data', 'Generating shortcode datasets');

  const data = await buildEmojiData();
  const emojis = filterData(data);

  // Generate CLDR shortcodes for each locale
  await generateCldr(emojis);

  // Generate platform shortcodes
  await generateEmojibase();
  await generateGitHub();
  await generateIamCal();
}
