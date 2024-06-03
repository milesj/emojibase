import type { MessagesDataset } from 'emojibase';

export function loadMessages(): MessagesDataset {
	return require('../test-messages.json') as MessagesDataset;
}
