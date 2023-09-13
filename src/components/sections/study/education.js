import React from 'react';

const Education = ({ frontmatter }) => {
	return (
		<>
			<h3>{frontmatter.educationTitle}</h3>
			{frontmatter.educations &&
				frontmatter.educations.map((education, index) => (
					<div className="education-div" key={index}>
						<p>{education.dates}</p>
						<div className="detail-div">
							<h5>
								{education.field} - {education.school}
							</h5>
							<p>{education.detail}</p>
						</div>
					</div>
				))}

			<h3>{frontmatter.awardsTitle}</h3>
			{frontmatter.awards &&
				frontmatter.awards.map((award, index) => (
					<div className="education-div" key={index}>
						<p>{award.dates}</p>
						<div className="detail-div">
							<h5>{award.name}</h5>
							<p>{award.organization}</p>
						</div>
					</div>
				))}
		</>
	);
};

export default Education;
