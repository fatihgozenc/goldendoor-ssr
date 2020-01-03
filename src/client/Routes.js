import App from './App';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import LocationsPage from './pages/LocationsPage';
// import LocationPage from './pages/LocationPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				...AboutUsPage,
				path: ["/uber-uns", "/about-us"]
			},
			{
				...LocationsPage,
				path: ["/locations", "/locations-en"]
			},
			// {
			// 	...LocationPage,
			// 	path: ["/locations/:slug", "/locations-en/:slug"],
			// 	exact: true
			// },
			{
				...NotFoundPage
			}
		]
	}
];

