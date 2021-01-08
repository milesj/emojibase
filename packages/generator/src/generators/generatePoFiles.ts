import path from 'path';
import { Emoji, GroupDataset, Hexcode, ShortcodesDataset, SUPPORTED_LOCALES } from 'emojibase';
import log from '../helpers/log';
import toArray from '../helpers/toArray';
import loadPoMeta from '../loaders/loadPoMeta';
import loadPoShortcodes from '../loaders/loadPoShortcodes';

export default async function generatePoFiles(): Promise<void> {
  log.title('data', 'Generating I18N po files');

  // eslint-disable-next-line
  const emojiList: Emoji[] = require(path.join(process.cwd(), 'packages/data/en/data.raw.json'));
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
  const emojibaseShortcodes: ShortcodesDataset = require(path.join(
    process.cwd(),
    'packages/data/en/shortcodes/emojibase.raw.json',
  ));

  await Promise.all(
    SUPPORTED_LOCALES.map(async (locale) => {
      const po = await loadPoShortcodes(locale);

      // We use english as the base so all others inherit
      Object.entries(emojibaseShortcodes).forEach(([hexcode, shortcodeList]) => {
        const shortcodes = toArray(shortcodeList);
        const emoji = emojiMap[hexcode];

        // Skip skin tones since they're automatically generated
        if (emoji.tone) {
          return;
        }

        shortcodes.forEach((shortcode) => {
          po.addItem(
            shortcode,
            locale === 'en' ? shortcode : '',
            `EMOJI: ${emoji.emoji || emoji.text} ${emoji.annotation}`,
            {
              comment: emoji.hexcode,
            },
          );
        });
      });

      return po.write(true);
    }),
  );

  // Metadata
  // eslint-disable-next-line
  const groupsHierarchy: GroupDataset = require(path.join(
    process.cwd(),
    'packages/data/meta/groups.json',
  ));

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
