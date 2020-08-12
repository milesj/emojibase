import fetchMock from 'fetch-mock-jest';
import fetchShortcodes from '../src/fetchShortcodes';
import { setupStorage } from './helpers';

describe('fetchShortcodes()', () => {
  beforeEach(() => {
    setupStorage();

    fetchMock.mock('*', { '0000': 'shortcode' });
  });

  afterEach(() => {
    fetchMock.reset();
  });

  it('triggers a fetch', async () => {
    await fetchShortcodes('de', 'cldr');

    expect(fetchMock).toHaveBeenCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@latest/de/shortcodes/cldr.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: 'error',
      },
    );
  });

  it('returns an empty dataset for `cldr-native` and an invalid locale', async () => {
    const res1 = await fetchShortcodes('ja', 'cldr-native');

    expect(res1).not.toEqual({});

    const res2 = await fetchShortcodes('en', 'cldr-native');

    expect(res2).toEqual({});
  });
});
