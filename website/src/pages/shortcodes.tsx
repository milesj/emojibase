import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Emoji, fetchEmojis, ShortcodesDataset, fetchShortcodes } from 'emojibase';
import Shortcodes from '../components/Shortcodes';

function noop<T>(value: T): T {
  return value;
}

export default function ShortcodesTable() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [cldr, setCldr] = useState<ShortcodesDataset>({});
  const [emojibase, setEmojibase] = useState<ShortcodesDataset>({});
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
      setCldr(b);
      setEmojibase(c);
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
      <main className="table-container">
        <h2>Shortcodes table</h2>

        <div className="table-responsive">
          <table>
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
                <th />
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={8} className="text--center">
                    Loading emojis…
                  </td>
                </tr>
              )}

              {!loading && (
                <>
                  <tr>
                    <td colSpan={8} className="text--center">
                      {emojis.length.toLocaleString()} emojis
                    </td>
                  </tr>

                  {emojis.map((emoji) => (
                    <tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
                      <td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
                      <td>
                        <div>{emoji.annotation}</div>
                        <div className="text--muted no-wrap">{emoji.hexcode}</div>
                      </td>
                      <td>
                        <Shortcodes preset="cldr" shortcodes={cldr[emoji.hexcode]} />
                      </td>
                      <td>
                        <Shortcodes preset="emojibase" shortcodes={emojibase[emoji.hexcode]} />
                      </td>
                      <td>
                        <Shortcodes preset="github" shortcodes={github[emoji.hexcode]} />
                      </td>
                      <td>
                        <Shortcodes preset="iamcal" shortcodes={iamcal[emoji.hexcode]} />
                      </td>
                      <td>
                        <Shortcodes preset="joypixels" shortcodes={joyPixels[emoji.hexcode]} />
                      </td>
                      <td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
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
