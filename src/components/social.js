import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '@styles/theme';

import Icon from './icons';
import { socialMedia } from '@config';

const StyledSocialWrapper = styled.div`
	width: max-content;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	/* Calculate columns, depending on how many profiles there are */
	grid-template-columns: repeat(${({ itemcount }) => itemcount + 1}, auto);
	justify-content: start;
	justify-items: start;

	padding-left: 2.5rem;
	padding-right: 2.5rem;

	overflow-x: scroll;
	overflow-y: hidden;
	-webkit-overflow-scrolling: touch;
	&::-webkit-scrollbar {
		display: none;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		overflow: visible;
	}

	/* Show scrollbar if desktop and wrapper width > viewport width */
	@media (hover: hover) {
		scrollbar-color: ${({ theme }) => theme.colors.scrollBar} transparent; //Firefox only
		&::-webkit-scrollbar {
			display: block;
			-webkit-appearance: none;
		}

		&::-webkit-scrollbar:horizontal {
			height: 0.8rem;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 8px;
			border: 0.2rem solid ${({ theme }) => theme.colors.background};
			background-color: ${({ theme }) => theme.colors.scrollBar};
		}

		&::-webkit-scrollbar-track {
			background-color: ${({ theme }) => theme.colors.background};
			border-radius: 8px;
		}
	}

	a {
		margin-right: 0.5rem;
		margin-bottom: 0.75rem;
		@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-right: 1rem;
		}
	}
`;

const StyledSocialProfile = styled.a`
	width: ${({ width }) => (width ? width : 'auto')};
	height: auto;
	&:hover {
	}
`;

const Social = ({ width, padding, fontSize, fontWeight, withIcon }) => {
	return (
		<StyledSocialWrapper itemcount={socialMedia.length}>
			{socialMedia.map(({ name, url }, key) => {
				return (
					<StyledSocialProfile
						key={key}
						href={url}
						target="_blank"
						rel="nofollow noopener noreferrer"
						aria-label={name}
						width={width}
						padding={padding}
						fontSize={fontSize}
						fontWeight={fontWeight}
					>
						{withIcon ? (
							<Icon name={name} color={theme.colors.primary} />
						) : null}{' '}
					</StyledSocialProfile>
				);
			})}
		</StyledSocialWrapper>
	);
};

Social.propTypes = {
	width: PropTypes.string,
	padding: PropTypes.string,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	withIcon: PropTypes.bool
};

export default Social;
