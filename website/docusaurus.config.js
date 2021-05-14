/* eslint-disable sort-keys */

const { EMOJI_VERSIONS, UNICODE_VERSIONS } = require('../packages/core');

const pkgs = [
  'core',
  'data',
  'regex',
  // eslint-disable-next-line
].map((name) => require(`../packages/${name}/package.json`));

function sortVersions(versions) {
  return [...versions].sort((a, b) => Number.parseFloat(a) - Number.parseFloat(b)).reverse();
}

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
    algolia: { apiKey: 'ef82e497116ce535274609f78502cf9b', indexName: 'emojibase' },
    navbar: {
      title: 'Emojibase',
      logo: {
        alt: 'Emojibase',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: `v${pkgs[0].version}`,
          position: 'left',
          items: pkgs.map((pkg) => ({
            label: `v${pkg.version} · ${pkg.name}`,
            href: `https://www.npmjs.com/package/${pkg.name}`,
          })),
        },
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'emojis',
          label: 'Emoji table',
          position: 'left',
        },
        {
          to: 'shortcodes',
          label: 'Shortcodes table',
          position: 'left',
        },
        {
          href: 'https://github.com/milesj/emojibase',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'Emoji versions',
          position: 'right',
          items: sortVersions(EMOJI_VERSIONS).map((version) => ({
            label: version,
            href: `https://emojipedia.org/emoji-${version}/`,
          })),
        },
        {
          label: 'Unicode versions',
          position: 'right',
          items: sortVersions(UNICODE_VERSIONS).map((version) => ({
            label: version,
            href: `http://unicode.org/versions/Unicode${version}.0/`,
          })),
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Miles Johnson. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
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
