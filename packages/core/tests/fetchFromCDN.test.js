import fetchFromCDN from '../src/fetchFromCDN';

describe('fetchFromCDN()', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([1, 2, 3]),
        ok: true,
      }),
    );

    global.sessionStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };

    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
  });

  it('errors if no path', () => {
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
    global.fetch = () =>
      Promise.resolve({
        ok: false,
      });

    try {
      await fetchFromCDN('en/data.json');
    } catch (error) {
      expect(error).toEqual(new Error('Failed to load Emojibase dataset.'));
    }
  });

  it('returns the value from session storage', async () => {
    global.sessionStorage.getItem = jest.fn(() => JSON.stringify([1, 2, 3, 4, 5]));

    const data = await fetchFromCDN('en/data.json');

    expect(data).toEqual([1, 2, 3, 4, 5]);
  });

  it('triggers a fetch', async () => {
    await fetchFromCDN('en/data.json');

    expect(global.fetch).toBeCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/data.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: 'error',
      },
    );
  });

  it('can customize fetch', async () => {
    await fetchFromCDN('ja/compact.json', '1.2.3', { redirect: false });

    expect(global.fetch).toBeCalledWith(
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

    expect(global.sessionStorage.setItem).toBeCalledWith(
      'emojibase/latest/en/data.json',
      '[1,2,3]',
    );
  });

  it('caches data to local storage', async () => {
    await fetchFromCDN('en/data.json', 'latest', { local: true });

    expect(global.localStorage.setItem).toBeCalledWith('emojibase/latest/en/data.json', '[1,2,3]');
  });
});
