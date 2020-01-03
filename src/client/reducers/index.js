import { combineReducers } from 'redux';
import layoutReducer from './layoutReducer';
import homeReducer from './homeReducer';
import aboutusReducer from './aboutusReducer';
import locationsReducer from './locationsReducer';

export default combineReducers({
	layout: layoutReducer,
	home: homeReducer,
	aboutus: aboutusReducer,
	locations: locationsReducer
});
