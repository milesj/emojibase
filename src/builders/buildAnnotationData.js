/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import cleanHexcode from '../helpers/cleanHexcode';
import log from '../helpers/log';
import hasProperty from '../helpers/hasProperty';
import writeCache from '../helpers/writeCache';
import loadAnnotations from '../loaders/loadAnnotations';
import loadLocalization from '../loaders/loadLocalization';
import loadSequences from '../loaders/loadSequences';
import loadZwjSequences from '../loaders/loadZwjSequences';
import {
  REGIONAL_INDICATORS,
  TAG_LATIN_SMALL_LETTERS,
} from '../constants';

import type { CLDRAnnotationMap } from '../types';

export default async function buildAnnotationData(locale: string): CLDRAnnotationMap {
  log.title('build', 'Building localized annotation data');

  // Load the base annotations and localization datasets
  const annotations = await loadAnnotations(locale);
  const localization = await loadLocalization(locale);

  // http://unicode.org/repos/cldr/trunk/specs/ldml/tr35-general.html#SynthesizingNames
  // ZWJ and Flag sequences do not have annotations, so let's add them
  const sequences = {
    ...await loadSequences(),
    ...await loadZwjSequences(),
  };

  Object.keys(sequences).forEach((fullHexcode) => {
    const hexcode = cleanHexcode(fullHexcode);

    // Annotations already exist for this hexcode
    if (annotations[hexcode]) {
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
        tags: [],
        shortname: localization.territories[countryCode],
      };

    // Use the localized subdivision name
    } else if (hasProperty(emoji.property, ['Emoji_Tag_Sequence'])) {
      const divisionName = hexcode
        .split('-')
        .map(hex => TAG_LATIN_SMALL_LETTERS[hex])
        .join('');

      annotations[hexcode] = {
        tags: [],
        shortname: localization.subdivisions[divisionName],
      };

    // Reuse shortnames and tags for ZWJ family emoji
    } else if (hasProperty(emoji.property, ['Emoji_ZWJ_Sequence'])) {
      // TODO
    }
  });

  writeCache(`final-${locale}-annotations.json`, annotations);

  log.success('build', 'Built localized annotation data');

  return annotations;
}
