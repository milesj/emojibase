/* eslint-disable complexity */

import { stripHexcode } from 'emojibase';
import log from '../helpers/log';
import hasProperty from '../helpers/hasProperty';
import writeCache from '../helpers/writeCache';
import loadAnnotations from '../loaders/loadAnnotations';
import loadData from '../loaders/loadData';
import loadLocalization from '../loaders/loadLocalization';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';
import { CLDRAnnotationMap, CLDRAnnotation } from '../types';
import {
  GENDER_PATTERN,
  REGIONAL_INDICATORS,
  TAG_LATIN_SMALL_LETTERS,
  MALE_SIGN,
} from '../constants';

export default async function buildAnnotationData(locale: string): Promise<CLDRAnnotationMap> {
  log.title('build', `Building ${locale} annotation data`);

  // Load the base annotations and localization datasets
  const data: CLDRAnnotationMap = {};
  const localization = await loadLocalization(locale);
  const englishAnnotations = await loadAnnotations('en'); // Fallback to English
  const annotations = await loadAnnotations(locale);
  const annotationsDerived = await loadAnnotations(locale, true); // Modifiers and sequences
  let parentAnnotations: CLDRAnnotationMap = {};
  let parentAnnotationsDerived: CLDRAnnotationMap = {};

  if (locale.includes('-')) {
    const parentLocale = locale.split('-')[0];

    parentAnnotations = await loadAnnotations(parentLocale);
    parentAnnotationsDerived = await loadAnnotations(parentLocale, true);
  }

  function extractField<K extends 'annotation' | 'tags'>(
    hexcode: string,
    field: K,
  ): CLDRAnnotation[K] | null {
    const sets = [
      annotationsDerived,
      annotations,
      parentAnnotationsDerived,
      parentAnnotations,
      englishAnnotations,
    ];

    for (let i = 0, set; i < sets.length; i += 1) {
      set = sets[i] as CLDRAnnotationMap;

      if (set && set[hexcode] && set[hexcode][field]) {
        return set[hexcode][field];
      }
    }

    return null;
  }

  // http://unicode.org/reports/tr35/tr35-general.html#SynthesizingNames
  // ZWJ and Flag sequences do not have annotations, so let's add them
  const sequences = {
    ...(await loadData()),
    ...(await loadSequences()),
    ...(await loadZwjSequences()),
  };

  Object.keys(sequences).forEach(fullHexcode => {
    const hexcode = stripHexcode(fullHexcode);
    const emoji = sequences[fullHexcode];
    let tags: Set<string> = extractField(hexcode, 'tags') || new Set();
    let annotation: string = extractField(hexcode, 'annotation') || '';

    // Use the localized territory name
    if (hasProperty(emoji.property, ['Emoji_Flag_Sequence'])) {
      const countryCode = fullHexcode
        .split('-')
        .map((hex: string) => REGIONAL_INDICATORS[hex])
        .join('');

      if (!annotation) {
        annotation = localization.territories[countryCode];
      }

      tags.add(countryCode);

      // Use the localized subdivision name
    } else if (hasProperty(emoji.property, ['Emoji_Tag_Sequence'])) {
      const divisionName = hexcode
        .split('-')
        .map((hex: string) => TAG_LATIN_SMALL_LETTERS[hex])
        .join('');

      if (!annotation) {
        annotation = localization.subdivisions[divisionName];
      }

      tags.add(divisionName);

      // Label with keycap and use sequence
    } else if (
      hasProperty(emoji.property, ['Emoji_Keycap_Sequence']) ||
      emoji.hexcode === '1F51F' // Keycap 10
    ) {
      if (!annotation) {
        annotation = emoji.description;
      }

      tags.add(annotation);

      // ZWJ sequences require special treatment
    } else if (hasProperty(emoji.property, ['Emoji_ZWJ_Sequence'])) {
      const suffix: string[] = [];
      let prefixName = '';
      let suffixName = '';
      let sequence = hexcode.split('-');

      // Inherit tags if none were defined
      if (tags.size === 0) {
        sequence.forEach((hex: string) => {
          tags = new Set([...Array.from(tags), ...Array.from(extractField(hex, 'tags') || [])]);
        });
      }

      // Step 6) Move KISS, HEART, FAMILY to start of suffix and reset sequence
      if (
        emoji.description.startsWith('kiss:') ||
        emoji.description.startsWith('family:') ||
        emoji.description.startsWith('couple with heart:')
      ) {
        sequence.forEach((hex: string) => {
          // Kiss mark, Heavy black heart
          if (hex !== '1F48B' && hex !== '2764') {
            suffix.push(hex);
          }
        });

        if (emoji.description.startsWith('kiss:')) {
          sequence = ['1F48F'];
        } else if (emoji.description.startsWith('couple with heart:')) {
          sequence = ['1F491'];
        } else if (emoji.description.startsWith('family:')) {
          sequence = ['1F46A'];
        }
      }

      // Step 7) Move genders and reset sequence
      if (sequence[sequence.length - 1].match(GENDER_PATTERN)) {
        suffix.push(...sequence.slice(0, -1));

        if (sequence.includes(MALE_SIGN)) {
          sequence = ['1F468'];
        } else {
          sequence = ['1F469'];
        }
      }

      // Step 8) Transform sequence into prefix name
      if (sequence.length > 0) {
        const prefixHexcode = sequence.join('-');

        prefixName = extractField(prefixHexcode, 'annotation') || '';
      }

      // Step 9) Transform suffix into suffix name
      if (suffix.length > 0) {
        suffixName = suffix
          .map(hex => extractField(hex, 'annotation'))
          .filter(Boolean)
          .join(', ');
      }

      // Step 10) Join the 2 names together
      if (!annotation) {
        if (prefixName && suffixName) {
          annotation = `${prefixName}: ${suffixName}`;
        } else {
          annotation = prefixName || suffixName || '';
        }
      }
    }

    // Add the new custom annotation
    data[hexcode] = {
      annotation,
      tags: new Set(tags),
    };
  });

  await writeCache(`final/${locale}-annotation-data.json`, data);

  log.success('build', `Built ${locale} annotation data`);

  return Promise.resolve(data);
}
