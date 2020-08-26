/* eslint-disable unicorn/better-regex, @typescript-eslint/no-unsafe-assignment */

import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
import { transliterate } from 'transliteration';
import {
  Locale,
  SUPPORTED_LOCALES,
  NON_LATIN_LOCALES,
  appendSkinToneIndex,
  stripHexcode,
} from 'emojibase';
import buildAnnotationData from '../../builders/buildAnnotationData';
import { ShortcodeDataMap } from '../../types';
import writeDataset from '../../helpers/writeDataset';
import Database from '../Database';
import loadPoMeta from '../../loaders/loadPoMeta';
import POManager from '../../parsers/POManager';

const CUSTOM_SHORTCODES: { [key: string]: string } = {
  e_mail: 'email',
  t_rex: 'trex',
};

const kuroshiro = new Kuroshiro();

async function slugify(
  value: string,
  locale: Locale,
  po: POManager,
  transform: boolean = false,
): Promise<string> {
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
    // Apply separators
    .replace(/(\s|-|`|\/|\\|･|（|）|／)+/g, '_')
    // Remove special chars
    .replace(/([!"&'()[\],.:;<>«»?ʼ’‘“”—–])/g, '')
    // Remove multiple underscores
    .replace(/_{2,}/g, '_')
    // Remove leading underscores
    .replace(/^_+/, '')
    // Remove trailing underscores
    .replace(/_+$/, '');

  if (slug.includes('*')) {
    slug = slug.replace('*', await slugify(po.getMessage('asterisk'), locale, po, transform));
  }

  if (slug.includes('#')) {
    slug = slug.replace('#', await slugify(po.getMessage('number sign'), locale, po, transform));
  }

  return CUSTOM_SHORTCODES[slug] || slug;
}

export default async function generateCldr(db: Database) {
  db.preset = 'cldr';

  await kuroshiro.init(new KuromojiAnalyzer()); // Japanese

  return Promise.all(
    SUPPORTED_LOCALES.map(async (locale) => {
      const isLatinChars = !NON_LATIN_LOCALES.includes(locale);
      const annotations = await buildAnnotationData(locale);
      const translations = await loadPoMeta(locale);
      const cldr: ShortcodeDataMap = {};
      const cldrNonLatin: ShortcodeDataMap = {};
      const skinToneSuffix = await slugify(
        translations.getMessage('tone'),
        locale,
        translations,
        true,
      );
      const skinToneSuffixNonLatin = await slugify(
        translations.getMessage('tone'),
        locale,
        translations,
      );
      let hasLatin = false;
      let hasNonLatin = false;

      // eslint-disable-next-line no-restricted-syntax
      for await (const emoji of db.emojiList) {
        const row = annotations[emoji.hexcode] || annotations[stripHexcode(emoji.hexcode)];

        if (!row || !row.annotation || cldr[emoji.hexcode]) {
          // eslint-disable-next-line no-continue
          continue;
        }

        // eslint-disable-next-line require-atomic-updates
        cldr[emoji.hexcode] = await slugify(row.annotation, locale, translations, true);
        hasLatin = true;

        if (!isLatinChars) {
          cldrNonLatin[emoji.hexcode] = await slugify(row.annotation, locale, translations);
          hasNonLatin = true;
        }

        // Skin tones
        if (emoji.modifications) {
          // eslint-disable-next-line no-loop-func
          Object.values(emoji.modifications).forEach((mod) => {
            if (hasLatin) {
              cldr[mod.hexcode] = appendSkinToneIndex(
                String(cldr[emoji.hexcode]),
                mod,
                skinToneSuffix,
              );
            }

            if (hasNonLatin) {
              cldrNonLatin[mod.hexcode] = appendSkinToneIndex(
                String(cldrNonLatin[emoji.hexcode]),
                mod,
                skinToneSuffixNonLatin,
              );
            }
          });
        }
      }

      const promises: Promise<unknown>[] = [];

      if (hasLatin) {
        promises.push(writeDataset(`${locale}/shortcodes/cldr.raw.json`, cldr));
        promises.push(writeDataset(`${locale}/shortcodes/cldr.json`, cldr, true));
      }

      if (hasNonLatin) {
        promises.push(writeDataset(`${locale}/shortcodes/cldr-native.raw.json`, cldrNonLatin));
        promises.push(writeDataset(`${locale}/shortcodes/cldr-native.json`, cldrNonLatin, true));
      }

      return Promise.all(promises);
    }),
  );
}
