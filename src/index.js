import "regenerator-runtime/runtime";
import express from 'express';
import compression from 'compression';
//import proxy from 'express-http-proxy';
import renderer from './helpers/renderer';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';
import createStore from './helpers/createStore';

const app = express();
const PORT = process.env.PORT || 3000;
/*
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
		// THIS OPTION IS SPESIFIC FOR TUTORIAL.
		proxyReqOptDecorator(opts) {
			opts.headers['x-forwarded-host'] = 'localhost:3000';
			return opts;
		}
	})
);
*/
app.use(compression());
app.use(express.static('public'));

app.get('*', (req, res) => {

	const store = createStore(req);
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

		res.send(content);
	});

});

app.listen(PORT,() => {
	console.log('Listening on port 3000');
});
