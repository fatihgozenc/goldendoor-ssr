import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import serialize from 'serialize-javascript';
import {Helmet} from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context, preloadedState) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				{renderRoutes(Routes)}
			</StaticRouter>
		</Provider>
	);

	const helmet = Helmet.renderStatic();

	return `
		<html>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
				<link href="data:image/x-icon;" rel="shortcut icon" />
				<link rel="stylesheet" type="text/css" href="main.css">
			</head>
			<body>
				<div id="root">${content}</div>
				<script>window.__PRELOADED_STATE__ = ${serialize(store.getState())}</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
}
