/* eslint-disable @typescript-eslint/no-unsafe-assignment, unicorn/better-regex */

import { SUPPORTED_LOCALES, NON_LATIN_LOCALES, appendSkinToneIndex } from 'emojibase';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
import { transliterate } from 'transliteration';
import buildEmojiData from '../builders/buildEmojiData';
import buildAnnotationData from '../builders/buildAnnotationData';
import writeDataset from '../helpers/writeDataset';
import filterData from '../helpers/filterData';
import log from '../helpers/log';
import { ShortcodeDataMap } from '../types';

const CUSTOM_SHORTCODES: { [key: string]: string } = {
  e_mail: 'email',
  t_rex: 'trex',
};

const kuroshiro = new Kuroshiro();

async function slugify(value: string, locale: string, transform: boolean = false): Promise<string> {
  let slug = value.trim();

  if (transform) {
    // Japanese: https://github.com/dzcpy/transliteration/issues/226
    if (locale === 'ja') {
      slug = await kuroshiro.convert(slug, {
        mode: 'spaced',
        romajiSystem: 'passport',
        to: 'romaji',
      });

      // These characters do not convert automatically
      slug = slug.replace('営', 'kanri').replace('々', 'kaku');
    } else {
      slug = transliterate(slug);
    }
  }

  slug = slug
    .toLocaleLowerCase()
    // Remove separators
    .replace(/(\s|-|`|\/|\\|･)+/g, '_')
    // Remove special chars
    .replace(/([!"&'()[\]+,.:;<>?ʼ’“”])/g, '')
    // Remove multiple underscores
    .replace(/_{2,}/g, '_')
    // Remove leading underscores
    .replace(/^_+/, '')
    // Remove trailing underscores
    .replace(/_+$/, '');

  return CUSTOM_SHORTCODES[slug] || slug;
}

export default async function generateShortcodes(): Promise<void> {
  log.title('data', 'Generating shortcode datasets');

  const data = await buildEmojiData();
  const emojis = Object.values(filterData(data));

  // Setup transliterations
  await kuroshiro.init(new KuromojiAnalyzer()); // Japanese

  // Generate CLDR shortcodes for each locale
  await Promise.all(
    SUPPORTED_LOCALES.map(async (locale: string) => {
      const isLatinChars = !NON_LATIN_LOCALES.includes(locale);
      const annotations = await buildAnnotationData(locale);
      const cldr: ShortcodeDataMap = {};
      const cldrNonLatin: ShortcodeDataMap = {};
      let hasLatin = false;
      let hasNonLatin = false;

      // eslint-disable-next-line no-restricted-syntax
      for await (const emoji of emojis) {
        const row = annotations[emoji.hexcode];

        if (!row || !row.annotation) {
          // eslint-disable-next-line no-continue
          continue;
        }

        cldr[emoji.hexcode] = await slugify(row.annotation, locale, true);
        hasLatin = true;

        if (!isLatinChars) {
          cldrNonLatin[emoji.hexcode] = await slugify(row.annotation, locale);
          hasNonLatin = true;
        }

        // Skin tones
        if (emoji.modifications) {
          // eslint-disable-next-line no-loop-func
          Object.values(emoji.modifications).forEach((mod) => {
            if (hasLatin) {
              cldr[mod.hexcode] = appendSkinToneIndex(String(cldr[emoji.hexcode]), mod);
            }

            if (hasNonLatin) {
              cldrNonLatin[mod.hexcode] = appendSkinToneIndex(
                String(cldrNonLatin[emoji.hexcode]),
                mod,
              );
            }
          });
        }
      }

      const promises: Promise<unknown>[] = [];

      if (hasLatin) {
        promises.push(writeDataset(`${locale}/shortcodes/cldr.json`, cldr, true));
      }

      if (hasNonLatin) {
        promises.push(writeDataset(`${locale}/shortcodes/cldr-native.json`, cldrNonLatin, true));
      }

      return Promise.all(promises);
    }),
  );
}
