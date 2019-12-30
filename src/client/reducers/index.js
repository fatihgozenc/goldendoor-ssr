import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import layoutReducer from './layoutReducer';

export default combineReducers({
//	users: usersReducer,
	layout: layoutReducer
});
