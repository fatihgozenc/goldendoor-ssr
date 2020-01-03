import React from 'react';

const Hero = ({data}) => {
  return (
    <div className="hero">
      <div className="hero__img backgroundImg" style={{backgroundImage: "url(" + data.image + ")"}} />
      <div className="hero__opening">
        <div className="hero__opening--title">
          <span className="hero__breadcrumb"><a href="/">HOME</a> > <a href={data.slug}>{data.title}</a></span>
          <h1>{data.title}</h1>
        </div>
        <div className="hero__opening--excerpt">
          <p>{data.content}</p>
          <a className="hero__scroll scroller" href="#content">{data.scroll}<span>▾</span></a>
        </div>
      </div>
    </div>
  )
};

export default Hero;