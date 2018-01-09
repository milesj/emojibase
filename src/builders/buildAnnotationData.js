/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable complexity */

import {
  GENDER_PATTERN,
  SKIN_MODIFIER_PATTERN,
  REGIONAL_INDICATORS,
  TAG_LATIN_SMALL_LETTERS,
  MALE_SIGN,
} from '../../packages/emojibase/lib/constants';
import stripHexcode from '../../packages/emojibase/lib/stripHexcode';
import log from '../helpers/log';
import hasProperty from '../helpers/hasProperty';
import writeCache from '../helpers/writeCache';
import loadAnnotations from '../loaders/loadAnnotations';
import loadLocalization from '../loaders/loadLocalization';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';

import type { CLDRAnnotationMap } from '../types';

export default async function buildAnnotationData(locale: string): Promise<CLDRAnnotationMap> {
  log.title('build', `Building ${locale} annotation data`);

  // Load the base annotations and localization datasets
  const annotations = await loadAnnotations(locale);
  const derivedAnnotations = await loadAnnotations(locale, true); // Modifiers and sequences
  const englishAnnotations = await loadAnnotations('en'); // Fallback to English
  const localization = await loadLocalization(locale);

  /*
   * http://unicode.org/repos/cldr/trunk/specs/ldml/tr35-general.html#SynthesizingNames
   * ZWJ and Flag sequences do not have annotations, so let's add them
   */
  const sequences = {
    ...(await loadSequences()),
    ...(await loadZwjSequences()),
  };

  Object.keys(sequences).forEach((fullHexcode) => {
    const hexcode = stripHexcode(fullHexcode);

    // Annotations already exist for this hexcode
    if (annotations[hexcode]) {
      return;

    // Skip skin tones as they are nested within their parent
    } else if (hexcode.match(SKIN_MODIFIER_PATTERN)) {
      return;
    }

    let {
      annotation = '',
      tags = [], // eslint-disable-line prefer-const
    } = derivedAnnotations[hexcode] || englishAnnotations[hexcode] || {};
    const emoji = sequences[fullHexcode];

    // Use the localized territory name
    if (hasProperty(emoji.property, ['Emoji_Flag_Sequence'])) {
      const countryCode = fullHexcode
        .split('-')
        .map(hex => REGIONAL_INDICATORS[hex])
        .join('');

      if (!annotation) {
        annotation = localization.territories[countryCode];
      }

      tags.push(countryCode);

    // Use the localized subdivision name
    } else if (hasProperty(emoji.property, ['Emoji_Tag_Sequence'])) {
      const divisionName = hexcode
        .split('-')
        .map(hex => TAG_LATIN_SMALL_LETTERS[hex])
        .join('');

      if (!annotation) {
        annotation = localization.subdivisions[divisionName];
      }

      tags.push(divisionName);

    // Step 3) Label with keycap and use sequence
    } else if (hasProperty(emoji.property, ['Emoji_Keycap_Sequence'])) {
      if (!annotation) {
        annotation = emoji.description;
      }

      tags.push(annotation);

    // ZWJ sequences require special treatment
    } else if (hasProperty(emoji.property, ['Emoji_ZWJ_Sequence'])) {
      const suffix = [];
      let prefixName = '';
      let suffixName = '';
      let sequence = hexcode.split('-');

      // Inherit tags if none were defined
      if (tags.length === 0) {
        sequence.forEach((hex) => {
          if (annotations[hex] && annotations[hex].tags) {
            tags.push(...annotations[hex].tags);
          }
        });
      }

      // Step 6) Move KISS, HEART, FAMILY to start of suffix and reset sequence
      if (
        emoji.description.startsWith('kiss:') ||
        emoji.description.startsWith('family:') ||
        emoji.description.startsWith('couple with heart:')
      ) {
        sequence.forEach((hex) => {
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

        prefixName = (annotations[prefixHexcode] || englishAnnotations[prefixHexcode]).annotation;
      }

      // Step 9) Transform suffix into suffix name
      if (suffix.length > 0) {
        suffixName = suffix
          .map(hex => annotations[hex] || englishAnnotations[hex])
          .filter(Boolean)
          .map(anno => anno.annotation)
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
    annotations[hexcode] = {
      annotation,
      tags: Array.from(new Set(tags)),
    };
  });

  writeCache(`final-${locale}-annotation-data.json`, annotations);

  log.success('build', `Built ${locale} annotation data`);

  return Promise.resolve(annotations);
}
