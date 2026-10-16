/**
 * @jest-environment node
 */

import fetchMock from '@fetch-mock/jest';
import { fetchMessages } from '../src/fetchMessages';
import { getFetchArgs, setupStorage } from './helpers';

describe('fetchMessages()', () => {
	beforeEach(() => {
		setupStorage();

		fetchMock.mockGlobal().route('*', { groups: [], subgroups: [] });
	});

	afterEach(() => {
		fetchMock.mockRestore();
	});

	it('triggers a fetch', async () => {
		await fetchMessages('de');

		expect(getFetchArgs()).toContainEqual([
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/de/messages.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'error',
			},
		]);
	});
});
