import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GlobalStateProvider from '@context/provider';
import { Layout, SEO, Hero, About, Study } from '@components';

import { seoTitleSuffix } from '@config';
import Projects from '../components/sections/projects.js/projects';

const IndexPage = ({ data }) => {
	const { frontmatter } = data.index.edges[0].node;
	const { useSplashScreen } = frontmatter;

	const globalState = {
		isIntroDone: useSplashScreen ? false : true
	};

	return (
		<GlobalStateProvider initialState={globalState}>
			<Layout>
				<Hero content={data.hero.edges} />
				<About content={data.about.edges} />
				<Study content={data.study.edges} />
				<Projects content={data.project.edges} />
			</Layout>
		</GlobalStateProvider>
	);
};

export const Head = () => <SEO />;

IndexPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default IndexPage;

export const pageQuery = graphql`
	{
		index: allMdx(
			filter: {
				internal: { contentFilePath: { regex: "/index/index/" } }
			}
		) {
			edges {
				node {
					frontmatter {
						seoTitle
						useSeoTitleSuffix
						useSplashScreen
					}
				}
			}
		}
		hero: allMdx(
			filter: { internal: { contentFilePath: { regex: "/index/hero/" } } }
		) {
			edges {
				node {
					body
					frontmatter {
						greetings
						title
						subtitlePrefix
					}
				}
			}
		}
		about: allMdx(
			filter: {
				internal: { contentFilePath: { regex: "/index/about/" } }
			}
		) {
			edges {
				node {
					body
					frontmatter {
						backgroundTitle
						background
						workTitle
						workExperiences {
							company
							position
							dates
							detail
						}
					}
				}
			}
		}
		study: allMdx(
			filter: {
				internal: { contentFilePath: { regex: "/index/study/" } }
			}
		) {
			edges {
				node {
					body
					frontmatter {
						studyTitle
						studyDetail
						educationTitle
						educations {
							school
							field
							dates
							detail
						}
						awardsTitle
						awards {
							name
							organization
							dates
						}
					}
				}
			}
		}
		project: allMdx(
			filter: {
				internal: { contentFilePath: { regex: "/index/project/" } }
			}
		) {
			edges {
				node {
					body
					frontmatter {
						projectTitle

						projects {
							title
							link
							github
							description
							skills
							image {
								childImageSharp {
									fluid(maxWidth: 400, quality: 90) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
