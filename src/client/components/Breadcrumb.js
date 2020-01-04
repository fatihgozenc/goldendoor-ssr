import React from 'react';
  
const Breadcrumb = ({slug, title}) => {
  return(
    <span className="hero__breadcrumb"><a href="/">HOME</a> > <a href={slug}>{title}</a></span>
  )
};
  
export default Breadcrumb;