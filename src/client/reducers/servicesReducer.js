import { FETCH_SERVICES } from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_SERVICES:
			return action.payload.data;
		default:
			return state;
	}
};
