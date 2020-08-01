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
          label: 'Emoji v13',
          href: 'https://emojipedia.org/emoji-13.0/',
        },
        {
          type: 'link',
          label: 'Unicode v13',
          href: 'http://unicode.org/versions/Unicode13.0.0/',
        },
        {
          type: 'link',
          label: 'CLDR v36.1',
          href: 'http://cldr.unicode.org/index/downloads/cldr-36',
        },
        {
          type: 'link',
          label: 'UTR #51',
          href: 'http://www.unicode.org/reports/tr51/',
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
