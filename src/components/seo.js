import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
					siteUrl
				}
			}
		}
	`);

	return (
		<>
			<title>{site.siteMetadata.title}</title>
			<meta name="description" content={site.siteMetadata.description} />
			<meta name="twitter:title" content={site.siteMetadata.title} />
			<meta name="twitter:url" content={site.siteMetadata.siteUrl} />
			<meta
				name="twitter:description"
				content={site.siteMetadata.description}
			/>
			<meta name="twitter:creator" content={site.siteMetadata.author} />
		</>
	);
};

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	meta: PropTypes.array,
	lang: PropTypes.string
};

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``
};

export default SEO;
