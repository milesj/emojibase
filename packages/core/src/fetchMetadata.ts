import { fetchFromCDN } from './fetchFromCDN';
import { FetchFromCDNOptions, Locale, MetadataDataset } from './types';

export async function fetchMetadata(
	locale: Locale,
	options?: FetchFromCDNOptions,
): Promise<MetadataDataset> {
	return fetchFromCDN(`${locale}/meta.json`, options);
}
