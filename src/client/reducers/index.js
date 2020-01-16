import { combineReducers } from 'redux';
import layoutReducer from './layoutReducer';
import homeReducer from './homeReducer';
import aboutusReducer from './aboutusReducer';
import contactReducer from './contactReducer';
import careerReducer from './careerReducer';
import teamReducer from './teamReducer';
import servicesReducer from './servicesReducer';
import galleryReducer from './galleryReducer';
import downloadsReducer from './downloadsReducer';
import locationsReducer from './locationsReducer';
import locationReducer from './locationReducer';
import referencesReducer from './referencesReducer';
import referenceReducer from './referenceReducer';

export default combineReducers({
	layout: layoutReducer,
	home: homeReducer,
	aboutus: aboutusReducer,
	contact: contactReducer,
	downloads: downloadsReducer,
	career: careerReducer,
	gallery: galleryReducer,
	team: teamReducer,
	services: servicesReducer,
	references: referencesReducer,
	reference: referenceReducer,
	locations: locationsReducer,
	location: locationReducer
});
