import React from 'react';
import {useSelector} from 'react-redux';
import { fetchLocations } from '../actions';

const LocationsPage = () => {

  const locationsData = useSelector(state => state.locations);
  console.log(locationsData)
  return (
  <>
    <div>lcoations</div>
  </>
  )
};

function loadData(store){
	return store.dispatch(fetchLocations());
}

export default{
	loadData,
	component: LocationsPage
}
