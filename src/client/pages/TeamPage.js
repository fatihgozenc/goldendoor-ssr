import React from 'react';
import { useSelector } from 'react-redux';
import { fetchTeam } from '../actions';
import Hero from '../components/Hero'
import parse from 'html-react-parser';

const TeamPage = () => {
	const data = useSelector(state => state.team);

	return (
		<>
			<Hero data={data} />
			<div id="content" className="services">hello</div>
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