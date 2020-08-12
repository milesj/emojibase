/* eslint-disable @typescript-eslint/no-namespace */

// @ts-expect-error
import regeneratorRuntime from 'regenerator-runtime';
import fetchFromCDN from '../src/fetchFromCDN';

declare global {
  namespace NodeJS {
    interface Global {
      fetch: any;
      sessionStorage: any;
      localStorage: any;
      regeneratorRuntime: any;
    }
  }
}

global.regeneratorRuntime = regeneratorRuntime;

describe('fetchFromCDN()', () => {
  beforeEach(() => {
    Object.defineProperty(global, 'fetch', {
      value: jest.fn(() =>
        Promise.resolve({
          json: () => [1, 2, 3],
          ok: true,
        }),
      ),
      configurable: true,
    });

    Object.defineProperty(global, 'sessionStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      configurable: true,
    });

    Object.defineProperty(global, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      configurable: true,
    });
  });

  it('errors if no path', () => {
    // @ts-expect-error
    expect(() => fetchFromCDN()).toThrow('A valid JSON dataset is required to fetch.');
  });

  it('errors if path doesnt end in JSON', () => {
    expect(() => fetchFromCDN('en/data')).toThrow('A valid JSON dataset is required to fetch.');
  });

  it('errors if no version', () => {
    expect(() => fetchFromCDN('en/data.json', { version: '' })).toThrow(
      'A valid release version is required.',
    );
  });

  it('errors if response is not ok', async () => {
    Object.defineProperty(global, 'fetch', {
      value: jest.fn(() =>
        Promise.resolve({
          ok: false,
        }),
      ),
      configurable: true,
    });

    try {
      await fetchFromCDN('en/data.json');
    } catch (error) {
      expect(error).toEqual(new Error('Failed to load Emojibase dataset.'));
    }
  });

  it('returns the value from session storage', async () => {
    global.sessionStorage.getItem.mockImplementation(() => JSON.stringify([1, 2, 3, 4, 5]));

    const data = await fetchFromCDN('en/data.json');

    expect(data).toEqual([1, 2, 3, 4, 5]);

    global.sessionStorage.getItem.mockReset();
  });

  it('triggers a fetch', async () => {
    await fetchFromCDN('en/data.json');

    expect(global.fetch).toHaveBeenCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/data.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: 'error',
      },
    );
  });

  it('can customize fetch', async () => {
    await fetchFromCDN('ja/compact.json', { redirect: 'follow', version: '1.2.3' });

    expect(global.fetch).toHaveBeenCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@1.2.3/ja/compact.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: 'follow',
      },
    );
  });

  it('returns data from fetch', async () => {
    const data = await fetchFromCDN('en/data.json');

    expect(data).toEqual([1, 2, 3]);
  });

  it('caches data to session storage', async () => {
    await fetchFromCDN('en/data.json');

    expect(global.sessionStorage.setItem).toHaveBeenCalledWith(
      'emojibase/latest/en/data.json',
      '[1,2,3]',
    );
  });

  it('caches data to local storage', async () => {
    await fetchFromCDN('en/data.json', { local: true });

    expect(global.localStorage.setItem).toHaveBeenCalledWith(
      'emojibase/latest/en/data.json',
      '[1,2,3]',
    );
  });
});
