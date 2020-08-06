/* eslint-disable sort-keys */

module.exports = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Usage',
      items: ['datasets', 'regex', 'shortcodes', 'emoticons', 'api'],
      collapsed: false,
    },
    'typescript',
    'spec',
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'link',
          label: 'Shortcodes list',
          href:
            'https://github.com/milesj/emojibase/blob/master/packages/generator/src/resources/shortcodes.ts',
        },
        {
          type: 'link',
          label: 'Emoticons list',
          href:
            'https://github.com/milesj/emojibase/blob/master/packages/generator/src/resources/emoticons.ts',
        },
        {
          type: 'link',
          label: 'CLDR v37',
          href: 'http://cldr.unicode.org/index/downloads/cldr-37',
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
