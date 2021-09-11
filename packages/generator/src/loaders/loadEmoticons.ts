import { EmoticonMap } from '../types';

export async function loadEmoticons(): Promise<EmoticonMap> {
	const { emoticons } = await import('../resources/emoticons');

	return emoticons;
}
