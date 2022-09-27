import { useEffect } from 'react';

export default function Api() {
	// Docusaurus won't find the API index for some reason,
	// so this fakes it with a page and then redirects.
	useEffect(() => {
		window.location.href = '/api/emojibase';
	}, []);

	return null;
}
