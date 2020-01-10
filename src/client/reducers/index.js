import { combineReducers } from 'redux';
import layoutReducer from './layoutReducer';
import homeReducer from './homeReducer';
import aboutusReducer from './aboutusReducer';
import contactReducer from './contactReducer';
import careerReducer from './careerReducer';
import locationsReducer from './locationsReducer';
import locationReducer from './locationReducer';

export default combineReducers({
	layout: layoutReducer,
	home: homeReducer,
	aboutus: aboutusReducer,
	contact: contactReducer,
	career: careerReducer,
	locations: locationsReducer,
	location: locationReducer
});
