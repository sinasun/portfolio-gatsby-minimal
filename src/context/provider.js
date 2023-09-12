import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components'; // Import StyleSheetManager

import Context from '.';

const GlobalStateProvider = ({ children, initialState }) => {
	const [state, setState] = useState(initialState);

	return (
		<StyleSheetManager shouldForwardProp={(prop) => prop !== 'itemCount'}>
			{/* Wrap children with StyleSheetManager */}
			<Context.Provider value={{ state, setState }}>
				{children}
			</Context.Provider>
		</StyleSheetManager>
	);
};

GlobalStateProvider.propTypes = {
	children: PropTypes.any.isRequired,
	initialState: PropTypes.shape({
		isIntroDone: PropTypes.bool.isRequired
	}).isRequired
};

export default GlobalStateProvider;
