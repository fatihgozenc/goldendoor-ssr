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

function getLocationSlug(slug) {
	const slugPattern = /(\/.*)(\/.*)/i;
	const filteredSlug = slug.match(slugPattern)[2];
	// return language === 'en' ? filteredSlug + '-en' : filteredSlug;
	return filteredSlug;
}

export const FETCH_LOCATION = 'fetch_location';
export const fetchLocation = () => async (dispatch, getState, axiosInstance) => {

	const slug = getLocationSlug(axiosInstance.defaults.params.slug)
	const lang = axiosInstance.defaults.params.language
	console.log(`Request to API is: ${slug}`)

	const res = await axiosInstance.get(`/locations${slug}`);

	dispatch({
		type: FETCH_LOCATION,
		payload: res
	});
};

export const FETCH_CONTACT = 'fetch_contact';
export const fetchContact = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get('/contact');

	dispatch({
		type: FETCH_CONTACT,
		payload: res
	});
};

export const FETCH_CAREER = 'fetch_career';
export const fetchCareer = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get('/career');

	dispatch({
		type: FETCH_CAREER,
		payload: res
	});
};

export const FETCH_SERVICES = 'fetch_services';
export const fetchServices = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get('/services');

	dispatch({
		type: FETCH_SERVICES,
		payload: res
	});
};

export const FETCH_TEAM = 'fetch_team';
export const fetchTeam = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get('/team');

	dispatch({
		type: FETCH_TEAM,
		payload: res
	});
};

export const FETCH_REFERENCES = 'fetch_references';
export const fetchReferences = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get('/references/page/1');

	dispatch({
		type: FETCH_REFERENCES,
		payload: res
	});
};

export const FETCH_REFERENCE = 'fetch_reference';
export const fetchReference = () => async (dispatch, getState, axiosInstance) => {

	const res = await axiosInstance.get(`/references${slug}`);

	dispatch({
		type: FETCH_REFERENCE,
		payload: res
	});
};