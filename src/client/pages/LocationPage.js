import React from 'react';
import {useSelector} from 'react-redux';
import { fetchLocation } from '../actions';
import Icon from '../components/Icon';
import parse from 'html-react-parser';
import Breadcrumb from '../components/Breadcrumb';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

const LocationPage = () => {

  const data = useSelector(state => state.location);
  const infoPanel = React.useRef();
  const changePanel = () => {
    infoPanel.current.classList.toggle('changePanel');
  }

  const openMap = (e) => {
    console.log(e.currentTarget)
  }

  return (
  <>
    <h1 className="seo__hidden">{data.title}</h1>
    <div className="page__title page__title--singleloc">
      <Breadcrumb slug={data.slug} title={data.title}/>
      <h1>{data.title}</h1>
    </div>
    <div className="singleloc">

      <div className="singleloc__info">

        <div className="singleloc__info--wrapper" ref={infoPanel}>


          <div className="singleloc__info--front">
            <img src={data.fields.location_info.location_logo} alt={`${data.title} Logo`} className="singleloc__info--img"/>
              <span className="singleloc__info--type">{data.fields.subtitel}</span>
              <div className="singleloc__info--buttons">
                <a href="/kontakt" className="singleloc__button"><Icon type="anfragen" name={data.fields.buttongroup.anfragen}/></a>
                <a href={data.fields.location_info.location_factsheet} className="singleloc__button"><Icon type="factsheet" name={data.fields.buttongroup.datenblatt}/></a>
                <a href="#karte" onClick={openMap} className="singleloc__button">
                  <Icon type="karte" name={data.fields.buttongroup.karte}/>
                </a>
              </div>
              <div className="singleloc__info--socialmedia">
                <a href={data.fields.social_media.facebook} className="socialmedia__button"><Icon type="facebook"/></a>
                <a href={data.fields.social_media.instagram} className="socialmedia__button"><Icon type="instagram"/></a>
              </div>
              <a href={`http://${data.fields.location_info.location_webseite}`} 
                className="singleloc__info--link">{data.fields.location_info.location_webseite}</a>

              <button onClick={changePanel} className="singleloc__info--desc golden__button">{data.fields.buttongroup.beschreibung} > </button>
              <a href="#gallery" className="singleloc__info--desc singleloc__gallerybutton">▾</a>

          </div>


          <div className="singleloc__info--side">
              <p>{parse(data.content)}</p>
              <div className="singleloc__info--bullets">
                {parse(data.fields.location_info.bulletpoints)}
              </div>
              <button onClick={changePanel} className="singleloc__info--desc"> <Icon type="back" /> </button>
          </div>
         
        </div>

      </div>

      <div className="singleloc__detail"  id="gallery">

        <div className="singleloc__gallery">

        <CarouselProvider
            naturalSlideWidth={220}
            naturalSlideHeight={120}
            totalSlides={data.fields.location_gallery.length}
            isPlaying={true}
            interval={5000}
            infinite={true}
        >
          <Slider className="singleloc__gallery--wrapper">

              {data.fields.location_gallery.map((item, imageKey) => (

                <Slide key={imageKey} index={imageKey}>
                    <img width="100%" src={item}/>
                </Slide>
                  
              ))}
              
          </Slider>
          
          <DotGroup className="gallery--nav gallery--nav-location"/>
        </CarouselProvider>
        </div>

        <div className="singleloc__detail--data">
          {
            Object.values(data.fields.technische_daten).map( (locData, key) => (
              <div key={key} className="singleloc__detail--dataitem">
                  <span className="dataitem--key">{locData.name}</span>
                  <span className="dataitem--value">{locData.option}</span>
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
