import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import { fetchGallery } from '../actions';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import parse from 'html-react-parser';
import LoopingGallery from '../components/LoopingGallery';
import Icon from '../components/Icon';

const GalleryPage = () => {

	const data = useSelector(state => state.gallery);
	const items = data.fields.galerie_eintrage;

	const closeGallery = (e) => {
		const bigParent = e.currentTarget.parentElement.parentElement;
		e.currentTarget.parentElement.classList.remove('gallerySliderBlockOpen')
		bigParent.classList.remove('gallerySliderOpen')
		setTimeout(() => {
			bigParent.classList.remove('show')
		}, 750);
	}

	const windowObject = React.useRef();
	const [windowWidth, setWindowWidth] = React.useState(0);
	const [windowHeight, setWindowHeight] = React.useState(0);

	React.useEffect(()=>{
		setWindowWidth(windowObject.current.getBoundingClientRect().width)
		setWindowHeight(windowObject.current.getBoundingClientRect().height)
	})

	return (
		<div className="page--gallery">
			<div className="page__title page__title--contact">
				<Breadcrumb slug={data.slug} title={data.title} />
				<h1>{data.title}</h1>
			</div>
			<div ref={windowObject} className="window"/>
			<div className="gallery">

				<LoopingGallery data={items} windowWidth={windowWidth} windowHeight={windowHeight}/>

				<div className="gallery__slider">
					<div className="gallery__slider--block">
						<div className="gallery__slider--close" onClick={closeGallery}>
							<Icon type="cross"/>
						</div>
						<CarouselProvider
								naturalSlideWidth={220}
								naturalSlideHeight={180}
								totalSlides={items.length}
								infinite={true}
						>
								<Slider className="gallery__slider--wrapper">

										{items.map((item, key) => (

												<Slide slideindex={key} className={`img-${item.bild.id}`} key={item.bild.id} index={key}>
														<img src={item.bild.sizes["1536x1536"]} alt={item.info.titel}/>
														<h5>{item.info.titel} | <span>{item.info.veranstaltungsart}</span></h5>
														{parse(item.inhalt)}
												</Slide>
												
										))}
										
								</Slider>
								<ButtonBack className="gallery__slider-nav gallery__slider-nav--back"/>
								<ButtonNext className="gallery__slider-nav gallery__slider-nav--next"/>
								<DotGroup/>
						</CarouselProvider>
					</div>

				</div>

			</div>
			</div>
	)
};

function loadData(store) {
	return store.dispatch(fetchGallery());
}

export default {
	loadData,
	component: GalleryPage
}