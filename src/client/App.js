import React from 'react';
import {renderRoutes} from 'react-router-config';
import {useSelector} from 'react-redux';
import {fetchLayout} from './actions';
import Layout from './Layout';

const App = ({route, match, history, location}) => {

	const layoutData = useSelector(state => state.layout);

	return (
		<Layout layoutData={layoutData} match={match} history={history} location={location}>
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
