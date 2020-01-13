import React from 'react';
import { useSelector } from 'react-redux';
import { fetchReference } from '../actions';
import Hero from '../components/Hero'
import parse from 'html-react-parser';

const ReferencePage = () => {

	const data = useSelector(state => state.reference);
	console.log(data)

	const heroData = {
		slug: data.slug,
		title: data.title,
		content: data.excerpt,
		image: data.image,
		scroll: data.scroll
	}

	return (
		<>
			<Hero data={heroData} className="hero--reference" />
			<div id="content" className="reference">

			</div>
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