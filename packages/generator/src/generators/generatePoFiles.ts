import { ShortcodesDataset, SUPPORTED_LOCALES, Emoji, Hexcode, GroupDataset } from 'emojibase';
import log from '../helpers/log';
import toArray from '../helpers/toArray';
import loadPoMeta from '../loaders/loadPoMeta';

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

  // await Promise.all(
  //   SUPPORTED_LOCALES.map(async (locale) => {
  //     const output =
  //       locale === 'en' || locale === 'en-gb' ? enShortcodesOutput : nonEnShortcodesOutput;

  //     return writeFile(path.join(process.cwd(), 'po', locale), 'shortcodes.po', output.join('\n'));
  //   }),
  // );

  // Metadata
  // eslint-disable-next-line
  const groupsHierarchy: GroupDataset = require('../../../data/meta/groups.json');

  await Promise.all(
    SUPPORTED_LOCALES.map(async (locale) => {
      const po = await loadPoMeta(locale);

      // Groups
      Object.entries(groupsHierarchy.groups).forEach(([groupID, groupKey]) => {
        po.addItem(groupKey.replace(/-/g, ' '), '', 'EMOJI GROUP', {
          comment: `${groupID}: ${groupKey}`,
        });
      });

      // Subgroups
      Object.entries(groupsHierarchy.subgroups).forEach(([groupID, groupKey]) => {
        po.addItem(groupKey.replace(/-/g, ' '), '', 'EMOJI SUB-GROUP', {
          comment: `${groupID}: ${groupKey}`,
        });
      });

      // Add custom translations here!

      return po.write();
    }),
  );
}
