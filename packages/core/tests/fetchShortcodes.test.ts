/**
 * @jest-environment node
 */

import fetchMock from '@fetch-mock/jest';
import { fetchShortcodes } from '../src/fetchShortcodes';
import { getFetchArgs, setupStorage } from './helpers';

describe('fetchShortcodes()', () => {
	beforeEach(() => {
		setupStorage();

		fetchMock.mockGlobal().route('*', { '0000': 'shortcode' });
	});

	afterEach(() => {
		fetchMock.mockRestore();
	});

	it('triggers a fetch', async () => {
		await fetchShortcodes('de', 'cldr');

		expect(getFetchArgs()).toContainEqual([
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/de/shortcodes/cldr.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'error',
			},
		]);
	});

	it('aliases presets correctly', async () => {
		await fetchShortcodes('en', 'discord');
		await fetchShortcodes('en', 'slack');

		expect(fetchMock).toHaveFetched(
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/shortcodes/iamcal.json',
		);
		expect(fetchMock).not.toHaveFetched(
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/shortcodes/discord.json',
		);
		expect(fetchMock).not.toHaveFetched(
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/shortcodes/slack.json',
		);
	});
});
