import React, { useEffect, useState } from 'react';
import { fetchFromCDN, Emoji } from 'emojibase';
import groupsData from 'emojibase-data/meta/groups.json';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

const LOCALES = [
  { value: 'zh', label: 'Chinese (zh)' },
  { value: 'zh-hant', label: 'Chinese, Traditional (zh-hant)' },
  { value: 'da', label: 'Danish (da)' },
  { value: 'nl', label: 'Dutch (nl)' },
  { value: 'en', label: 'English (en)' },
  { value: 'en-gb', label: 'English, Great Britain (en-gb)' },
  { value: 'fr', label: 'French (fr)' },
  { value: 'de', label: 'German (de)' },
  { value: 'it', label: 'Italian (it)' },
  { value: 'ja', label: 'Japanese (ja)' },
  { value: 'ko', label: 'Korean (ko)' },
  { value: 'ms', label: 'Malay (ms)' },
  { value: 'pl', label: 'Polish (pl)' },
  { value: 'pt', label: 'Portuguese (pt)' },
  { value: 'ru', label: 'Russian (ru)' },
  { value: 'es', label: 'Spanish (es)' },
  { value: 'es-mx', label: 'Spanish, Mexico (es-mx)' },
  { value: 'sv', label: 'Swedish (sv)' },
  { value: 'th', label: 'Thai (th)' },
];

function filterAndSortEmojis(
  emojis: Emoji[],
  filter: string,
  group: number,
  subgroup: number,
): Emoji[] {
  return emojis
    .filter((emoji) => {
      if (group >= 0 && emoji.group !== group) {
        return false;
      }

      if (subgroup >= 0 && emoji.subgroup !== subgroup) {
        return false;
      }

      if (filter) {
        const matchesAnnotation = emoji.annotation.toLocaleLowerCase().includes(filter);
        const matchesAnyShortcode =
          emoji.shortcodes
            .map((shortcode) => shortcode.toLocaleLowerCase().includes(filter))
            .indexOf(true) > -1;
        const matchesAnyTags =
          emoji.tags.map((tag) => tag.toLocaleLowerCase().includes(filter)).indexOf(true) > -1;

        return matchesAnnotation || matchesAnyShortcode || matchesAnyTags;
      }

      return true;
    })
    .sort((a, b) => a.order - b.order);
}

export default function Browser() {
  const [filter, setFilter] = useState('');
  const [locale, setLocale] = useState('en');
  const [group, setGroup] = useState(-1);
  const [subgroup, setSubgroup] = useState(-1);
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchFromCDN<Emoji>(`${locale}/data.json`)
      .then((data) => {
        setEmojis(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [locale]);

  const handleFilterChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const handleLocaleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setLocale(event.currentTarget.value);
  };

  const handleGroupChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setGroup(Number(event.currentTarget.value));
    setSubgroup(-1);
  };

  const handleSubgroupChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setSubgroup(Number(event.currentTarget.value));
  };

  const list = filterAndSortEmojis(emojis, filter.toLocaleLowerCase(), group, subgroup);

  return (
    <Layout title="Emoji browser" description="Browse all emojis across any supported locale.">
      <main>
        <div className="container">
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
                  disabled={loading}
                />
              </div>

              <div className="col col--3">
                <label htmlFor="locale">Locale</label>

                <select
                  id="locale"
                  name="locale"
                  value={locale}
                  onChange={handleLocaleChange}
                  disabled={loading}
                >
                  {LOCALES.map((row) => (
                    <option key={row.value} value={row.value}>
                      {row.label}
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
                  disabled={loading}
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
                  disabled={loading || !groupsData.hierarchy[group]}
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
          </div>

          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th />
                <th>Annotation</th>
                <th>Shortcodes</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={4} className="text--center">
                    Loading emojis…
                  </td>
                </tr>
              )}

              {!loading && (
                <>
                  {list.length > 0 ? (
                    list.map((emoji) => (
                      <tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
                        <td className="text--center">{emoji.emoji || emoji.text}</td>
                        <td>{emoji.annotation}</td>
                        <td>{emoji.shortcodes.map((s) => `:${s}:`).join(', ')}</td>
                        <td>{emoji.tags.join(', ')}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text--center">
                        No results found.
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
