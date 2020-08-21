import 'url-search-params-polyfill';
import React, { useState, useEffect, useCallback } from 'react';
import { Locale, Emoji, ShortcodePreset } from 'emojibase';
import groupsData from 'emojibase-data/meta/groups.json';
import debounce from 'lodash/debounce';
import styles from './styles.module.css';

const isBrowser = typeof location !== 'undefined';

export const LOCALES: { [K in Locale]: string } = {
  da: 'Danish',
  de: 'German',
  'en-gb': 'English, Great Britain',
  en: 'English',
  'es-mx': 'Spanish, Mexico',
  es: 'Spanish',
  et: 'Estonian',
  fi: 'Finnish',
  fr: 'French',
  hu: 'Hungarian',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  lt: 'Lithuanian',
  ms: 'Malay',
  nb: 'Norwegian, Bokmål',
  nl: 'Dutch',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  sv: 'Swedish',
  th: 'Thai',
  uk: 'Ukrainian',
  'zh-hant': 'Chinese, Traditional',
  zh: 'Chinese',
};

// .sort((a, b) => a.label.localeCompare(b.label));

export const PRESETS: { [K in ShortcodePreset]?: string } = {
  cldr: 'CLDR',
  'cldr-native': 'CLDR (native)',
  emojibase: 'Emojibase',
  'emojibase-legacy': 'Emojibase (legacy)',
  github: 'GitHub',
  iamcal: 'IamCal (Slack)',
  joypixels: 'JoyPixels (Discord)',
};

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

  list.sort((a, b) => (a.order || -1) - (b.order || -1));

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
  defaultShortcodes?: ShortcodePreset[];
  disabled?: boolean;
  hideCldr?: boolean;
  onChange: (fields: FilterFields) => void;
}

export default function Filters({
  defaultShortcodes = ['emojibase'],
  disabled = false,
  hideCldr = false,
  onChange,
}: FilterProps) {
  const query = new URLSearchParams(isBrowser ? location.search : '');
  const [filter, setFilter] = useState(query.get('filter') ?? '');
  const [locale, setLocale] = useState(query.get('locale') ?? 'en');
  const [group, setGroup] = useState(Number(query.get('group') ?? -1));
  const [subgroup, setSubgroup] = useState(Number(query.get('subgroup') ?? -1));
  const [skinTones, setSkinTones] = useState(Boolean(query.get('skinTones') ?? false));
  const [shortcodes, setShortcodes] = useState(
    decodeURIComponent(query.get('shortcodes') ?? defaultShortcodes.join(','))
      .split(',')
      .filter(Boolean),
  );

  const emitChange = (fields: Partial<FilterFields> = {}) => {
    updateUrlFragment(query);

    onChange({
      filter,
      locale: locale as Locale,
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

  const doFilterChange = debounce((value: string) => {
    query.set('filter', value);
    emitChange({ filter: value });
  }, 350);

  const handleFilterChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    event.persist();

    const { value } = event.currentTarget;

    setFilter(value);
    doFilterChange(value);
  }, []);

  const handleLocaleChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;

    query.set('locale', value);
    setLocale(value);
    emitChange({ locale: value as Locale });
  }, []);

  const handleGroupChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    const value = Number(event.currentTarget.value);

    query.set('group', String(value));
    query.set('subgroup', '-1');
    setGroup(value);
    setSubgroup(-1);
    emitChange({ group: value, subgroup: -1 });
  }, []);

  const handleSubgroupChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    const value = Number(event.currentTarget.value);

    query.set('subgroup', String(value));
    setSubgroup(value);
    emitChange({ subgroup: value });
  }, []);

  const handleSkinToneChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;

    query.set('skinTones', String(checked));
    setSkinTones(checked);
    emitChange({ skinTones: checked });
  }, []);

  const handleShortcodePresetChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
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
  }, []);

  return (
    <div className={styles.browserFilters}>
      <div className="row">
        <div className="col col--3">
          <label htmlFor="filter">Annotation</label>

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
            {Object.entries(LOCALES).map(([value, label]) => (
              <option key={value} value={value}>
                {label} ({value})
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

          {Object.entries(PRESETS).map(([value, label]) => {
            if (value.includes('cldr') && hideCldr) {
              return null;
            }

            return (
              <label key={value} htmlFor={`preset-${value}`} className="label--inline">
                <input
                  type="checkbox"
                  id={`preset-${value}`}
                  name="presets"
                  value={value}
                  checked={shortcodes.includes(value)}
                  onChange={handleShortcodePresetChange}
                  disabled={disabled}
                />{' '}
                {label}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
