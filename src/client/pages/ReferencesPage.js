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
			<div id="content" className="references">hello</div>
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