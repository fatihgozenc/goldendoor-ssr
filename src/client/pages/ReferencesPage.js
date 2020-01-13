import React from 'react';
import { useSelector } from 'react-redux';
import { fetchReferences } from '../actions';
import Hero from '../components/Hero'
import parse from 'html-react-parser';

const ReferencesPage = () => {
	const data = useSelector(state => state.references);
	console.log(data)
	return (
		<>
			<Hero data={data.main} />
			<div id="content" className="pool pool--home">
				{/* {data.children.map((route, key) => (

					<a key={key} className="home__route" href={route.slug}>
						<div className="home__route--wrapper">
							<div className="home__route--img backgroundImg"
								style={{ backgroundImage: "url(" + route.bild + ")" }} />
							<div className="home__route--content">
								<h3 className="title__lg">{route.titel}</h3>
								{parse(route.inhalt)}
								<span className="home__route--link">{route.titel} →</span>
							</div>
						</div>
					</a>

				))} */}
			</div>
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchReferences());
}

export default {
	loadData,
	component: ReferencesPage
}