import React from 'react';
import { useSelector } from 'react-redux';
import { fetchServices } from '../actions';
import Hero from '../components/Hero'
import parse from 'html-react-parser';

const ServicesPage = () => {
	const data = useSelector(state => state.services);

	return (
		<>
			<Hero data={data} />
			<div id="content" className="services">hello</div>
		</>
	)
};

function loadData(store) {
	return store.dispatch(fetchServices());
}

export default {
	loadData,
	component: ServicesPage
}