import { FETCH_TEAM } from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_TEAM:
			return action.payload.data;
		default:
			return state;
	}
};
