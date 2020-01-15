import {FETCH_GALLERY} from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_GALLERY:
			return action.payload.data;
		default:
			return state;
	}
};
