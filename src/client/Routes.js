import App from './App';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';
import LocationsPage from './pages/LocationsPage';
import LocationPage from './pages/LocationPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: ['/', '/en'],
				exact: true
			},
			{
				...AboutUsPage,
				path: ["/uber-uns", "/en/uber-uns", "/en/about-us"]
			},
			{
				...LocationsPage,
				path: ["/locations", "/en/locations"],
				exact: true
			},
			{
				...LocationPage,
				path: ["/locations/:slug", "/en/locations/:slug"],
				exact: true
			},
			{
				...ContactPage,
				path: ["/kontakt", "/en/kontakt", "/en/contact"]
			},
			{
				...CareerPage,
				path: ["/karriere", "/en/karriere", "/en/career"]
			},
			{
				...NotFoundPage
			}
		]
	}
];

