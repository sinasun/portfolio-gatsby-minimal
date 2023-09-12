import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import "@fontsource/inter"; 

import { theme } from '@styles/theme';
import Context from '@context';
import GlobalStyle from '@styles/globalStyle';
import Header from './header';
import Footer from './footer';
import SplashScreen from '@components/splashScreen';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
	require('smooth-scroll')('a[href*="#"]');
}

const StyledLayoutWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	margin: 0 auto;
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-template-columns: 100%;
`;

const Layout = ({ children }) => {
	const { isIntroDone } = useContext(Context).state;

	return (
		<StyledLayoutWrapper id="layout-wrapper">
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{isIntroDone ? (
					<>
						<Header />
						<main id="main-content">{children}</main>
						<Footer />
					</>
				) : (
					<SplashScreen />
				)}
			</ThemeProvider>
		</StyledLayoutWrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.any
};

export default Layout;
