import { ShortcodePreset, ShortcodesDataset } from './types';
import fetchFromCDN, { FetchFromCDNOptions } from './fetchFromCDN';
import { NON_LATIN_LOCALES } from './constants';

export default function fetchShortcodes(
  locale: string,
  preset: ShortcodePreset,
  options?: FetchFromCDNOptions,
): Promise<ShortcodesDataset> {
  if (preset === 'cldr-native' && !NON_LATIN_LOCALES.includes(locale)) {
    return Promise.resolve({});
  }

  return fetchFromCDN(`${locale}/shortcodes/${preset}.json`, options);
}
