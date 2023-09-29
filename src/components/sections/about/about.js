import React, { useEffect, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

import ContentWrapper from '@styles/contentWrapper';
import Background from './background';
import WorkExperiences from './work';
import { detectMobileAndTablet } from '@utils';

const StyledSection = styled.section`
	width: 100%;
	height: auto;
`;

const StyledContentWrapper = styled(ContentWrapper)`
	&& {
		display: flex;
		flex-direction: row;
		width: 100%;
		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			flex-direction: column;
		}
	}
	#background-section {
		width: 400px !important;
		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			width: 100% !important;
		}
	}
	.work-section {
		margin-left: 24px;
		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-left: 0;
		}
		width: 100%;
		height: min-content;
	}
	.work-div {
		cursor: default;
		background: rgba(255, 255, 255, 0.08);
		transition-duration: 300ms;
		padding: 1rem 1.5rem;
		width: 100%;
		margin-top: 24px;
		border-radius: 8px;
		display: flex;
		flex-direction: row;
		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			flex-direction: column;
		}
	}
	.work-div:hover {
		background: rgba(255, 255, 255, 0.2);
	}
	.detail-div {
		display: flex;
		flex-direction: column;
		margin-left: 12px;
		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-left: 0px;
		}
	}
	.work-div > p {
		white-space: nowrap;
		font-size: 12px;
		margin-block-start: 1rem;
	}

	.detail-div > p {
		font-size: 15px;
	}
	.background-div {
		height: min-content;
	}
`;

const About = ({ content }) => {
	const { frontmatter } = content[0].node;
	const windowWidth = window.innerWidth;

	const isMobileOrTablet = detectMobileAndTablet(windowWidth);

	const workExperiencesRef = useRef(null);

	const [backgroundHeight, setBackgroundHeight] = useState(0);

	const setHeightFromChild = (height) => {
		setBackgroundHeight(height);
	};

	const [duration, setDuration] = useState(0);

	useEffect(() => {
		if (workExperiencesRef.current) {
			const workExperiencesHeight =
				workExperiencesRef.current.clientHeight;
			setDuration(workExperiencesHeight - backgroundHeight);
			console.log(workExperiencesHeight - backgroundHeight);
		}
	}, [backgroundHeight]);

	return (
		<StyledSection id="about">
			<StyledContentWrapper>
				<Controller>
					{isMobileOrTablet ? (
						<Background
							frontmatter={frontmatter}
							setHeightFromChild={setHeightFromChild}
						/>
					) : (
						<Scene
							duration={duration}
							pin="#background-section"
							triggerElement="#about"
							offset={0}
						>
							<div>
								<Background
									setHeightFromChild={setHeightFromChild}
									frontmatter={frontmatter}
								/>
							</div>
						</Scene>
					)}

					<div className="work-section" ref={workExperiencesRef}>
						<WorkExperiences frontmatter={frontmatter} />
					</div>
				</Controller>
			</StyledContentWrapper>
		</StyledSection>
	);
};

About.propTypes = {
	content: PropTypes.arrayOf(
		PropTypes.shape({
			node: PropTypes.shape({
				body: PropTypes.string.isRequired,
				frontmatter: PropTypes.object.isRequired
			}).isRequired
		}).isRequired
	).isRequired
};

export default About;
