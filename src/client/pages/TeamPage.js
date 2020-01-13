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

	return (
		<>
			<Hero data={teamData} />
			<div id="content" className="team">

				<div className="carousel__3D">
					<Carousel
						imgList={images}
						img_width={250}
						img_height={280}
						visibleImages={5}
						duration={750}
					/>
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