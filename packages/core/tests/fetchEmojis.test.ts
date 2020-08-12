import fetchEmojis from '../src/fetchEmojis';
import { setupFetch } from './helpers';

describe('fetchEmojis()', () => {
  beforeEach(() => {
    setupFetch();
  });

  it('triggers a fetch', async () => {
    await fetchEmojis('de');

    expect(global.fetch).toHaveBeenCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@latest/de/data.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: 'error',
      },
    );
  });

  it('triggers a fetch (compact)', async () => {
    await fetchEmojis('ko', { compact: true, version: '1.2.3' });

    expect(global.fetch).toHaveBeenCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@1.2.3/ko/compact.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: 'error',
      },
    );
  });
});
