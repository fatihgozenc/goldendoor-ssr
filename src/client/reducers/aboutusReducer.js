import {FETCH_ABOUTUS} from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_ABOUTUS:
			return action.payload.data;
		default:
			return state;
	}
};
