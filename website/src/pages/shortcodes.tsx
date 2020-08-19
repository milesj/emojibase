import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Emoji, fetchEmojis, ShortcodesDataset, fetchShortcodes } from 'emojibase';

function renderShortcode(shortcode: string | string[] | undefined) {
  if (!shortcode) {
    return null;
  }

  return (
    <>{(Array.isArray(shortcode) ? shortcode : [shortcode]).map((s) => `:${s}:`).join(', ')}</>
  );
}

export default function Shortcodes() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [cldr, setCldr] = useState<ShortcodesDataset>({});
  const [cldrNative, setCldrNative] = useState<ShortcodesDataset>({});
  const [cldrNative, setCldrNative] = useState<ShortcodesDataset>({});

  useEffect(() => {
    fetchEmojis('en', { flat: true }).then(setEmojis);
    fetchShortcodes('en', 'cldr').then(setCldr);
    fetchShortcodes('en', 'cldr-native').then(setCldrNative);
  }, []);

  return (
    <Layout
      title="Shortcodes table"
      description="List of all shortcodes for every emoji character."
    >
      <main style={{ padding: '2rem' }}>
        <table>
          <thead>
            <tr>
              <th />
              <th>CLDR</th>
              <th>
                CLDR <small>(native)</small>
              </th>
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
            <tr>
              <td colSpan={7} className="text--center">
                {emojis.length.toLocaleString()} emojis
              </td>
            </tr>

            {emojis.map((emoji) => (
              <tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
                <td className="text--center">{emoji.emoji || emoji.text}</td>
                <td>{renderShortcode(cldr[emoji.hexcode])}</td>
                <td>{renderShortcode(cldrNative[emoji.hexcode])}</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
