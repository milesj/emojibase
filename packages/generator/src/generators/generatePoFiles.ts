import path from 'path';
import { ShortcodesDataset, SUPPORTED_LOCALES, Emoji, Hexcode, GroupDataset } from 'emojibase';
import log from '../helpers/log';
import toArray from '../helpers/toArray';
import writeFile from '../helpers/writeFile';
import {
  REGIONAL_INDICATOR_MESSAGES,
  SKIN_TONE_MESSAGES,
  SYMBOL_ASTERISK_MESSAGES,
  SYMBOL_HASH_MESSAGES,
} from '../translations';

export default async function generatePoFiles(): Promise<void> {
  log.title('data', 'Generating I18N po files');

  const englishOutput: string[] = [];
  const nonEnglishOutput: string[] = [];

  function addToOutput(rows: string[], isEnglish: boolean) {
    if (isEnglish) {
      englishOutput.push(...rows);
    } else {
      nonEnglishOutput.push(...rows);
    }
  }

  function addToBothOutputs(rows: string[]) {
    englishOutput.push(...rows);
    nonEnglishOutput.push(...rows);
  }

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

  // Groups and subgroups
  // eslint-disable-next-line
  const groups: GroupDataset = require('../../../data/meta/groups.json');

  Object.entries(groups.groups).forEach(([groupID, groupKey]) => {
    addToBothOutputs([
      '',
      `# ${groupID}`,
      `msgctxt "EMOJI GROUP"`,
      `msgid "${groupKey}"`,
      `msgstr ""`,
    ]);
  });

  Object.entries(groups.subgroups).forEach(([groupID, groupKey]) => {
    addToBothOutputs([
      '',
      `# ${groupID}`,
      `msgctxt "EMOJI SUB-GROUP"`,
      `msgid "${groupKey}"`,
      `msgstr ""`,
    ]);
  });

  // Shortcodes
  // eslint-disable-next-line
  const emojibaseShortcodes: ShortcodesDataset = require('../../../data/en/shortcodes/emojibase.raw.json');

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
      const output = [
        ...(locale === 'en' || locale === 'en-gb' ? englishOutput : nonEnglishOutput),
      ];

      // Regional indicators
      output.unshift(
        '',
        '# Custom',
        '#, javascript-format',
        `msgctxt "ANNOTATION: Denotes a countries flag using alphabetical characters (usa = United States)"`,
        `msgid "regional indicator %s"`,
        `msgstr "${REGIONAL_INDICATOR_MESSAGES[locale] || ''}"`,
      );

      // Skin tones
      output.unshift(
        '',
        '# Custom',
        `msgctxt "ANNOTATION: Very short word for skin tone and/or color (max 1 word if possible)"`,
        `msgid "skin tone"`,
        `msgstr "${SKIN_TONE_MESSAGES[locale] || ''}"`,
      );

      // Symbols
      output.unshift(
        '',
        '# Custom',
        `msgctxt "ANNOTATION: Name of the asterisk symbol (*)"`,
        `msgid "asterisk"`,
        `msgstr "${SYMBOL_ASTERISK_MESSAGES[locale] || ''}"`,
      );

      output.unshift(
        '',
        '# Custom',
        `msgctxt "ANNOTATION: Name of the number sign/hash symbol (#)"`,
        `msgid "number sign"`,
        `msgstr "${SYMBOL_HASH_MESSAGES[locale] || ''}"`,
      );

      return writeFile(path.join(process.cwd(), 'po'), `${locale}.po`, output.join('\n'));
    }),
  );
}
