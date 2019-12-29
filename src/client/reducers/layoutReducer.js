import {FETCH_LAYOUT} from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_LAYOUT:
			return action.payload.data;
		default:
			return state;
	}
};
