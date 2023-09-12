import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import Context from '@context';
import Logo from './logo';
import { theme } from '@styles/theme';

const StyledSplashScreen = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0%;
	z-index: 900;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.background};
	.logo-wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		height: 4rem;
	}
	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.colors.background};
	}
`;

const SplashScreen = () => {
	const { state, setState } = useContext(Context);

	const backgroundControls = useAnimation();
	const backdropControls = useAnimation();

	useEffect(() => {
		const sequence = async () => {
			await backgroundControls.start({ opacity: 1 });
			await backdropControls.start({
				height: '0%',
				transition: { delay: 0.8 }
			});
			await backgroundControls.start({
				opacity: 0,
				transition: { delay: 0.6 }
			});
			setState({ ...state, isIntroDone: true });
		};
		sequence();
	}, [backgroundControls, backdropControls, setState, state]);

	return (
		<StyledSplashScreen
			initial={{ opacity: 0 }}
			animate={backgroundControls}
		>
			<div className="logo-wrapper">
				<motion.div
					className="backdrop"
					initial={{ height: '100%' }}
					animate={backdropControls}
				/>
				<Logo size="3rem" color={theme.colors.primary} />
			</div>
		</StyledSplashScreen>
	);
};

export default SplashScreen;
