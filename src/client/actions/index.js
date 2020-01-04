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

	const res = await axiosInstance.get('/locations');

	dispatch({
		type: FETCH_LOCATIONS,
		payload: res
	});
};

function getLocationSlug(language, slug){
	const slugPattern = /(\/.*)(\/.*)/i;
	const filteredSlug = slug.match(slugPattern)[2];
	return language === 'en' ? filteredSlug + '-en' : filteredSlug;
}

export const FETCH_LOCATION = 'fetch_location';
export const fetchLocation = () => async (dispatch, getState, axiosInstance) => {

	const slug = getLocationSlug(axiosInstance.defaults.params.language, axiosInstance.defaults.params.slug)
	console.log(slug)

	const res = await axiosInstance.get(`/locations${slug}`);

	dispatch({
		type: FETCH_LOCATION,
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
