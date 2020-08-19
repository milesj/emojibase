import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Emoji, fetchEmojis, ShortcodesDataset, fetchShortcodes, ShortcodePreset } from 'emojibase';
import cldrDataset from '../../../packages/data/en/shortcodes/cldr.raw.json';
import emojibaseDataset from '../../../packages/data/en/shortcodes/emojibase.raw.json';

function noop<T>(value: T): T {
  return value;
}

function renderShortcode(preset: ShortcodePreset, shortcode: string | string[] | undefined) {
  if (!shortcode) {
    return null;
  }

  return (
    <>
      {(Array.isArray(shortcode) ? shortcode : [shortcode]).map((s) => (
        <div key={`${preset}-${s}`}>{`:${s}:`}</div>
      ))}
    </>
  );
}

export default function Shortcodes() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [cldr, setCldr] = useState<ShortcodesDataset>(cldrDataset);
  const [emojibase, setEmojibase] = useState<ShortcodesDataset>(emojibaseDataset);
  const [github, setGithub] = useState<ShortcodesDataset>({});
  const [iamcal, setIamcal] = useState<ShortcodesDataset>({});
  const [joyPixels, setJoyPixels] = useState<ShortcodesDataset>({});
  const [loading, setLoading] = useState(true);
  const version = 'next';

  useEffect(() => {
    Promise.all([
      fetchEmojis('en', { flat: true, version }).catch(noop),
      fetchShortcodes('en', 'cldr', { version }).catch(noop),
      fetchShortcodes('en', 'emojibase', { version }).catch(noop),
      fetchShortcodes('en', 'github', { version }).catch(noop),
      fetchShortcodes('en', 'iamcal', { version }).catch(noop),
    ]).then(([a, b, c, d, e]) => {
      setEmojis(a);
      // setCldr(b);
      // setEmojibase(c);
      setGithub(d);
      setIamcal(e);
      setLoading(false);
    });
  }, []);

  return (
    <Layout
      title="Shortcodes table"
      description="List of all shortcodes for every emoji character."
    >
      <main style={{ padding: '2rem' }}>
        <h2>Shortcodes table</h2>

        <table style={{ maxWidth: '100%' }}>
          <thead>
            <tr>
              <th colSpan={2} />
              <th>CLDR</th>
              <th>Emojibase</th>
              <th>Github</th>
              <th>
                IamCal <small>(Slack)</small>
              </th>
              <th>
                JoyPixels <small>(Discord)</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={7} className="text--center">
                  Loading emojis…
                </td>
              </tr>
            )}

            {!loading && (
              <>
                <tr>
                  <td colSpan={7} className="text--center">
                    {emojis.length.toLocaleString()} emojis
                  </td>
                </tr>

                {emojis.map((emoji) => (
                  <tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
                    <td className="text--center">{emoji.emoji || emoji.text}</td>
                    <td>
                      <div>{emoji.annotation}</div>
                      <div className="text--muted no-wrap">{emoji.hexcode}</div>
                    </td>
                    <td>{renderShortcode('cldr', cldr[emoji.hexcode])}</td>
                    <td>{renderShortcode('emojibase', emojibase[emoji.hexcode])}</td>
                    <td>{renderShortcode('github', github[emoji.hexcode])}</td>
                    <td>{renderShortcode('iamcal', iamcal[emoji.hexcode])}</td>
                    <td>{renderShortcode('joypixels', joyPixels[emoji.hexcode])}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
