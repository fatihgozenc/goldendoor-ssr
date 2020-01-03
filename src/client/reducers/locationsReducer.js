import {FETCH_LOCATIONS} from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_LOCATIONS:
			return action.payload.data;
		default:
			return state;
	}
};
