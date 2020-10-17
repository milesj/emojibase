import { ShortcodePreset, ShortcodesDataset, Locale, FetchFromCDNOptions } from './types';
import fetchFromCDN from './fetchFromCDN';
import { NON_LATIN_LOCALES } from './constants';

const ALIASES: Partial<Record<ShortcodePreset, string>> = {
  discord: 'joypixels',
  slack: 'iamcal',
};

export default function fetchShortcodes(
  locale: Locale,
  preset: ShortcodePreset,
  options?: FetchFromCDNOptions,
): Promise<ShortcodesDataset> {
  if (preset === 'cldr-native' && !NON_LATIN_LOCALES.includes(locale)) {
    return Promise.resolve({});
  }

  return fetchFromCDN(`${locale}/shortcodes/${ALIASES[preset] || preset}.json`, options);
}
