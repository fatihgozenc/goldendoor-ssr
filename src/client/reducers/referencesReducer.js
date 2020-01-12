import { FETCH_REFERENCES } from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_REFERENCES:
			return action.payload.data;
		default:
			return state;
	}
};
