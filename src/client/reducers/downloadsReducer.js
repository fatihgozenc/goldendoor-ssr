import {FETCH_DOWNLOADS} from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_DOWNLOADS:
			return action.payload.data;
		default:
			return state;
	}
};
