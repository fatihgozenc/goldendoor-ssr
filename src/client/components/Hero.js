import React from 'react';
import Breadcrumb from './Breadcrumb';

const Hero = ({data}) => {
  return (
    <>
    <div className="hero">
      <div className="hero__img backgroundImg" style={{backgroundImage: "url(" + data.image + ")"}} />
      <div className="hero__opening">
        <div className="hero__opening--title">
          <Breadcrumb slug={data.slug} title={data.title}/>
          <h1>{data.title}</h1>
        </div>
        <div className="hero__opening--excerpt">
          <p>{data.content}</p>
          <a className="hero__scroll scroller" href="#content">{data.scroll}<span>▾</span></a>
        </div>
      </div>
    </div>
    </>
  )
};

export default Hero;