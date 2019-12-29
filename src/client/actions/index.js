// IF U WANT TO ACCESS ANOTHER API,
// IMPORT AXIOS LIB

export const FETCH_LAYOUT = 'fetch_layout';
export const fetchLayout = () => async (dispatch, getState, api) => {

	const res = await api.get('/layout');

	dispatch({
		type: FETCH_LAYOUT,
		payload: res
	});
};

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {

	const res = await api.get('/users');

	dispatch({
		type: FETCH_USERS,
		payload: res
	});
};