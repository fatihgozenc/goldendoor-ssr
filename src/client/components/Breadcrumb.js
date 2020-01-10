import React from 'react';

const Breadcrumb = ({ slug, title }) => {
	return (
		<div className="hero__breadcrumb">
			<a href="/">HOME</a> > <span>{title}</span>
		</div>
	)
};

export default Breadcrumb;