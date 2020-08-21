import 'url-search-params-polyfill';
import React, { useState, useEffect } from 'react';
import { Locale, Emoji } from 'emojibase';
import groupsData from 'emojibase-data/meta/groups.json';
import styles from './styles.module.css';

const isBrowser = typeof location !== 'undefined';

const LOCALES = [
  { value: 'da', label: 'Danish' },
  { value: 'de', label: 'German' },
  { value: 'en-gb', label: 'English, Great Britain' },
  { value: 'en', label: 'English' },
  { value: 'es-mx', label: 'Spanish, Mexico' },
  { value: 'es', label: 'Spanish' },
  { value: 'et', label: 'Estonian' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr', label: 'French' },
  { value: 'hu', label: 'Hungarian' },
  { value: 'it', label: 'Italian' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'lt', label: 'Lithuanian' },
  { value: 'ms', label: 'Malay' },
  { value: 'nb', label: 'Norwegian, Bokmål' },
  { value: 'nl', label: 'Dutch' },
  { value: 'pl', label: 'Polish' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ru', label: 'Russian' },
  { value: 'sv', label: 'Swedish' },
  { value: 'th', label: 'Thai' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'zh-hant', label: 'Chinese, Traditional' },
  { value: 'zh', label: 'Chinese' },
].sort((a, b) => a.label.localeCompare(b.label));

const PRESETS = [
  { value: 'cldr', label: 'CLDR' },
  { value: 'cldr-native', label: 'CLDR (native)' },
  { value: 'joypixels', label: 'Discord' },
  { value: 'emojibase', label: 'Emojibase' },
  { value: 'emojibase-legacy', label: 'Emojibase (legacy)' },
  { value: 'github', label: 'GitHub' },
  { value: 'iamcal', label: 'Slack' },
];

export function updateUrlFragment(query: URLSearchParams) {
  if (isBrowser) {
    history.pushState(
      {},
      document.title,
      `${location.origin}${location.pathname}?${query.toString()}`,
    );
  }
}

export function processEmojis(
  emojis: Emoji[],
  { filter, group, subgroup, skinTones }: FilterFields,
): Emoji[] {
  const list: Emoji[] = [];

  emojis.forEach((emoji) => {
    if (group >= 0 && emoji.group !== group) {
      return;
    }

    if (subgroup >= 0 && emoji.subgroup !== subgroup) {
      return;
    }

    if (filter) {
      const matchesAnnotation = emoji.annotation.toLocaleLowerCase().includes(filter);
      const matchesAnyShortcodes = emoji.shortcodes?.some((shortcode) =>
        shortcode.toLocaleLowerCase().includes(filter),
      );
      const matchesAnyTags = emoji.tags?.some((tag) => tag.toLocaleLowerCase().includes(filter));

      if (!matchesAnnotation && !matchesAnyShortcodes && !matchesAnyTags) {
        return;
      }
    }

    list.push(emoji);

    if (skinTones && emoji.skins) {
      list.push(...emoji.skins);
    }
  });

  list.sort((a, b) => a.order - b.order);

  return list;
}

export interface FilterFields {
  filter: string;
  locale: Locale;
  group: number;
  subgroup: number;
  skinTones: boolean;
  shortcodes: string[];
}

export interface FilterProps {
  disabled?: boolean;
  onChange: (fields: FilterFields) => void;
}

export default function Filters({ disabled = false, onChange }: FilterProps) {
  const query = new URLSearchParams(isBrowser ? location.search : '');
  const [filter, setFilter] = useState(query.get('filter') ?? '');
  const [locale, setLocale] = useState<Locale>(query.get('locale') ?? 'en');
  const [group, setGroup] = useState(Number(query.get('group') ?? -1));
  const [subgroup, setSubgroup] = useState(Number(query.get('subgroup') ?? -1));
  const [skinTones, setSkinTones] = useState(Boolean(query.get('skinTones') ?? false));
  const [shortcodes, setShortcodes] = useState(
    decodeURIComponent(query.get('shortcodes') ?? 'emojibase')
      .split(',')
      .filter(Boolean),
  );

  const emitChange = (fields: Partial<FilterFields> = {}) => {
    updateUrlFragment(query);

    onChange({
      filter,
      locale,
      group,
      subgroup,
      skinTones,
      shortcodes,
      ...fields,
    });
  };

  // Emit on mount so that consumers can utilize the data
  useEffect(() => {
    emitChange();
  }, []);

  const handleFilterChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    query.set('filter', value);
    setFilter(value);
    emitChange({ filter: value });
  };

  const handleLocaleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;

    query.set('locale', value);
    setLocale(value);
    emitChange({ locale: value });
  };

  const handleGroupChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = Number(event.currentTarget.value);

    query.set('group', String(value));
    query.set('subgroup', '-1');
    setGroup(value);
    setSubgroup(-1);
    emitChange({ group: value, subgroup: -1 });
  };

  const handleSubgroupChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = Number(event.currentTarget.value);

    query.set('subgroup', String(value));
    setSubgroup(value);
    emitChange({ subgroup: value });
  };

  const handleSkinToneChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;

    query.set('skinTones', String(checked));
    setSkinTones(checked);
    emitChange({ skinTones: checked });
  };

  const handleShortcodePresetChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget;

    setShortcodes((prev) => {
      const next = new Set(prev);

      if (checked) {
        next.add(value);
      } else {
        next.delete(value);
      }

      const presets = Array.from(next);

      query.set('shortcodes', encodeURIComponent(presets.join(',')));
      emitChange({ shortcodes: presets });

      return presets;
    });
  };

  return (
    <div className={styles.browserFilters}>
      <div className="row">
        <div className="col col--3">
          <label htmlFor="filter">Filter</label>

          <input
            type="text"
            id="filter"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
            disabled={disabled}
          />
        </div>

        <div className="col col--3">
          <label htmlFor="locale">Locale</label>

          <select
            id="locale"
            name="locale"
            value={locale}
            onChange={handleLocaleChange}
            disabled={disabled}
          >
            {LOCALES.map((row) => (
              <option key={row.value} value={row.value}>
                {row.label} ({row.value})
              </option>
            ))}
          </select>
        </div>

        <div className="col col--3">
          <label htmlFor="group">Group</label>

          <select
            id="group"
            name="group"
            value={group}
            onChange={handleGroupChange}
            disabled={disabled}
          >
            <option value="-1">(none)</option>

            {Object.entries(groupsData.groups).map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="col col--3">
          <label htmlFor="subgroup">Subgroup</label>

          <select
            id="subgroup"
            name="subgroup"
            value={subgroup}
            onChange={handleSubgroupChange}
            disabled={disabled || !groupsData.hierarchy[group]}
          >
            <option value="-1">(none)</option>

            {(groupsData.hierarchy[group] || []).map((id) => (
              <option key={id} value={id}>
                {groupsData.subgroups[id]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col col--3">
          <h4>Skin tones</h4>

          <label htmlFor="skinTones" className="label--inline">
            <input
              type="checkbox"
              id="skinTones"
              name="skinTones"
              checked={skinTones}
              onChange={handleSkinToneChange}
              disabled={disabled}
            />{' '}
            Display variations?
          </label>
        </div>

        <div className="col col-9">
          <h4>Shortcode presets</h4>

          {PRESETS.map((preset) => (
            <label key={preset.value} htmlFor={`preset-${preset.value}`} className="label--inline">
              <input
                type="checkbox"
                id={`preset-${preset.value}`}
                name="presets"
                value={preset.value}
                checked={shortcodes.includes(preset.value)}
                onChange={handleShortcodePresetChange}
                disabled={disabled}
              />{' '}
              {preset.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
