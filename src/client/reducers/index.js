import { combineReducers } from 'redux';
import layoutReducer from './layoutReducer';
import homeReducer from './homeReducer';

export default combineReducers({
	layout: layoutReducer,
	home: homeReducer
});
