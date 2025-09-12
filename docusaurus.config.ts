import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
	title: 'LucidUI',
	url: 'https://Maximiliankos.github.io',
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	organizationName: 'LucidUI',
	projectName: 'lucid-ui',
	deploymentBranch: 'gh-pages',

	themes: ['@docusaurus/theme-classic'], // ← add this
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'components',
				path: 'components',
				// make components at the site root (see next section)
				routeBasePath: '/', // ← was 'components'
				sidebarPath: require.resolve('./sidebars.components.ts'),
				editUrl: 'https://github.com/MaximilianKos/lucid-docs/edit/main/',
			},
		],
	],

	themeConfig: {
		colorMode: { defaultMode: 'light' },
		navbar: {
			logo: {
				alt: 'LucidUI Logo',
				src: 'logo-transparent.png',
				href: '/',
				height: 42,
			},
		},
	},

	themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
  ],


	// Make @site alias available for raw imports
	webpack: { jsLoader: (isServer) => ({ loader: require.resolve('babel-loader'), options: { presets: [require.resolve('@docusaurus/core/lib/babel/preset')] } }) },
};

export default config;
