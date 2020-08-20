import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Emoji, fetchEmojis, ShortcodesDataset, fetchShortcodes } from 'emojibase';
import Shortcodes from '../components/Shortcodes';
// import cldrDataset from '../../../packages/data/en/shortcodes/cldr.raw.json';
// import emojibaseDataset from '../../../packages/data/en/shortcodes/emojibase.raw.json';
// import emojibaseLegacyDataset from '../../../packages/data/en/shortcodes/emojibase-legacy.raw.json';
// import githubDataset from '../../../packages/data/en/shortcodes/github.raw.json';
// import iamcalDataset from '../../../packages/data/en/shortcodes/iamcal.raw.json';
// import joypixelsDataset from '../../../packages/data/en/shortcodes/joypixels.raw.json';

function noop<T>(value: T): T {
  return value;
}

function isAllSameShortcodes(...shortcodes: (string | string[])[]) {
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
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [cldr, setCldr] = useState<ShortcodesDataset>({});
  const [emojibase, setEmojibase] = useState<ShortcodesDataset>({});
  const [emojibaseLegacy, setEmojibaseLegacy] = useState<ShortcodesDataset>({});
  const [github, setGithub] = useState<ShortcodesDataset>({});
  const [iamcal, setIamcal] = useState<ShortcodesDataset>({});
  const [joyPixels, setJoyPixels] = useState<ShortcodesDataset>({});
  const [loading, setLoading] = useState(true);
  const version = 'next';

  useEffect(() => {
    let mounted = true;

    Promise.all([
      fetchEmojis('en', { flat: true, version }).catch(noop),
      fetchShortcodes('en', 'cldr', { version }).catch(noop),
      fetchShortcodes('en', 'emojibase', { version }).catch(noop),
      fetchShortcodes('en', 'emojibase-legacy', { version }).catch(noop),
      fetchShortcodes('en', 'github', { version }).catch(noop),
      fetchShortcodes('en', 'iamcal', { version }).catch(noop),
      fetchShortcodes('en', 'joypixels', { version }).catch(noop),
    ]).then(([a, b, c, d, e, f, g]) => {
      if (!mounted) {
        return;
      }

      setEmojis(a);
      setCldr(b);
      setEmojibase(c);
      setEmojibaseLegacy(d);
      setGithub(e);
      setIamcal(f);
      setJoyPixels(g);
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
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
                <th>
                  Emojibase <small>(Legacy)</small>
                </th>
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

                  {emojis.map((emoji) => {
                    const isAllSame = isAllSameShortcodes(
                      emojibase[emoji.hexcode],
                      emojibaseLegacy[emoji.hexcode],
                      github[emoji.hexcode],
                      iamcal[emoji.hexcode],
                      joyPixels[emoji.hexcode],
                    );

                    return (
                      <tr key={emoji.hexcode} data-hexcode={emoji.hexcode}>
                        <td className="text--center emoji--large">{emoji.emoji || emoji.text}</td>
                        <td>
                          <div>{emoji.annotation}</div>
                          <div className="text--muted no-wrap">{emoji.hexcode}</div>
                        </td>
                        <td>
                          <Shortcodes preset="cldr" shortcodes={cldr[emoji.hexcode]} />
                        </td>
                        {isAllSame ? (
                          <td colSpan={5}>
                            <Shortcodes preset="emojibase" shortcodes={emojibase[emoji.hexcode]} />
                          </td>
                        ) : (
                          <>
                            <td>
                              <Shortcodes
                                preset="emojibase"
                                shortcodes={emojibase[emoji.hexcode]}
                              />
                            </td>
                            <td>
                              <Shortcodes
                                preset="emojibase-legacy"
                                shortcodes={emojibaseLegacy[emoji.hexcode]}
                              />
                            </td>
                            <td>
                              <Shortcodes preset="github" shortcodes={github[emoji.hexcode]} />
                            </td>
                            <td>
                              <Shortcodes preset="iamcal" shortcodes={iamcal[emoji.hexcode]} />
                            </td>
                            <td>
                              <Shortcodes
                                preset="joypixels"
                                shortcodes={joyPixels[emoji.hexcode]}
                              />
                            </td>
                          </>
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
