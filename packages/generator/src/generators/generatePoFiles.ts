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

  const enShortcodesOutput: string[] = [];
  const nonEnShortcodesOutput: string[] = [];

  function addToOutput(rows: string[], isEnglish: boolean) {
    if (isEnglish) {
      enShortcodesOutput.push(...rows);
    } else {
      nonEnShortcodesOutput.push(...rows);
    }
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
      const output =
        locale === 'en' || locale === 'en-gb' ? enShortcodesOutput : nonEnShortcodesOutput;

      return writeFile(path.join(process.cwd(), 'po', locale), 'shortcodes.po', output.join('\n'));
    }),
  );

  // Groups and subgroups
  // eslint-disable-next-line
  const groups: GroupDataset = require('../../../data/meta/groups.json');

  await Promise.all(
    SUPPORTED_LOCALES.map(async (locale) => {
      const metaOutput: string[] = [];

      // Regional indicators
      metaOutput.push(
        '',
        '# Custom',
        '#, javascript-format',
        `msgctxt "ANNOTATION: Denotes a countries flag using alphabetical characters (usa = United States)"`,
        `msgid "regional indicator %s"`,
        `msgstr "${REGIONAL_INDICATOR_MESSAGES[locale] || ''}"`,
      );

      // Skin tones
      metaOutput.push(
        '',
        '# Custom',
        `msgctxt "ANNOTATION: Very short word for skin tone and/or color (max 1 word if possible)"`,
        `msgid "skin tone"`,
        `msgstr "${SKIN_TONE_MESSAGES[locale] || ''}"`,
      );

      // Symbols
      metaOutput.push(
        '',
        '# Custom',
        `msgctxt "ANNOTATION: Name of the asterisk symbol (*)"`,
        `msgid "asterisk"`,
        `msgstr "${SYMBOL_ASTERISK_MESSAGES[locale] || ''}"`,
      );

      metaOutput.push(
        '',
        '# Custom',
        `msgctxt "ANNOTATION: Name of the number sign/hash symbol (#)"`,
        `msgid "number sign"`,
        `msgstr "${SYMBOL_HASH_MESSAGES[locale] || ''}"`,
      );

      Object.entries(groups.groups).forEach(([groupID, groupKey]) => {
        metaOutput.push(
          '',
          `# ${groupID}: ${groupKey}`,
          `msgctxt "EMOJI GROUP"`,
          `msgid "${groupKey.replace(/-/g, ' ')}"`,
          `msgstr ""`,
        );
      });

      Object.entries(groups.subgroups).forEach(([groupID, groupKey]) => {
        metaOutput.push(
          '',
          `# ${groupID}: ${groupKey}`,
          `msgctxt "EMOJI SUB-GROUP"`,
          `msgid "${groupKey.replace(/-/g, ' ')}"`,
          `msgstr ""`,
        );
      });

      return writeFile(path.join(process.cwd(), 'po', locale), 'meta.po', metaOutput.join('\n'));
    }),
  );
}
