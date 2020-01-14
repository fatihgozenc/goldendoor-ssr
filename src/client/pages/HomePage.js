import React from 'react';
import { useSelector } from 'react-redux';
import { fetchHome } from '../actions';
import parse from 'html-react-parser';
import MehrLesen from '../components/MehrLesen';
import Opening from '../components/opening/Opening';

const Home = () => {

	const homeData = useSelector(state => state.home);
	const paragraphs = homeData.content.split("\n\r");

	return (
		<>
			<Opening data={homeData.fields.text_slider} />
			<div className="preface">
				<h2>{parse(homeData.fields.titel)}</h2>
				<div className="preface__blocks">

					{paragraphs.map((paragraph, key) => (
						<p key={key}>{paragraph}</p>
					))}

				</div>
			</div>
			<div className="pool pool--home">
				{homeData.fields.routers.map((route, key) => (

					<a key={key} className="home__route" href={route.link}>
						<div className="home__route--wrapper">
							<div className="home__route--img backgroundImg"
								style={{ backgroundImage: "url(" + route.bild + ")" }} />
							<div className="home__route--content">
								<h3 className="title__lg">{route.titel}</h3>
								{parse(route.inhalt)}
								<span className="home__route--link">
									<MehrLesen name={route.titel}/>
								</span>
							</div>
						</div>
					</a>

				))}
			</div>
		</>
	)
}

function loadData(store) {
	return store.dispatch(fetchHome());
}

export default {
	loadData,
	component: Home
}
