import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import { fetchGallery } from '../actions';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import parse from 'html-react-parser';
import LoopingGallery from '../components/LoopingGallery';

const GalleryPage = () => {

	const data = useSelector(state => state.gallery);
	const items = data.fields.galerie_eintrage;
	console.log(items)

	return (
		<>
			<div className="page__title page__title--contact">
				<Breadcrumb slug={data.slug} title={data.title} />
				<h1>{data.title}</h1>
			</div>
			<div className="gallery">

				<LoopingGallery data={items}/>
				
				<div className="home__slider">
					<CarouselProvider
							naturalSlideWidth={220}
							naturalSlideHeight={180}
							totalSlides={items.length}
							infinite={true}
					>
							<Slider className="home__slider--wrapper gallery__slider--wrapper">

									{items.map((item, key) => (

											<Slide slideindex={key} className={`img-${item.bild.id}`} key={item.bild.id} index={key}>
													<img src={item.bild.sizes["1536x1536"]} alt={item.info.titel}/>
													<h5>{item.info.titel}</h5>
													{parse(item.inhalt)}
											</Slide>
											
									))}
									
							</Slider>
							<DotGroup/>
					</CarouselProvider>
				</div>

			</div>
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchGallery());
}

export default {
	loadData,
	component: GalleryPage
}