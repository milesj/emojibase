import { ShortcodePreset, CompactEmoji, Emoji } from './types';
import fetchFromCDN, { FetchFromCDNOptions } from './fetchFromCDN';
import fetchShortcodes from './fetchShortcodes';

export interface FetchEmojisOptions extends FetchFromCDNOptions {
  compact?: boolean;
  shortcodes?: ShortcodePreset[];
}

// Compact
async function fetchEmojis(
  locale: string,
  options: FetchEmojisOptions & { compact: true },
): Promise<CompactEmoji[]>;

// Full
async function fetchEmojis(
  locale: string,
  options?: FetchEmojisOptions & { compact: false },
): Promise<Emoji[]>;

async function fetchEmojis(locale: string, options: FetchEmojisOptions = {}) {
  const { compact = false, shortcodes: presets = [], ...opts } = options;
  const emojis = await fetchFromCDN(`${locale}/${compact ? 'compact' : 'data'}.json`, opts);

  if (presets.length > 0) {
    await Promise.all(presets.map((preset) => fetchShortcodes(locale, preset, opts)));
  }

  return emojis;
}

export default fetchEmojis;
