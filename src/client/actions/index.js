// IF U WANT TO ACCESS ANOTHER API,
// IMPORT AXIOS LIB
export const FETCH_LAYOUT = 'fetch_layout';
export const fetchLayout = () => async (dispatch, getState, axiosInstance) => {
	const res = await axiosInstance.get('/layout');

	dispatch({
		type: FETCH_LAYOUT,
		payload: res
	});
};

export const FETCH_HOME = 'fetch_home';
export const fetchHome = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get('/home');

	dispatch({
		type: FETCH_HOME,
		payload: res
	});
};

export const FETCH_ABOUTUS = 'fetch_aboutus';
export const fetchAboutUs = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get('/aboutus');

	dispatch({
		type: FETCH_ABOUTUS,
		payload: res
	});
};

export const FETCH_LOCATIONS = 'fetch_locations';
export const fetchLocations = () => async (dispatch, getState, axiosInstance) => {
	console.log(axiosInstance)

	const res = await axiosInstance.get('/locations');

	dispatch({
		type: FETCH_LOCATIONS,
		payload: res
	});
};



export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get('/users');

	dispatch({
		type: FETCH_USERS,
		payload: res
	});
};
