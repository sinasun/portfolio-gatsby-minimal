import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import Context from '@context';
import ContentWrapper from '@styles/contentWrapper';

const StyledSection = styled.section`
	width: 100%;
	height: auto;
`;

const StyledContentWrapper = styled(ContentWrapper)`
	&& {
		text-align: center;
		width: 100%;
		height: 100%;
		min-height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 6rem;
		@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-bottom: 4rem;
		}
		.greetings {
			font-size: 18px;
			font-weight: 600;
		}

		.title {
			margin-bottom: 1.5rem;
			@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				margin-bottom: 0;
			}
		}
		.subtitle {
			margin-top: 1rem;
			max-width: 500px;
			margin-right: auto;
			margin-left: auto;
			line-height: 28px;
		}

		.button-div {
			width: 100%;
			margin-top: 2rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				flex-direction: column;
			}
		}

		.download {
			margin-left: auto;
			margin-right: 32px;
			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				margin-right: auto;
				width: 100%;
			}
			align-items: center;
			background: #f5f5fa;
			border: 0;
			border-radius: 32px;
			box-shadow: 0px 0px 300px 0 #fff;
			box-sizing: border-box;
			cursor: pointer;
			display: flex;
			font-size: 1rem;
			justify-content: center;
			line-height: 1.5rem;
			padding: 15px 45px;
			position: relative;
			text-align: left;
			transition: 0.2s;
			user-select: none;
			-webkit-user-select: none;
			touch-action: manipulation;
			white-space: pre;
			width: max-content;
			word-break: normal;
			word-spacing: normal;
		}

		.download:hover {
			background: #f8f8ff;
			box-shadow: 0px 0px 100px 0 #fff;
		}
		.contact {
			margin-left: 32px;
			margin-right: auto;
			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				margin-left: auto;
				margin-top: 24px;
				width: 100%;
			}
			align-items: center;
			background: #f5f5fa;
			border: 0;
			border-radius: 32px;
			color: #fff;
			background: rgba(255, 255, 255, 0.05);
			box-sizing: border-box;
			cursor: pointer;
			display: flex;
			font-size: 1rem;
			justify-content: center;
			line-height: 1.5rem;
			padding: 15px 45px;
			position: relative;
			text-align: left;
			transition: 0.2s;
			user-select: none;
			-webkit-user-select: none;
			touch-action: manipulation;
			white-space: pre;
			width: max-content;
			word-break: normal;
			word-spacing: normal;
		}

		.contact:hover {
			background: rgba(255, 255, 255, 0.2);
		}
	}
`;

const Hero = ({ content }) => {
	const { frontmatter, body } = content[0].node;
	const { isIntroDone } = useContext(Context).state;

	// Controls to orchestrate animations of greetings, social profiles,
	const gControls = useAnimation();
	const sControls = useAnimation();

	// Start Animations after the splashScreen sequence is done
	useEffect(() => {
		const pageLoadSequence = async () => {
			if (isIntroDone) {
				await gControls.start({
					opacity: 1,
					y: 0,
					transition: { delay: 0.4 }
				});
				await sControls.start({
					opacity: 1,
					x: 0
				});
			}
		};
		pageLoadSequence();
	}, [isIntroDone, gControls, sControls]);

	return (
		<StyledSection id="hero">
			<StyledContentWrapper>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={gControls}
					data-testid="animated-heading"
				>
					<p className="greetings">{frontmatter.greetings}</p>
					<h1 className="title">{frontmatter.title}</h1>
					<p className="subtitle">{frontmatter.subtitlePrefix}</p>
					<div className="description">{body}</div>
				</motion.div>
				<motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
					<div className="button-div">
						<button className="download" role="button">
							Download Resume
						</button>
						<button className="contact" role="button">
							Email Me!
						</button>
					</div>
				</motion.div>
			</StyledContentWrapper>
		</StyledSection>
	);
};

Hero.propTypes = {
	content: PropTypes.arrayOf(
		PropTypes.shape({
			node: PropTypes.shape({
				body: PropTypes.string.isRequired,
				frontmatter: PropTypes.object.isRequired
			}).isRequired
		}).isRequired
	).isRequired
};

export default Hero;
