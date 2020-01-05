import React from 'react';
import {useSelector} from 'react-redux';
import { fetchLocation } from '../actions';
import parse from 'html-react-parser';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

const LocationPage = () => {

  const data = useSelector(state => state.location);
  console.log(data)
  return (
  <>
    <h1 className="seo__hidden">{data.title}</h1>
    <div className="singleloc">

      <div className="singleloc__info">

        <div className="singleloc__info--front">
          <img src={data.fields.location_info.location_logo} alt={`${data.title} Logo`} className="singleloc__info--img"/>
            <span className="singleloc__info--type">{data.fields.subtitel}</span>
            <div className="singleloc__info--buttons">
              <a href="/kontakt" className="singleloc__button">{data.fields.buttongroup.anfragen}</a>
              <a href={data.fields.location_info.location_factsheet} className="singleloc__button">{data.fields.buttongroup.datenblatt}</a>
              <a href={data.fields.karte_link} className="singleloc__button">{data.fields.buttongroup.karte}</a>
            </div>
            <div className="singleloc__info--socialmedia">
              <a href={data.fields.social_media.facebook} className="socialmedia__button"/>
              <a href={data.fields.social_media.instagram} className="socialmedia__button"/>
            </div>
            <a href={`http://${data.fields.location_info.location_webseite}`} 
              className="singleloc__info--link">{data.fields.location_info.location_webseite}</a>
        </div>

        <div className="singleloc__info--side">
            {parse(data.content)}
            <div className="singleloc__info--bullets">
              {parse(data.fields.location_info.bulletpoints)}
            </div>
        </div>
         
        <button className="singleloc__info--desc">{data.fields.buttongroup.beschreibung}</button>

      </div>

      <div className="singleloc__detail">

        <div className="singleloc__gallery">

        <CarouselProvider
            naturalSlideWidth={220}
            naturalSlideHeight={125}
            totalSlides={data.fields.location_gallery.length}
            isPlaying={true}
            interval={5000}
            infinite={true}
        >
          <Slider className="singleloc__gallery--wrapper">

              {data.fields.location_gallery.map((item, imageKey) => (

                <Slide key={imageKey} index={imageKey}>
                    <img src={item}/>
                </Slide>
                  
              ))}
              
          </Slider>
          
          <DotGroup/>
        </CarouselProvider>
        </div>

        <div className="singleloc__detail--data">
          {
            Object.values(data.fields.technische_daten).map( (locData, key) => (
              <div key={key} className="singleloc__detail--dataitem">
                  <span>{locData.name}</span>
                  <span>{locData.option}</span>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  </>
  )
};

function loadData(store){
	return store.dispatch(fetchLocation());
}

export default{
	loadData,
	component: LocationPage
}
