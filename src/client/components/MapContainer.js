import React from 'react';
import ReactMapGL, {Marker}  from 'react-map-gl';
import Icon from '../components/Icon';
import isBrowser from 'is-in-browser';
if (isBrowser) {
  require ('mapbox-gl/dist/mapbox-gl.css')
}

const MapContainer = () => {

  const [viewport, setViewport] = React.useState({
      width: '100%',
      height: '100%',
      latitude: 51.0706,
      longitude: 13.7125,
      zoom: 16.5
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZmdvemVuYyIsImEiOiJjazVoMG9tMjUwY2p1M2xueHUzaXdyY2MzIn0.i6wqAEOUFdUyKEMcrUE__Q"
        onViewportChange={(viewport) => setViewport({...viewport})}
      >
        <Marker latitude={51.0706} longitude={13.7125} offsetLeft={0} offsetTop={0}>
          <Icon type="mapMarker"/>
        </Marker>
      </ReactMapGL>
    </>
  )
}

export default MapContainer;
