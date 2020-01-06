import {FETCH_CONTACT} from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_CONTACT:
			return action.payload.data;
		default:
			return state;
	}
};
