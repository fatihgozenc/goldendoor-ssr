import { FETCH_CAREER } from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_CAREER:
			return action.payload.data;
		default:
			return state;
	}
};
