import { MessagesDataset } from 'emojibase';

export function loadMessages(): MessagesDataset {
	// eslint-disable-next-line unicorn/prefer-module
	return require('../test-messages.json') as MessagesDataset;
}
