import React from 'react';
import {useSelector} from 'react-redux';
import { fetchHome } from '../actions';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

const Home = () => {

	const homeData = useSelector(state => state.home);
	const isMobile = React.useRef();

	console.log(isMobile.current)
	return(
		<>
			<div className="preface">
					<h2>{parse(homeData.fields.titel)}</h2>
					<p>{parse(homeData.content)}</p>
			</div>
			<div className="pool pool--home">
				{homeData.fields.routers.map((route, key) => ( 

						<Link key={key} className="home__route" to={route.link}>
							<div className="home__route--wrapper">
								<div className="home__route--img backgroundImg" 
								style={{backgroundImage: "url(" + route.bild + ")"}} />
								<div className="home__route--content">
									<h3>{route.titel}</h3>
									{parse(route.inhalt)}
									<span className="home__route--link">{route.titel} ></span>
								</div>
							</div>
						</Link>

				))}
			</div>
		</>
	)
}

function loadData(store){
	return store.dispatch(fetchHome());
}

export default{
	loadData,
	component: Home
}
