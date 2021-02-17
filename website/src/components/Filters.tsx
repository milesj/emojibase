import 'url-search-params-polyfill';
import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import upperFirst from 'lodash/upperFirst';
import { Locale, Emoji, ShortcodePreset, GroupMeta, GroupDataset } from 'emojibase';
import metaTranslations from 'emojibase-data/en/meta.json';
import groupsMetaDataset from 'emojibase-data/meta/groups.json';
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
  { filter, genders, group, subgroup, skinTones }: FilterFields,
): Emoji[] {
  const list: Emoji[] = [];

  emojis.forEach((emoji) => {
    if (!genders && emoji.gender !== undefined) {
      return;
    }

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

  list.sort((a, b) => (a.order || 10000) - (b.order || 10000));

  return list;
}

type GroupLabels = Record<string, string>;

export function mapGroups(groups: GroupMeta[]): GroupLabels {
  const labels: GroupLabels = {};

  groups.forEach((item) => {
    labels[item.order] = item.message;
  });

  return labels;
}

export interface FilterFields {
  filter: string;
  locale: Locale;
  genders: boolean;
  group: number;
  subgroup: number;
  skinTones: boolean;
  shortcodePresets: ShortcodePreset[];
}

export interface FilterProps {
  defaultShortcodePresets?: ShortcodePreset[];
  disabled?: boolean;
  hideCldr?: boolean;
  onChange: (fields: FilterFields) => void;
}

const query = new URLSearchParams(isBrowser ? location.search : '');

export default function Filters({
  defaultShortcodePresets = ['emojibase'],
  disabled = false,
  hideCldr = false,
  onChange,
}: FilterProps) {
  const [inputFilter, setInputFilter] = useState(query.get('filter') ?? '');
  const [filter, setFilter] = useState(inputFilter);
  const [locale, setLocale] = useState<Locale>((query.get('locale') ?? 'en') as 'en');
  const [group, setGroup] = useState(Number(query.get('group') ?? -1));
  const [groupLabels] = useState<GroupLabels>(mapGroups(metaTranslations.groups));
  const [groupsMeta] = useState<GroupDataset>(groupsMetaDataset);
  const [subgroup, setSubgroup] = useState(Number(query.get('subgroup') ?? -1));
  const [subgroupLabels] = useState<GroupLabels>(mapGroups(metaTranslations.subgroups));
  const [genders, setGenders] = useState(query.get('genders') === 'true');
  const [skinTones, setSkinTones] = useState(query.get('skinTones') === 'true');
  const [shortcodePresets, setShortcodePresets] = useState<ShortcodePreset[]>(
    decodeURIComponent(query.get('shortcodePresets') ?? defaultShortcodePresets.join(','))
      .split(',')
      .filter(Boolean) as ShortcodePreset[],
  );

  useEffect(() => {
    updateUrlFragment(query);

    onChange({
      filter,
      locale,
      genders,
      group,
      subgroup,
      skinTones,
      shortcodePresets,
    });
  }, [filter, locale, genders, group, subgroup, skinTones, shortcodePresets]);

  const doFilterChange = debounce((value: string) => {
    query.set('filter', value);
    setFilter(value);
  }, 350);

  const handleFilterChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    event.persist();

    const { value } = event.currentTarget;

    setInputFilter(value);
    doFilterChange(value);
  }, []);

  const handleLocaleChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;

    query.set('locale', value);
    setLocale(value as Locale);
  }, []);

  const handleGroupChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    const value = Number(event.currentTarget.value);

    query.set('group', String(value));
    query.set('subgroup', '-1');
    setGroup(value);
    setSubgroup(-1);
  }, []);

  const handleSubgroupChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    const value = Number(event.currentTarget.value);

    query.set('subgroup', String(value));
    setSubgroup(value);
  }, []);

  const handleGenderChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;

    query.set('genders', String(checked));
    setGenders(checked);
  }, []);

  const handleSkinToneChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;

    query.set('skinTones', String(checked));
    setSkinTones(checked);
  }, []);

  const handleShortcodePresetChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget;

    setShortcodePresets((prev) => {
      const next = new Set(prev);

      if (checked) {
        next.add(value as ShortcodePreset);
      } else {
        next.delete(value as ShortcodePreset);
      }

      const presets = Array.from(next).sort();

      query.set('shortcodePresets', encodeURIComponent(presets.join(',')));

      return presets;
    });
  }, []);

  return (
    <div className={styles.browserFilters}>
      <div className="row">
        <div className="col col--3">
          <label htmlFor="filter">Annotation</label>

          <input
            type="search"
            id="filter"
            name="filter"
            value={inputFilter}
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
            {Object.entries(LOCALES)
              .sort((a, b) => a[1].localeCompare(b[1]))
              .map(([value, label]) => (
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

            {Object.keys(groupsMeta.groups).map((id) => (
              <option key={id} value={id}>
                {upperFirst(groupLabels[id])}
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
            disabled={disabled || !groupsMeta.hierarchy[group]}
          >
            <option value="-1">(none)</option>

            {(groupsMeta.hierarchy[group] || []).map((id) => (
              <option key={id} value={id}>
                {upperFirst(subgroupLabels[id])}
              </option>
            ))}
          </select>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col col--3">
          <h4>Display</h4>

          <label htmlFor="genders" className="label--inline">
            <input
              type="checkbox"
              id="genders"
              name="genders"
              checked={genders}
              onChange={handleGenderChange}
              disabled={disabled}
            />{' '}
            Genders?
          </label>

          <label htmlFor="skinTones" className="label--inline">
            <input
              type="checkbox"
              id="skinTones"
              name="skinTones"
              checked={skinTones}
              onChange={handleSkinToneChange}
              disabled={disabled}
            />{' '}
            Skin tones?
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
                  checked={shortcodePresets.includes(value as ShortcodePreset)}
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
