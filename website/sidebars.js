/* eslint-disable sort-keys */

module.exports = {
	docs: [
		'index',
		{
			type: 'category',
			label: 'Usage',
			items: ['datasets', 'regex', 'shortcodes', 'emoticons'],
			collapsed: false,
		},
		'translations',
		'typescript',
		'spec',
		{
			type: 'category',
			label: 'Resources',
			items: [
				{
					type: 'link',
					label: 'CLDR v44',
					href: 'http://cldr.unicode.org/index/downloads/cldr-44',
				},
				{
					type: 'link',
					label: 'UTR #51',
					href: 'http://unicode.org/reports/tr51/',
				},
				{
					type: 'link',
					label: 'UTR #35',
					href: 'http://unicode.org/reports/tr35/tr35-general.html#Annotations',
				},
			],
		},
		{
			type: 'link',
			label: 'Changelog',
			href: 'https://github.com/milesj/emojibase/blob/master/CHANGELOG.md',
		},
	],
};
