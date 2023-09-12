import React, { useEffect, useRef } from 'react';

const Background = ({ frontmatter, setHeightFromChild }) => {
	const elementRef = useRef(null);

	useEffect(() => {
		if (elementRef && elementRef.current) {
			const height = elementRef.current.clientHeight;
			setHeightFromChild(height);
		}
	}, [setHeightFromChild]);

	return (
		<div ref={elementRef} id="background-section">
			<h3>{frontmatter.backgroundTitle}</h3>
			<p>{frontmatter.background}</p>
		</div>
	);
};

export default Background;
