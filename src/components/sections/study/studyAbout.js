import React, { useEffect, useRef } from 'react';

const StudyAbout = ({ frontmatter, setHeightFromChild }) => {
	const elementRef = useRef(null);

	useEffect(() => {
		if (elementRef && elementRef.current) {
			const height = elementRef.current.clientHeight;
			setHeightFromChild(height);
		}
	}, [setHeightFromChild]);

	return (
		<div ref={elementRef} id="study-about-section">
			<h3>{frontmatter.studyTitle}</h3>
			<p>{frontmatter.studyDetail}</p>
		</div>
	);
};

export default StudyAbout;
