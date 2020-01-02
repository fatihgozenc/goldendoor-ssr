import {FETCH_HOME} from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_HOME:
			return action.payload.data;
		default:
			return state;
	}
};
