import React from 'react';
import {renderRoutes} from 'react-router-config';
import {useSelector} from 'react-redux';
import {fetchLayout} from './actions';
import Layout from './Layout';

const App = ({route}) => {

	const layoutData = useSelector(state => state.layout);

	return (
		<Layout layoutData={layoutData}>
			{renderRoutes(route.routes)}
		</Layout>
	)
}

function loadData(store){
	return store.dispatch(fetchLayout());
}

export default{
	loadData,
	component: App
}
