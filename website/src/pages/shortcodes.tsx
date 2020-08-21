import React, { useCallback, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Emoji, fetchEmojis, ShortcodesDataset, fetchShortcodes, ShortcodePreset } from 'emojibase';
import Shortcodes from '../components/Shortcodes';
import Filters, { FilterFields, processEmojis, PRESETS } from '../components/Filters';
// import cldrDataset from '../../../packages/data/en/shortcodes/cldr.raw.json';
// import emojibaseDataset from '../../../packages/data/en/shortcodes/emojibase.raw.json';
// import emojibaseLegacyDataset from '../../../packages/data/en/shortcodes/emojibase-legacy.raw.json';
// import githubDataset from '../../../packages/data/en/shortcodes/github.raw.json';
// import iamcalDataset from '../../../packages/data/en/shortcodes/iamcal.raw.json';
// import joypixelsDataset from '../../../packages/data/en/shortcodes/joypixels.raw.json';

function noop<T>(value: T): T {
  return value;
}

function isAllSameShortcodes(shortcodes: (string | string[])[]) {
  let lastCode = '';

  for (const shortcode of shortcodes) {
    const code = Array.isArray(shortcode) ? shortcode.join(',') : shortcode;

    if (!lastCode) {
      lastCode = code;
    } else if (lastCode !== code) {
      return false;
    }
  }

  return true;
}

export default function ShortcodesTable() {
  const [loading, setLoading] = useState(false);
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [cldrShortcodes, setCldrShortcodes] = useState<ShortcodesDataset>({});
  const [shortcodes, setShortcodes] = useState<ShortcodesDataset[]>([]);
  const [presets, setPresets] = useState<ShortcodePreset[]>([
    'emojibase',
    'github',
    'iamcal',
    'joypixels',
  ]);

  const handleFilterChange = useCallback(async (fields: FilterFields) => {
    const { locale, shortcodes: nextPresets } = fields;

    if (loading) {
      return;
    }

    setLoading(true);

    const emojis = await fetchEmojis(locale, {
      shortcodes: presets,
      version: 'next',
    });

    const cldrDataset = await fetchShortcodes(locale, 'cldr', { version: 'next' }).catch(noop);

    const datasets = await Promise.all(
      nextPresets.map((preset) =>
        fetchShortcodes(locale, preset as ShortcodePreset, { version: 'next' }).catch(noop),
      ),
    );

    setEmojis(processEmojis(emojis, fields));
    setCldrShortcodes(cldrDataset);
    setShortcodes(datasets);
    setPresets(nextPresets as ShortcodePreset[]);
    setLoading(false);
  }, []);

  return (
    <Layout
      title="Shortcodes table"
      description="List of all shortcodes for every emoji character."
    >
      <main className="table-container">
        <h2>Shortcodes table</h2>

        <Filters
          hideCldr
          disabled={loading}
          defaultShortcodes={presets}
          onChange={handleFilterChange}
        />

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th colSpan={2} />
                <th>CLDR</th>
                {presets.map((preset) => (
                  <th>{PRESETS[preset]}</th>
                ))}
                <th />
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={4 + presets.length} className="text--center">
                    Loading emojis…
                  </td>
                </tr>
              )}

              {!loading && (
                <>
                  <tr>
                    <td colSpan={4 + presets.length} className="text--center">
                      {emojis.length.toLocaleString()} emojis
                    </td>
                  </tr>

                  {emojis.map((emoji) => {
                    const isAllSame = isAllSameShortcodes(
                      shortcodes.map((data) => data[emoji.hexcode]),
                    );

                    return (
                      <tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
                        <td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
                        <td>
                          <div>{emoji.annotation}</div>
                          <div className="text--muted no-wrap">{emoji.hexcode}</div>
                        </td>
                        <td>
                          <Shortcodes preset="cldr" shortcodes={cldrShortcodes[emoji.hexcode]} />
                        </td>
                        {isAllSame ? (
                          <td colSpan={presets.length}>
                            <Shortcodes
                              preset="emojibase"
                              shortcodes={shortcodes[0][emoji.hexcode]}
                            />
                          </td>
                        ) : (
                          presets.map((preset, i) => (
                            <td key={emoji.hexcode + preset}>
                              <Shortcodes
                                preset={preset}
                                shortcodes={shortcodes[i][emoji.hexcode]}
                              />
                            </td>
                          ))
                        )}
                        <td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
