import App from './App';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';
import LocationsPage from './pages/LocationsPage';
import LocationPage from './pages/LocationPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import ReferencesPage from './pages/ReferencesPage';
import ReferencePage from './pages/ReferencePage';
import GalleryPage from './pages/GalleryPage';
import DownloadsPage from './pages/DownloadsPage';
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
				path: ["/uber-uns", "/en/uber-uns"]
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
				path: ["/kontakt", "/en/kontakt"]
			},
			{
				...CareerPage,
				path: ["/karriere", "/en/karriere"]
			},
			{
				...TeamPage,
				path: ["/team", "/en/team"]
			},
			{
				...ServicesPage,
				path: ["/leistungen", "/en/leistungen"]
			},
			{
				...DownloadsPage,
				path: ["/downloads", "/en/downloads"]
			},
			{
				...GalleryPage,
				path: ["/galerie", "/en/galerie"]
			},
			{
				...ReferencesPage,
				path: ["/referenzen", "/en/referenzen", "/referenzen/page/:id", "/en/referenzen/page/:id"],
				exact: true
			},
			{
				...ReferencePage,
				path: ["/referenzen/:slug", "/en/referenzen/:slug"],
				exact: true
			},
			{
				...NotFoundPage
			}
		]
	}
];

