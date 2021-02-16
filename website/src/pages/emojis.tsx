import React, { useState, useCallback } from 'react';
import Layout from '@theme/Layout';
import { fetchEmojis, Emoji } from '../../../packages/core';
import Shortcodes from '../components/Shortcodes';
import Filters, { FilterFields, processEmojis } from '../components/Filters';

export default function EmojiList() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = useCallback(async (fields: FilterFields) => {
    const { locale, shortcodePresets } = fields;

    if (loading) {
      return;
    }

    setLoading(true);

    const data = await fetchEmojis(locale, {
      shortcodes: shortcodePresets.map((preset) =>
        preset.includes('cldr') ? preset : `en/${preset}`,
      ),
      version: 'next',
    });

    setEmojis(processEmojis(data, fields));
    setLoading(false);
  }, []);

  return (
    <Layout title="Emoji table" description="Table of all emojis across any supported locale.">
      <main className="table-container">
        <h2>Emoji table</h2>

        <Filters disabled={loading} onChange={handleFilterChange} />

        <div className="table-responsive">
          <table>
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
                  <tr>
                    <td colSpan={4} className="text--center">
                      {emojis.length.toLocaleString()} emojis
                    </td>
                  </tr>

                  {emojis.map((emoji) => (
                    <tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
                      <td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
                      <td>
                        {emoji.annotation}

                        {emoji.emoticon && <span className="text--muted"> {emoji.emoticon}</span>}
                      </td>
                      <td>
                        <Shortcodes preset="emojibase" shortcodes={emoji.shortcodes} />
                      </td>
                      <td>{emoji.tags?.join(', ')}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
