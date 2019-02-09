import { PermutationOptions } from './generateEmoticonPermutations';

export const SEQUENCE_REMOVAL_PATTERN = /200D|FE0E|FE0F/g;

// Use numbers instead of string values, as the filesize is greatly reduced.

export const TEXT = 0;
export const EMOJI = 1;

export const FEMALE = 0;
export const MALE = 1;

export const LIGHT_SKIN = 1;
export const MEDIUM_LIGHT_SKIN = 2;
export const MEDIUM_SKIN = 3;
export const MEDIUM_DARK_SKIN = 4;
export const DARK_SKIN = 5;

export const GROUP_KEY_SMILEYS_PEOPLE = 'smileys-people';
export const GROUP_KEY_ANIMALS_NATURE = 'animals-nature';
export const GROUP_KEY_FOOD_DRINK = 'food-drink';
export const GROUP_KEY_TRAVEL_PLACES = 'travel-places';
export const GROUP_KEY_ACTIVITIES = 'activities';
export const GROUP_KEY_OBJECTS = 'objects';
export const GROUP_KEY_SYMBOLS = 'symbols';
export const GROUP_KEY_FLAGS = 'flags';

export const SKIN_KEY_LIGHT = 'light';
export const SKIN_KEY_MEDIUM_LIGHT = 'medium-light';
export const SKIN_KEY_MEDIUM = 'medium';
export const SKIN_KEY_MEDIUM_DARK = 'medium-dark';
export const SKIN_KEY_DARK = 'dark';

// Important release versions and locales in generating accurate data.

export const LATEST_EMOJI_VERSION = '12.0';
export const LATEST_UNICODE_VERSION = '12.0.0';
export const LATEST_CLDR_VERSION = '34';
export const FIRST_UNICODE_EMOJI_VERSION = '6.0.0';
export const SUPPORTED_LOCALES = [
  'da', // Danish
  'de', // German
  'en', // English
  'en-gb', // English (Great Britain)
  'es', // Spanish
  'es-mx', // Spanish (Mexico)
  'fr', // French
  'it', // Italian
  'ja', // Japanese
  'ko', // Korean
  'ms', // Malay
  'nl', // Dutch
  'pl', // Polish
  'pt', // Portuguese
  'ru', // Russian
  'sv', // Swedish
  'th', // Thai
  'zh', // Chinese
  'zh-hant', // Chinese (Traditional)
];

// Special options for emoticon permutations.

export const EMOTICON_OPTIONS: { [emoticon: string]: PermutationOptions } = {
  // 🧙‍♂️ man mage
  ':{>': { withNose: false },
  // 💔 broken heart
  '</3': { isFace: false },
  // ❤️ red heart
  '<3': { isFace: false },
  // 🤘 sign of the horns
  '\\m/': { isFace: false },
  // 👹 ogre
  '0)': { withNose: false },
};
