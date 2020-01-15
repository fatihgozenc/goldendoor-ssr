import "regenerator-runtime/runtime";
import express from 'express';
import compression from 'compression';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import createStore from './helpers/createStore';

const app = express();
const PORT = process.env.PORT || 3000;

const getLang = (browserCookie, requestPath) => {
	if (requestPath === '/en/' || requestPath === '/en') {
		return 'en'
	} else if (requestPath === null || '/') {
		return 'de'
	} else if (browserCookie === 'lang=de') {
		return 'de'
	} else if (browserCookie === 'lang=en') {
		return 'en'
	} else {
		return 'de'
	}
}

app.use(compression());
app.use(express.static('public'));
app.get('*', (req, res, next) => {

	const reqPattern = /\/en/;
	const filteredReq = req.path.match(reqPattern) ? req.path.match(reqPattern)[0] : null;
	const lang = getLang(req.headers.cookie, filteredReq)

	// console.log(`Lang is: ${lang}, request is: ${req.path}, requested lang is: ${filteredReq} local is: ${local}`)

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
			return res.redirect(301, context.url)
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

app.listen(PORT, () => {
	console.log('Listening on port 3000');
});

