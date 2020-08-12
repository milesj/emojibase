import {
  ShortcodePreset,
  CompactEmoji,
  Emoji,
  ShortcodesDataset,
  FlatEmoji,
  FlatCompactEmoji,
} from './types';
import fetchFromCDN, { FetchFromCDNOptions } from './fetchFromCDN';
import fetchShortcodes from './fetchShortcodes';
import flattenEmojiData from './flattenEmojiData';
import joinShortcodes from './joinShortcodes';

export interface FetchEmojisOptions extends FetchFromCDNOptions {
  compact?: boolean;
  flat?: boolean;
  shortcodes?: (string | ShortcodePreset)[];
}

// Full
async function fetchEmojis(
  locale: string,
  options?: FetchEmojisOptions & { compact?: false; flat?: false },
): Promise<Emoji[]>;

async function fetchEmojis(
  locale: string,
  options: FetchEmojisOptions & { compact?: false; flat: true },
): Promise<FlatEmoji[]>;

// Compact
async function fetchEmojis(
  locale: string,
  options: FetchEmojisOptions & { compact: true; flat?: false },
): Promise<CompactEmoji[]>;

async function fetchEmojis(
  locale: string,
  options: FetchEmojisOptions & { compact: true; flat: true },
): Promise<FlatCompactEmoji[]>;

async function fetchEmojis(locale: string, options: FetchEmojisOptions = {}): Promise<unknown[]> {
  const { compact = false, flat = false, shortcodes: presets = [], ...opts } = options;
  const emojis = await fetchFromCDN<Emoji[]>(
    `${locale}/${compact ? 'compact' : 'data'}.json`,
    opts,
  );
  let shortcodes: ShortcodesDataset[] = [];

  if (presets.length > 0) {
    try {
      shortcodes = await Promise.all(
        presets.map((preset) => {
          if (preset.includes('/')) {
            const [customLocale, customPreset] = preset.split('/');

            return fetchShortcodes(customLocale, customPreset as ShortcodePreset, opts);
          }

          return fetchShortcodes(locale, preset as ShortcodePreset, opts);
        }),
      );
    } catch {
      // Ignore as the primary dataset should still load
    }
  }

  return flat ? flattenEmojiData(emojis, shortcodes) : joinShortcodes(emojis, shortcodes);
}

export default fetchEmojis;
