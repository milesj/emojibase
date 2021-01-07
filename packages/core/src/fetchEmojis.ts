import fetchFromCDN from './fetchFromCDN';
import fetchShortcodes from './fetchShortcodes';
import flattenEmojiData from './flattenEmojiData';
import joinShortcodes from './joinShortcodes';
import {
  CompactEmoji,
  Emoji,
  FetchEmojisOptions,
  FlatCompactEmoji,
  FlatEmoji,
  Locale,
  ShortcodePreset,
  ShortcodesDataset,
} from './types';

// Full
async function fetchEmojis(
  locale: Locale,
  options?: FetchEmojisOptions & { compact?: false; flat?: false },
): Promise<Emoji[]>;

async function fetchEmojis(
  locale: Locale,
  options: FetchEmojisOptions & { compact?: false; flat: true },
): Promise<FlatEmoji[]>;

// Compact
async function fetchEmojis(
  locale: Locale,
  options: FetchEmojisOptions & { compact: true; flat?: false },
): Promise<CompactEmoji[]>;

async function fetchEmojis(
  locale: Locale,
  options: FetchEmojisOptions & { compact: true; flat: true },
): Promise<FlatCompactEmoji[]>;

async function fetchEmojis(locale: Locale, options: FetchEmojisOptions = {}): Promise<unknown[]> {
  const { compact = false, flat = false, shortcodes: presets = [], ...opts } = options;
  const emojis = await fetchFromCDN<Emoji[]>(
    `${locale}/${compact ? 'compact' : 'data'}.json`,
    opts,
  );
  let shortcodes: ShortcodesDataset[] = [];

  if (presets.length > 0) {
    shortcodes = await Promise.all(
      presets.map((preset) => {
        let promise: Promise<ShortcodesDataset>;

        if (preset.includes('/')) {
          const [customLocale, customPreset] = preset.split('/');

          promise = fetchShortcodes(customLocale as Locale, customPreset as ShortcodePreset, opts);
        } else {
          promise = fetchShortcodes(locale, preset as ShortcodePreset, opts);
        }

        // Ignore as the primary dataset should still load
        return promise.catch(() => ({}));
      }),
    );
  }

  return flat ? flattenEmojiData(emojis, shortcodes) : joinShortcodes(emojis, shortcodes);
}

export default fetchEmojis;
