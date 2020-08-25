import path from 'path';
import { ShortcodesDataset, SUPPORTED_LOCALES, Emoji, Hexcode } from 'emojibase';
import log from '../helpers/log';
import toArray from '../helpers/toArray';
import writeFile from '../helpers/writeFile';

export default async function generatePoFiles(): Promise<void> {
  log.title('data', 'Generating I18N po files');

  // eslint-disable-next-line
  const emojiList: Emoji[] = require('../../../data/en/data.raw.json');
  const emojiMap: Record<Hexcode, Emoji> = {};

  emojiList.forEach((emoji) => {
    emojiMap[emoji.hexcode] = emoji;

    if (emoji.skins) {
      emoji.skins.forEach((skin) => {
        emojiMap[skin.hexcode] = skin;
      });
    }
  });

  // eslint-disable-next-line
  const emojibaseShortcodes: ShortcodesDataset = require('../../../data/en/shortcodes/emojibase.raw.json');
  const englishOutput: string[] = [];
  const nonEnglishOutput: string[] = [];

  function addToOutput(rows: string[], isEnglish: boolean) {
    if (isEnglish) {
      englishOutput.push(...rows);
    } else {
      nonEnglishOutput.push(...rows);
    }
  }

  // Shortcodes
  Object.entries(emojibaseShortcodes).forEach(([hexcode, shortcodeList]) => {
    const shortcodes = toArray(shortcodeList);
    const emoji = emojiMap[hexcode];

    // Skip skin tones since they're automatically generated
    if (emoji.tone) {
      return;
    }

    shortcodes.forEach((shortcode) => {
      const rows = [
        '',
        `# ${emoji.hexcode}`,
        `msgctxt "EMOJI: ${emoji.emoji || emoji.text} ${emoji.annotation}"`,
        `msgid "${shortcode}"`,
      ];

      addToOutput([...rows, `msgstr "${shortcode}"`], true);
      addToOutput([...rows, `msgstr ""`], false);
    });
  });

  await Promise.all(
    SUPPORTED_LOCALES.map(async (locale) => {
      const output = locale === 'en' || locale === 'en-gb' ? englishOutput : nonEnglishOutput;

      return writeFile(path.join(process.cwd(), 'po'), `${locale}.po`, output.join('\n'));
    }),
  );
}
