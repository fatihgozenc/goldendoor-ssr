import React from 'react';
import { useSelector } from 'react-redux';
import { fetchReference } from '../actions';
import Hero from '../components/Hero'
import parse from 'html-react-parser';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import MehrLesen from '../components/MehrLesen';

const ReferencePage = () => {

	const data = useSelector(state => state.reference);

	const heroData = {
		slug: data.slug,
		title: data.title,
		content: data.excerpt,
		image: data.image,
		scroll: data.scroll
	}

	console.log(data)

	return (
		<>
			<Hero data={heroData} className="hero--reference" />
			<div id="content" className="reference">

				<div className="reference__info">
					<h3>{data.title}</h3>
					<p>{parse(data.content.replace(/\n/g, "<br />"))}</p>

					<div className="reference__info--utils">

						<a className="reference__info--related" href={data.lang === 'de' ? `/locations/${data.fields.referenz_ort}` : `/en/locations/${data.fields.referenz_ort}`}><span className="reference__info--related-loc">LOCATION:</span>
							<MehrLesen name={data.fields.referenz_ort.toUpperCase()}/>
						</a>
						<div className="reference__info--linkgroup">
							<a className="" href={data.lang === 'de' ? `/referenzen/${data.prev}` : `/en/referenzen/${data.prev}`}>
								&larr; {data.lang === 'de' ? 'BISHERIGE REFERENZ' : 'PREVIOUS REFERENCE'}</a>
							<a className="" href={data.lang === 'de' ? `/referenzen/${data.next}` : `/en/referenzen/${data.next}`}>
								{data.lang === 'de' ? 'NÄCHSTE REFERENZ' : 'NEXT REFERENCE'} &rarr;</a>
						</div>

					</div>


				</div>

				<div className="singleloc__gallery reference__gallery">
					<CarouselProvider
							naturalSlideWidth={500}
							naturalSlideHeight={600}
							totalSlides={data.fields.referenz_slider.length}
							isPlaying={true}
							interval={5000}
							infinite={true}
					>
						<Slider className="singleloc__gallery--wrapper reference__gallery--wrapper">

								{data.fields.referenz_slider.map((item, imageKey) => (

									<Slide key={imageKey} index={imageKey}>
											<img width="100%" src={item}/>
									</Slide>
										
								))}
								
						</Slider>
						
						<DotGroup className="gallery--nav"/>
					</CarouselProvider>
				</div>

			</div>
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchReference());
}

export default {
	loadData,
	component: ReferencePage
}