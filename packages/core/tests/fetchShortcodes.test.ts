import fetchMock from 'fetch-mock-jest';
import { fetchShortcodes } from '../src/fetchShortcodes';
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

	it('aliases presets correctly', async () => {
		await fetchShortcodes('en', 'discord');
		await fetchShortcodes('en', 'slack');

		expect(fetchMock).toHaveBeenCalledWith(
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/shortcodes/iamcal.json',
			expect.any(Object),
		);
		expect(fetchMock).not.toHaveBeenCalledWith(
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/shortcodes/discord.json',
			expect.any(Object),
		);
		expect(fetchMock).not.toHaveBeenCalledWith(
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/shortcodes/slack.json',
			expect.any(Object),
		);
	});
});
