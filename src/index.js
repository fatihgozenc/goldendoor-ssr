'use strict';

require('dotenv').config();
import "regenerator-runtime/runtime";
import express from 'express';
import compression from 'compression';
import { matchRoutes } from 'react-router-config';

import renderer from './helpers/renderer';
import Routes from './client/Routes';
import createStore from './helpers/createStore';
import getLang from './helpers/getLang';

const app = express();

console.log(process.env.NODE_ENV)

app.use(compression());

app.use(express.static('public'));

app.get('*', (req, res, next) => {
	const reqPattern = /\/en/;
	const filteredReq = req.path.match(reqPattern) ? req.path.match(reqPattern)[0] : null;
	const lang = getLang(req.headers.cookie, filteredReq)

	const store = createStore(req, lang);

	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null;
	}).map(promise => {
		if (promise) {
			return new Promise((resolve, reject) => {
				promise.then(resolve).catch(resolve);
			});
		} else {
			next();
		}
	});

	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);

		if (context.url) {
			return (res.redirect(301, context.url) )
		} else {
			next();
		}

		if (context.notFound) {
			res.status(404);
		} else {
			next();
		}
		
		res.cookie('lang', lang)
		res.send(content);
	});


});

app.listen(process.env.PORT, () => {
	console.log('Listening on port ' + process.env.PORT);
});

