import React from 'react';
import { useSelector } from 'react-redux';
import { fetchAboutUs } from '../actions';
import Hero from '../components/Hero'
import parse from 'html-react-parser';

const AboutUsPage = () => {

	const aboutusData = useSelector(state => state.aboutus);
	const story = aboutusData.fields.uber_uns_story;
	const philosophy = aboutusData.fields.uber_uns_philosophy;
	const extra_text_1 = aboutusData.fields.uber_uns_extra_text.extra_text_block_1;
	const extra_text_2 = aboutusData.fields.uber_uns_extra_text.extra_text_block_2;

	return (
		<>
			<Hero data={aboutusData} />
			<div id="content">

				<div className="story story--right">
					<div className="story__img backgroundImg" style={{ backgroundImage: "url(" + story.story_bild + ")" }} />
					<div className="story__content">
						<h2 className="title__lg">{story.story_titel}</h2>
						{parse(story.story_inhalt)}
					</div>
				</div>

				<div className="extratext">
					{/* {parse(extra_text_1)}
					{parse(extra_text_2)} */}
				</div>

				<div className="story story--left">
					<div className="story__content">
						<h2 className="title__lg">{philosophy.philosophy_titel}</h2>
						{parse(philosophy.philosophy_inhalt)}
					</div>
					<div className="story__img backgroundImg" style={{ backgroundImage: "url(" + philosophy.philosophy_bild + ")" }} />
				</div>

			</div>
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchAboutUs());
}

export default {
	loadData,
	component: AboutUsPage
}
