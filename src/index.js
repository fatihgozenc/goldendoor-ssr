import "regenerator-runtime/runtime";
import express from 'express';
import compression from 'compression';
import renderer from './helpers/renderer';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';
import createStore from './helpers/createStore';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static('public'));

app.get('*', (req, res) => {

	let lang = req.headers.cookie === 'lang=en' ? 'en' : 'de';

	console.log(req.path)

	const store = createStore(req, lang);

	const promises = matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData ? route.loadData(store) : null;
	}).map(promise => {
		if (promise) {
			return new Promise((resolve, reject) => {
				promise.then(resolve).catch(resolve);
			});
		}
	});

	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);

		if (context.url){
			return res.redirect(301, context.url)
		}

		if (context.notFound){
			res.status(404);
		}
		res.cookie('lang', lang)
		res.send(content);
	});

});

app.listen(PORT,() => {
	console.log('Listening on port 3000');
});

