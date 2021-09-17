import fetchMock from 'fetch-mock-jest';
import { fetchMessages } from '../src/fetchMessages';
import { setupStorage } from './helpers';

describe('fetchMessages()', () => {
	beforeEach(() => {
		setupStorage();

		fetchMock.mock('*', { groups: [], subgroups: [] });
	});

	afterEach(() => {
		fetchMock.reset();
	});

	it('triggers a fetch', async () => {
		await fetchMessages('de');

		expect(fetchMock).toHaveBeenCalledWith(
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/de/messages.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'error',
			},
		);
	});
});
