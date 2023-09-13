import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Icon from '@components/icons';

import ContentWrapper from '@styles/contentWrapper';

const StyledSection = styled.section`
	width: 100%;
	height: auto;
	margin-top: 120px;
`;

const StyledContentWrapper = styled(ContentWrapper)`
	&& {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.project-div {
		background: rgba(255, 255, 255, 0.08);
		transition-duration: 300ms;
		padding: 4rem 1.5rem;
		width: 100%;
		margin-top: 24px;
		display: flex;
		flex-direction: row;
		border-radius: 8px;
	}
	.project-div > div {
		display: flex;
		flex-direction: column;
		margin-left: 32px;
		width: 50%;
	}
	.project-div > div > h4 {
		font-size: 20px;
		font-weight: 700;
		margin-block-start: 1rem;
		margin-block-end: 0rem;
	}
	.project-div:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.icon {
		width: 24px;
	}
	.link-div {
		display: flex;
		flex-direction: row;
	}
	.link-div {
		display: flex;
		flex-direction: row;
	}
	#github {
		margin-right: 24px;
	}
	.skills {
		font-weight: 700;
	}
`;

const Projects = ({ content }) => {
	const { frontmatter } = content[0].node;

	return (
		<StyledSection id="projects">
			<StyledContentWrapper>
				<h3>{frontmatter.projectTitle}</h3>
				{frontmatter.projects &&
					frontmatter.projects.map((project, index) => (
						<a
							target="_blank"
							rel="nofollow noopener noreferrer"
							aria-label="External Link"
							href={project.link}
							className="project-div"
							key={index}
						>
							<Img
								className="screenshot"
								fluid={project.image.childImageSharp.fluid}
							/>
							<div>
								<h4>{project.title}</h4>
								<p>{project.description}</p>
								<p className="skills">
									Skills: {project.skills}
								</p>
								<div className="link-div">
									{project.github && (
										<div id="github">
											<Icon
												name="github"
												color="#ffffff"
											/>
										</div>
									)}

									{project.link && (
										<div id="external">
											<Icon
												name="external"
												color="#fff"
											/>
										</div>
									)}
								</div>
							</div>
						</a>
					))}
			</StyledContentWrapper>
		</StyledSection>
	);
};

Projects.propTypes = {
	content: PropTypes.arrayOf(
		PropTypes.shape({
			node: PropTypes.shape({
				body: PropTypes.string.isRequired,
				frontmatter: PropTypes.object.isRequired
			}).isRequired
		}).isRequired
	).isRequired
};

export default Projects;
