import React from 'react';
import { useSelector } from 'react-redux';
import { fetchReference } from '../actions';
import Hero from '../components/Hero'
import parse from 'html-react-parser';

const ReferencePage = () => {

	const data = useSelector(state => state.reference);

	return (
		<>
			<Hero data={data} />
			<div id="content" className="services">hello</div>
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