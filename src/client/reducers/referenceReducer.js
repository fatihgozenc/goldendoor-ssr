import { FETCH_REFERENCE } from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_REFERENCE:
			return action.payload.data;
		default:
			return state;
	}
};
