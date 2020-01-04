import React from 'react';
import {useSelector} from 'react-redux';
import { fetchLocation } from '../actions';

const LocationPage = () => {

  const locationData = useSelector(state => state.location);
  console.log(locationData)
  return (
  <>
    <div>single location page</div>
  </>
  )
};

function loadData(store){
	return store.dispatch(fetchLocation());
}

export default{
	loadData,
	component: LocationPage
}
