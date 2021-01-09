import fetchMock from 'fetch-mock-jest';
import fetchMetadata from '../src/fetchMetadata';
import { setupStorage } from './helpers';

describe('fetchMetadata()', () => {
  beforeEach(() => {
    setupStorage();

    fetchMock.mock('*', { groups: [], subgroups: [] });
  });

  afterEach(() => {
    fetchMock.reset();
  });

  it('triggers a fetch', async () => {
    await fetchMetadata('de');

    expect(fetchMock).toHaveBeenCalledWith(
      'https://cdn.jsdelivr.net/npm/emojibase-data@latest/de/meta.json',
      {
        credentials: 'omit',
        mode: 'cors',
        redirect: 'error',
      },
    );
  });
});
