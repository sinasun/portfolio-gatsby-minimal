import React from 'react';

const WorkExperiences = ({ frontmatter }) => {
	return (
		<>
			<h3>{frontmatter.workTitle}</h3>
			{frontmatter.workExperiences &&
				frontmatter.workExperiences.map((experience, index) => (
					<div className="work-div" key={index}>
						<p>{experience.dates}</p>
						<div className="detail-div">
							<h5>
								{experience.position} - {experience.company}
							</h5>
							<p>{experience.detail}</p>
						</div>
					</div>
				))}
		</>
	);
};

export default WorkExperiences;
