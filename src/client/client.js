import "regenerator-runtime/runtime";
import React from 'react';
import {hydrate} from 'react-dom';
import axios from 'axios';
import {renderRoutes } from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
	baseURL: '/en'
})

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(
	reducers, 
	preloadedState,
	applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

hydrate(
	<Provider store={store}>
		<BrowserRouter>
				{renderRoutes(Routes)}
		</BrowserRouter>
	</Provider>
	, document.querySelector('#root'));
