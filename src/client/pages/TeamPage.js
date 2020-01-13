import React from 'react';
import { useSelector } from 'react-redux';
import { fetchTeam } from '../actions';
import Hero from '../components/Hero'
import parse from 'html-react-parser';
import Carousel from '../components/Carousel'

const TeamPage = () => {
	const teamData = useSelector(state => state.team);

	const data = teamData.fields.mitarbeiter_info;
	const lastFourOfData = data.slice(data.length - 2, data.length);
	const combinedData = [...lastFourOfData, ...data];
	const images = data.map(item => (
		item.mitarbeiter_bild
	))

	console.log(teamData)

	return (
		<>
			<Hero data={teamData} />
			<div id="content" className="team">
				<Carousel
					data={data}
					imgList={images}
					img_width={250}
					img_height={280}
					visibleImages={5}
					duration={750}
				/>
				<div className="team__lastblock">
					<h5>{teamData.fields.karriere_text}</h5>
					<a className="golden__button" href={teamData.fields.karriere_button.link}>{teamData.fields.karriere_button.text}</a>
				</div>
			</div>
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchTeam());
}

export default {
	loadData,
	component: TeamPage
}