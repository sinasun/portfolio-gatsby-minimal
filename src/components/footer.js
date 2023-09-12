import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ContentWrapper from '@styles/contentWrapper';
import Logo from './logo';
import { theme } from '@styles/theme';
import { footerLinks } from '@config';

const StyledFooter = styled.footer`
	width: 100%;
	height: ${({ theme }) => theme.footerHeight};
	border-top: ${({ theme }) => `3px solid ${theme.colors.boxShadowHover}`};
	margin-top: 10rem;
`;

const StyledContentWrapper = styled(ContentWrapper)`
	&& {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer-logo {
		margin-right: auto;
		margin-left: auto;
	}
`;

const StyledLink = styled(Link)`
	font-size: 0.875rem;
	font-weight: 700;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.primary};
	letter-spacing: 1px;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<StyledContentWrapper>
				<Link className="footer-logo" to="/" aria-label="home">
					<Logo size="1.5rem" color={theme.colors.primary} />
				</Link>
				<div className="footer-links" data-testid="footer-links">
					{footerLinks.map(({ name, url }, key) => (
						<StyledLink key={key} to={url}>
							{name}
						</StyledLink>
					))}
				</div>
			</StyledContentWrapper>
		</StyledFooter>
	);
};

export default Footer;
