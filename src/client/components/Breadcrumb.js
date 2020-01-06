import React from 'react';
  
const Breadcrumb = ({slug, title}) => {
  return(
    <div className="hero__breadcrumb">
      <a href="/">HOME</a> > <a href={slug}>{title}</a>
    </div>
  )
};
  
export default Breadcrumb;