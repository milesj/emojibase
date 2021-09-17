import { fetchFromCDN } from './fetchFromCDN';
import { FetchFromCDNOptions, Locale, MessagesDataset } from './types';

/**
 * Fetches and returns localized messages for emoji related information like groups and sub-groups.
 * Uses `fetchFromCDN` under the hood.
 *
 * ```ts
 * import { fetchMetadata } from 'emojibase';
 *
 * await fetchMetadata('zh', { version: '2.1.3' });
 * ```
 */
export async function fetchMetadata(
	locale: Locale,
	options?: FetchFromCDNOptions,
): Promise<MessagesDataset> {
	return fetchFromCDN(`${locale}/messages.json`, options);
}
