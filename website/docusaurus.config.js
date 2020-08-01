/* eslint-disable sort-keys */

const pkg = require('emojibase/package.json');

module.exports = {
  title: 'Emojibase',
  tagline:
    'A collection of lightweight, up-to-date, pre-generated, specification compliant, localized emoji JSON datasets, regex patterns, and more.',
  url: 'https://emojibase.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.svg',
  organizationName: 'milesj',
  projectName: 'emojibase',
  themeConfig: {
    navbar: {
      title: 'Emojibase',
      logo: {
        alt: 'Emojibase',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://www.npmjs.com/package/emojibase',
          label: `v${pkg.version}`,
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/milesj/emojibase',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Miles Johnson. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'index',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/milesj/emojibase/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/milesj/emojibase/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
