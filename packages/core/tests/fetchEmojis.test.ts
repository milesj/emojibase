/**
 * @jest-environment node
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import fetchMock from '@fetch-mock/jest';
import { fetchEmojis } from '../src/fetchEmojis';
import { getCompactEmojiWithSkins, getEmojiWithSkins, getFetchArgs, setupStorage } from './helpers';

describe('fetchEmojis()', () => {
	// Testing overloads
	// @ts-expect-error Allow unused
	function testOverloads() {
		const e1 = fetchEmojis('en', { compact: true, flat: true });
		const e2 = fetchEmojis('en', { compact: true, flat: false });
		const e3 = fetchEmojis('en', { compact: true });
		const e4 = fetchEmojis('en', { compact: true, shortcodes: ['cldr'] });
		const e5 = fetchEmojis('en', { compact: false, flat: true });
		const e6 = fetchEmojis('en', { compact: false, flat: false });
		const e7 = fetchEmojis('en', { flat: true });
		const e8 = fetchEmojis('en', { shortcodes: ['cldr'] });
		const e9 = fetchEmojis('en');

		return [e1, e2, e3, e4, e5, e6, e7, e8, e9];
	}

	beforeEach(() => {
		setupStorage();

		const emoji = getEmojiWithSkins();
		const compactEmoji = getCompactEmojiWithSkins();

		fetchMock
			.mockGlobal()
			.route('end:en/data.json', [emoji])
			.route('end:1.2.3/ko/compact.json', [compactEmoji])
			.route('end:ja/data.json', [emoji])
			.route('end:ja/compact.json', [compactEmoji])
			.route('end:en/shortcodes/cldr.json', {
				'1F44B': 'wave',
				'1F44B-1F3FB': 'wave_1',
				'1F44B-1F3FD': 'wave_medium',
			})
			.route('end:ja/shortcodes/cldr.json', {
				'1F44B': 'te_o_furu',
				'1F44B-1F3FB': 'te_o_furu_1',
				'1F44B-1F3FF': 'te_o_furu_5',
			})
			.route('end:ja/shortcodes/cldr-native.json', {
				'1F44B': '手を振る',
				'1F44B-1F3FB': '手を振る_1',
				'1F44B-1F3FC': '手を振る_2',
				'1F44B-1F3FD': '手を振る_3',
				'1F44B-1F3FE': '手を振る_4',
				'1F44B-1F3FF': '手を振る_5',
			})
			.route('end:de/shortcodes/cldr.json', 404)
			.route('*', []);
	});

	afterEach(() => {
		fetchMock.mockRestore();
	});

	it('triggers a fetch', async () => {
		await fetchEmojis('en');

		expect(getFetchArgs()).toContainEqual([
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/data.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'error',
			},
		]);
	});

	it('triggers a fetch (compact)', async () => {
		await fetchEmojis('ko', { compact: true, version: '1.2.3' });

		expect(getFetchArgs()).toContainEqual([
			'https://cdn.jsdelivr.net/npm/emojibase-data@1.2.3/ko/compact.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'error',
			},
		]);
	});

	it('flattens data', async () => {
		const data = await fetchEmojis('ja', { flat: true });

		expect(getFetchArgs()).toContainEqual([
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/ja/data.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'error',
			},
		]);
		expect(data[0]).not.toHaveProperty('unicode');
		expect(data).toHaveLength(6);
	});

	it('flattens data (compact)', async () => {
		const data = await fetchEmojis('ja', { compact: true, flat: true });

		expect(getFetchArgs()).toContainEqual([
			'https://cdn.jsdelivr.net/npm/emojibase-data@latest/ja/compact.json',
			{
				credentials: 'omit',
				mode: 'cors',
				redirect: 'error',
			},
		]);
		expect(data[0]).toHaveProperty('unicode');
		expect(data).toHaveLength(6);
	});

	describe('shortcodes', () => {
		it('joins shortcodes from defined presets', async () => {
			const data = await fetchEmojis('ja', { shortcodes: ['cldr', 'cldr-native'] });

			expect(fetchMock).toHaveFetched(
				'https://cdn.jsdelivr.net/npm/emojibase-data@latest/ja/data.json',
			);
			expect(fetchMock).toHaveFetched(
				'https://cdn.jsdelivr.net/npm/emojibase-data@latest/ja/shortcodes/cldr.json',
			);

			expect(data[0].shortcodes).toEqual(['te_o_furu', '手を振る']);
		});

		it('joins shortcodes from different locales', async () => {
			const data = await fetchEmojis('ja', { shortcodes: ['cldr', 'en/cldr'] });

			expect(fetchMock).toHaveFetched(
				'https://cdn.jsdelivr.net/npm/emojibase-data@latest/ja/data.json',
			);
			expect(fetchMock).toHaveFetched(
				'https://cdn.jsdelivr.net/npm/emojibase-data@latest/ja/shortcodes/cldr.json',
			);
			expect(fetchMock).toHaveFetched(
				'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/shortcodes/cldr.json',
			);

			expect(data[0].shortcodes).toEqual(['te_o_furu', 'wave']);
		});

		it('doesnt fail if a shortcodes request fails', async () => {
			const data = await fetchEmojis('en', { shortcodes: ['cldr', 'de/cldr'] });

			expect(fetchMock).toHaveFetched(
				'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/data.json',
			);
			expect(fetchMock).toHaveFetched(
				'https://cdn.jsdelivr.net/npm/emojibase-data@latest/en/shortcodes/cldr.json',
			);
			// 404
			expect(fetchMock).toHaveFetched(
				'https://cdn.jsdelivr.net/npm/emojibase-data@latest/de/shortcodes/cldr.json',
			);

			expect(data[0].shortcodes).toEqual(['wave']);
		});
	});
});
