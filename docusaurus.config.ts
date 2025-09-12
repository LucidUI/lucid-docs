const config = {
	title: 'LucidUI',
	url: 'https://Maximiliankos.github.io',
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	organizationName: 'LucidUI',
	projectName: 'lucid-ui',
	deploymentBranch: 'gh-pages',

	themes: ['@docusaurus/theme-classic'],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'components',
				path: 'components',
				routeBasePath: '/',
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

	webpack: { jsLoader: (isServer) => ({ loader: require.resolve('babel-loader'), options: { presets: [require.resolve('@docusaurus/core/lib/babel/preset')] } }) },
};

export default config;
