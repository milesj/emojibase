/* eslint-disable import/no-dynamic-require, global-require, @typescript-eslint/no-unsafe-assignment, unicorn/better-regex */

import path from 'path';
import {
  TEXT,
  SUPPORTED_LOCALES,
  NON_LATIN_LOCALES,
  appendSkinToneIndex,
  Emoji as MainEmoji,
  stripHexcode,
  Locale,
} from 'emojibase';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
import { transliterate } from 'transliteration';
import buildEmojiData from '../builders/buildEmojiData';
import buildAnnotationData from '../builders/buildAnnotationData';
import writeDataset from '../helpers/writeDataset';
import writeFile from '../helpers/writeFile';
import filterData from '../helpers/filterData';
import log from '../helpers/log';
import { SHORTCODE_GUIDELINES } from '../constants';
import { ShortcodeDataMap, Emoji } from '../types';
import fetchAndCache from '../loaders/fetchAndCache';

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

async function generateCldr(emojis: Emoji[]) {
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

async function generateEmojibase() {
  // Generate the dataset
  const shortcodes: ShortcodeDataMap = require(path.join(__dirname, '../resources/shortcodes'))
    .default;

  Object.entries(shortcodes).forEach(([hexcode, codes]) => {
    if (Array.isArray(codes) && codes.length === 1) {
      // eslint-disable-next-line prefer-destructuring
      shortcodes[hexcode] = codes[0];
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/emojibase.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/emojibase.json`, shortcodes, true),
  ]);

  // Organize and sort the resources file
  const data: MainEmoji[] = require(path.join(__dirname, '../../../data/en/data.json'));
  const output: string[] = [
    '/* eslint-disable sort-keys */',
    '',
    SHORTCODE_GUIDELINES,
    '',
    'export default {',
  ];
  let lastVersion = 0;

  // Sort by version -> order
  data.sort((a, b) =>
    a.version === b.version ? (a.order ?? -1) - (b.order ?? -1) : a.version - b.version,
  );

  // Add each emoji to the list
  data.forEach((emoji) => {
    if (emoji.version !== lastVersion) {
      output.push('');
      output.push(`  // VERSION ${emoji.version}`);

      lastVersion = emoji.version;
    }

    const unicode = emoji.type === TEXT ? emoji.text : emoji.emoji;
    let codes = shortcodes[emoji.hexcode] || [];

    if (!Array.isArray(codes)) {
      codes = [codes];
    }

    output.push(`  // ${unicode} ${emoji.annotation || emoji.name}`);
    output.push(`  '${emoji.hexcode}': [${codes.map((sc) => `'${sc}'`).join(', ')}],`);
  });

  output.push('};\n');

  await writeFile(
    path.join(process.cwd(), 'packages/generator/src/resources'),
    'shortcodes.ts',
    output.join('\n'),
  );
}

async function generateGitHub() {
  const shortcodes: ShortcodeDataMap = {};
  const response = await fetchAndCache<Record<string, string>>(
    'https://api.github.com/emojis',
    'temp/github-emojis.json',
    (text) => JSON.parse(text),
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Emojibase',
      },
    },
  );

  Object.entries(response).forEach(([code, url]) => {
    const match = url.match(/emoji\/unicode\/([a-z0-9-]+)\.png/i);

    if (match) {
      shortcodes[match[1].toUpperCase()] = code;
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/github.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/github.json`, shortcodes, true),
  ]);
}

async function generateIamCal() {
  const shortcodes: ShortcodeDataMap = {};
  const response = await fetchAndCache<{ unified: string; short_names?: string[] }[]>(
    'https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json',
    'temp/iamcal-emoji-data.json',
    (text) => JSON.parse(text),
    {
      headers: {
        'User-Agent': 'Emojibase',
      },
    },
  );

  response.forEach((emoji) => {
    const hexcode = stripHexcode(emoji.unified);

    if (Array.isArray(emoji.short_names)) {
      if (emoji.short_names.length === 1) {
        // eslint-disable-next-line prefer-destructuring
        shortcodes[hexcode] = emoji.short_names[0];
      } else {
        shortcodes[hexcode] = emoji.short_names;
      }
    }
  });

  await Promise.all([
    writeDataset(`en/shortcodes/iamcal.raw.json`, shortcodes),
    writeDataset(`en/shortcodes/iamcal.json`, shortcodes, true),
  ]);
}

export default async function generateShortcodes(): Promise<void> {
  log.title('data', 'Generating shortcode datasets');

  const data = await buildEmojiData();
  const emojis = Object.values(filterData(data));

  // Generate CLDR shortcodes for each locale
  await generateCldr(emojis);

  // Generate platform shortcodes
  await generateEmojibase();
  await generateGitHub();
  await generateIamCal();
}
