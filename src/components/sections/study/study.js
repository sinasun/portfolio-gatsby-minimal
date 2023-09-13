import React, { useEffect, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

import ContentWrapper from '@styles/contentWrapper';
import StudyAbout from './studyAbout';
import Education from './education';
import { detectMobileAndTablet } from '@utils';

const StyledSection = styled.section`
	width: 100%;
	height: auto;
	margin-top: 120px;
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
	#study-about-section {
		width: 30vh !important;
		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			width: 100% !important;
		}
	}
	.education-section {
		margin-left: 24px;
		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-left: 0;
		}
		width: 100%;
		height: min-content;
	}
	.education-section > h3 {
		margin-block-start: 2em;
		margin-block-end: 1em;
	}

	.education-div {
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
	.education-div:hover {
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
	.education-div > p {
		white-space: nowrap;
		font-size: 12px;
		margin-block-start: 1rem;
	}

	.detail-div > p {
		font-size: 15px;
	}
`;

const Study = ({ content }) => {
	const { frontmatter } = content[0].node;
	const windowWidth = window.innerWidth;

	const isMobileOrTablet = detectMobileAndTablet(windowWidth);

	const educationRef = useRef(null);

	const [studyHeight, setStudyHeight] = useState(0);

	const setHeightFromChild = (height) => {
		setStudyHeight(height);
	};

	const [duration, setDuration] = useState(0);

	useEffect(() => {
		if (educationRef.current) {
			const educationHeight = educationRef.current.clientHeight;
			setDuration(educationHeight - studyHeight);
		}
	}, [studyHeight]);

	return (
		<StyledSection id="study">
			<StyledContentWrapper>
				<Controller>
					{isMobileOrTablet ? (
						<StudyAbout
							frontmatter={frontmatter}
							setHeightFromChild={setHeightFromChild}
						/>
					) : (
						<Scene
							duration={duration}
							pin="#study-about-section"
							triggerElement="#study"
							offset={0}
						>
							<div>
								<StudyAbout
									setHeightFromChild={setHeightFromChild}
									frontmatter={frontmatter}
								/>
							</div>
						</Scene>
					)}

					<div className="education-section" ref={educationRef}>
						<Education frontmatter={frontmatter} />
					</div>
				</Controller>
			</StyledContentWrapper>
		</StyledSection>
	);
};

Study.propTypes = {
	content: PropTypes.arrayOf(
		PropTypes.shape({
			node: PropTypes.shape({
				body: PropTypes.string.isRequired,
				frontmatter: PropTypes.object.isRequired
			}).isRequired
		}).isRequired
	).isRequired
};

export default Study;
