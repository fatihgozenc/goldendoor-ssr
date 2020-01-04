import {FETCH_LOCATION} from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_LOCATION:
			return action.payload.data;
		default:
			return state;
	}
};
