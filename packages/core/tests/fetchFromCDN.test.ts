import fetchFromCDN from '../src/fetchFromCDN';

describe('fetchFromCDN()', () => {
  beforeEach(() => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([1, 2, 3]),
        ok: true,
      }),
    );

    window.sessionStorage.getItem = jest.fn();
    window.sessionStorage.setItem = jest.fn();

    window.localStorage.getItem = jest.fn();
    window.localStorage.setItem = jest.fn();
  });

  it('errors if no path', () => {
    // @ts-ignore
    expect(() => fetchFromCDN()).toThrowError('A valid JSON dataset is required to fetch.');
  });

  it('errors if path doesnt end in JSON', () => {
    expect(() => fetchFromCDN('en/data')).toThrowError(
      'A valid JSON dataset is required to fetch.',
    );
  });

  it('errors if no version', () => {
    expect(() => fetchFromCDN('en/data.json', '')).toThrowError(
      'A valid release version is required.',
    );
  });

  it('errors if response is not ok', async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    );

    try {
      await fetchFromCDN('en/data.json');
    } catch (error) {
      expect(error).toEqual(new Error('Failed to load Emojibase dataset.'));
    }
  });

  it('returns the value from session storage', async () => {
    window.sessionStorage.getItem = jest.fn(() => JSON.stringify([1, 2, 3, 4, 5]));

    const data = await fetchFromCDN('en/data.json');

    expect(data).toEqual([1, 2, 3, 4, 5]);
  });

  it('triggers a fetch', async () => {
    await fetchFromCDN('en/data.json');

    expect(window.fetch).toBeCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/data.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: 'error',
      },
    );
  });

  it('can customize fetch', async () => {
    await fetchFromCDN('ja/compact.json', '1.2.3', { redirect: 'follow' });

    expect(window.fetch).toBeCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@1.2.3/ja/compact.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: false,
      },
    );
  });

  it('returns data from fetch', async () => {
    const data = await fetchFromCDN('en/data.json');

    expect(data).toEqual([1, 2, 3]);
  });

  it('caches data to session storage', async () => {
    await fetchFromCDN('en/data.json');

    expect(window.sessionStorage.setItem).toBeCalledWith(
      'emojibase/latest/en/data.json',
      '[1,2,3]',
    );
  });

  it('caches data to local storage', async () => {
    await fetchFromCDN('en/data.json', 'latest', { local: true });

    expect(window.localStorage.setItem).toBeCalledWith('emojibase/latest/en/data.json', '[1,2,3]');
  });
});
