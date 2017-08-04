/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import cleanHexcode from '../helpers/cleanHexcode';
import log from '../helpers/log';
import hasProperty from '../helpers/hasProperty';
import readCache from '../helpers/readCache';
import writeCache from '../helpers/writeCache';
import loadAnnotations from '../loaders/loadAnnotations';
import loadLocalization from '../loaders/loadLocalization';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';
import {
  SEQUENCE_REMOVAL_PATTERN,
  SKIN_MODIFIER_PATTERN,
  REGIONAL_INDICATORS,
  TAG_LATIN_SMALL_LETTERS,
} from '../constants';

import type { CLDRAnnotationMap } from '../types';

export default async function buildAnnotationData(locale: string): Promise<CLDRAnnotationMap> {
  const cache = readCache(`final-${locale}-annotations.json`);

  if (cache) {
    return Promise.resolve(cache);
  }

  log.title('build', `Building ${locale} annotation data`);

  // Load the base annotations and localization datasets
  const annotations = await loadAnnotations(locale);
  const localization = await loadLocalization(locale);

  // http://unicode.org/repos/cldr/trunk/specs/ldml/tr35-general.html#SynthesizingNames
  // ZWJ and Flag sequences do not have annotations, so let's add them
  const sequences = {
    ...(await loadSequences()),
    ...(await loadZwjSequences()),
  };

  Object.keys(sequences).forEach((fullHexcode) => {
    const hexcode = cleanHexcode(fullHexcode);

    // Annotations already exist for this hexcode
    if (annotations[hexcode]) {
      return;

    // Skip skin tones as they are nested within their parent
    } else if (hexcode.match(SKIN_MODIFIER_PATTERN)) {
      return;
    }

    const emoji = sequences[fullHexcode];

    // Use the localized territory name
    if (hasProperty(emoji.property, ['Emoji_Flag_Sequence'])) {
      const countryCode = fullHexcode
        .split('-')
        .map(hex => REGIONAL_INDICATORS[hex])
        .join('');

      annotations[hexcode] = {
        tags: [countryCode],
        annotation: localization.territories[countryCode],
      };

    // Use the localized subdivision name
    } else if (hasProperty(emoji.property, ['Emoji_Tag_Sequence'])) {
      const divisionName = hexcode
        .split('-')
        .map(hex => TAG_LATIN_SMALL_LETTERS[hex])
        .join('');

      annotations[hexcode] = {
        tags: [divisionName],
        annotation: localization.subdivisions[divisionName],
      };

    // This doesn't match the CLDR spec, as it doesn't seem necessary,
    // instead, lets reuse parent annotations and tags for ZWJ emoji
    } else if (hasProperty(emoji.property, ['Emoji_ZWJ_Sequence'])) {
      const tags = [];
      const annos = [];

      hexcode.split('-').forEach((hex) => {
        if (!hex.match(SEQUENCE_REMOVAL_PATTERN) && annotations[hex]) {
          if (annotations[hex].tags) {
            tags.push(...annotations[hex].tags);
          }

          if (annotations[hex].annotation) {
            annos.push(annotations[hex].annotation);
          }
        }
      });

      annotations[hexcode] = {
        annotation: annos.join(', '),
        tags: Array.from(new Set(tags)),
      };
    }
  });

  writeCache(`final-${locale}-annotations.json`, annotations);

  log.success('build', `Built ${locale} annotation data`);

  return Promise.resolve(annotations);
}
