module.exports = {
	//-- SITE SETTINGS -----
	author: '@sinasun',
	siteTitle: 'Sina Khodaveisi',
	siteShortTitle: 'Sina Khodaveisi',
	siteDescription: 'Sina Khodaveisi Portfolio',
	siteUrl: 'https://sina.khodaveisi.com',
	siteLanguage: 'en_US',
	siteIcon: 'content/favicon.png',
	seoTitleSuffix: 'Portfolio',

	// -- THEME SETTINGS -----
	colors: {
		theme: {
			primary: '#FAFAFA',
			secondary: '#2A2926',
			tertiary: '#252525',
			text: 'rgba(255, 255, 255, 0.87)',
			subtext: '#AAAAAA',
			background: '#121212',
			bodyBackground: '#121212',
			card: '#1C1C1C',
			scrollBar: 'rgba(255, 255, 255, 0.5)',
			boxShadow: 'rgba(0, 0, 0, 0.16)',
			boxShadowHover: 'rgba(0, 0, 0, 0.32)'
		}
	},
	fonts: {
		primary: 'Inter'
	},

	socialMedia: [
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/sina-khodaveisi/'
		},
		{
			name: 'Github',
			url: 'https://github.com/sinasun/'
		},

		{
			name: 'Mail',
			url: 'mailto:sinasunfree@gmail.com'
		}
	],

	//-- NAVIGATION SETTINGS -----
	navLinks: {
		menu: [
			{
				name: 'About Me',
				url: '/#about'
			},
			{
				name: 'Education',
				url: '/#education'
			},
			{
				name: 'Projects',
				url: '/#projects'
			}
		],
		button: {
			useFileName: true,
			name: 'Resume',
			fileName: 'Sina_Khodaveisi_Resume.pdf',
			url: '' // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
		}
	},
	footerLinks: []
};
