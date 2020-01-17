import React from 'react';
import Scene from './Scene';
import Galaxy from './Galaxy';
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

const Opening = ({data}) => {
    return (
        <div className="scene">
            <Galaxy />
            <div className="scene-background"/>
            <div className="scene-landscape"/>
            <Scene/>
            <div className="home__slider">
                <CarouselProvider
                    naturalSlideWidth={220}
                    naturalSlideHeight={125}
                    totalSlides={data.length}
                    isPlaying={true}
                    interval={9000}
                    infinite={true}
                >
                    <Slider className="home__slider--wrapper">

                        {data.map((item, key) => (

                            <a href={item.link} key={key}>
                                <Slide index={key}>
                                    <h2>{item.titel}</h2>
                                    {parse(item.inhalt)}
                                </Slide>
                            </a>
                           
                        ))}
                        
                    </Slider>
                    {/* <DotGroup dotNumbers={data.length}/> */}
                </CarouselProvider>
            </div>
        </div>
    )
}

export default Opening;