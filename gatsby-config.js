const {
	author,
	siteTitle,
	siteShortTitle,
	siteDescription,
	siteIcon,
	siteUrl,
	colors
} = require(`./config`);

module.exports = {
	siteMetadata: {
		author: author,
		title: siteTitle,
		description: siteDescription,
		siteUrl: siteUrl
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteTitle,
				short_name: siteShortTitle,
				start_url: `/`,
				background_color: colors.theme.background,
				theme_color: colors.theme.primary,
				display: `minimal-ui`,
				icon: siteIcon
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1000,
							quality: 80
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: `content`
			}
		}
	]
};
