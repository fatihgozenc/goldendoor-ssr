import React from 'react';
import ReactMapGL from 'react-map-gl';
import '~mapbox-gl/dist/mapbox-gl.css';

const MapContainer = () => {

  const [viewport, setViewport] = React.useState({
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13
    }
  });

  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZmdvemVuYyIsImEiOiJjazVoMG9tMjUwY2p1M2xueHUzaXdyY2MzIn0.i6wqAEOUFdUyKEMcrUE__Q"
        onViewportChange={(viewport) => setViewport({viewport})}
        {...viewport}
      />
    </>
  )
}

export default MapContainer;