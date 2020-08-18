/* eslint-disable unicorn/better-regex, @typescript-eslint/no-unsafe-assignment */

import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
import { transliterate } from 'transliteration';
import { Locale, SUPPORTED_LOCALES, NON_LATIN_LOCALES, appendSkinToneIndex } from 'emojibase';
import buildAnnotationData from '../../builders/buildAnnotationData';
import { ShortcodeDataMap, EmojiMap } from '../../types';
import writeDataset from '../../helpers/writeDataset';

const CUSTOM_SHORTCODES: { [key: string]: string } = {
  e_mail: 'email',
  t_rex: 'trex',
};

const kuroshiro = new Kuroshiro();

async function slugify(value: string, locale: Locale, transform: boolean = false): Promise<string> {
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
    .replace(/(\s|-|`|\/|\\|･|（|）|／)+/g, '_')
    // Remove special chars
    .replace(/([!"&'()[\],.:;<>«»?ʼ’‘“”—–])/g, '')
    // Remove multiple underscores
    .replace(/_{2,}/g, '_')
    // Remove leading underscores
    .replace(/^_+/, '')
    // Remove trailing underscores
    .replace(/_+$/, '');

  return CUSTOM_SHORTCODES[slug] || slug;
}

export default async function generateCldr(emojis: EmojiMap) {
  const emojiList = Object.values(emojis);

  await kuroshiro.init(new KuromojiAnalyzer()); // Japanese

  return Promise.all(
    SUPPORTED_LOCALES.map(async (locale) => {
      const isLatinChars = !NON_LATIN_LOCALES.includes(locale);
      const annotations = await buildAnnotationData(locale);
      const cldr: ShortcodeDataMap = {};
      const cldrNonLatin: ShortcodeDataMap = {};
      let hasLatin = false;
      let hasNonLatin = false;

      // eslint-disable-next-line no-restricted-syntax
      for await (const emoji of emojiList) {
        const row = annotations[emoji.hexcode];

        if (!row || !row.annotation || cldr[emoji.hexcode]) {
          // eslint-disable-next-line no-continue
          continue;
        }

        // eslint-disable-next-line require-atomic-updates
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
