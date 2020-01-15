import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import serialize from 'serialize-javascript';
import {Helmet} from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
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
				<meta charset="UTF-8">
				${helmet.title.toString()}
				${helmet.meta.toString()}
				<meta property="og:type" content="website">
				<meta property="og:url" content="https://goldendoor.group/">
				<meta property="og:site_name" content="Golden Door Group">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="https://fonts.googleapis.com/css?family=Lato:400,900|Noto+Serif:400,700&display=swap" rel="stylesheet">
				<link href="data:image/x-icon;" rel="shortcut icon" />
				<link rel="stylesheet" type="text/css" href="/main.css">
			</head>
			<body>
				<div id="root">${content}</div>
				<script>window.__PRELOADED_STATE__ = ${serialize(store.getState())}</script>
				<script src="/bundle.js"></script>
				<script type="text/javascript">
				(function (d, t) {
					var pp = d.createElement(t), s = d.getElementsByTagName(t)[0];
					pp.src = '//app.pageproofer.com/overlay/js/4956/1600';
					pp.type = 'text/javascript';
					pp.async = true;
					s.parentNode.insertBefore(pp, s);
				})(document, 'script');
				</script>
			</body>
		</html>
	`;
}
