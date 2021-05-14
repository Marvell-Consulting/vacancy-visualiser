import React, { Fragment, useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import { State } from '../state';

const Map = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);

  const { state, actions } = useContext(State);
  const { mapbox } = state;

  useEffect(() => {
    mapboxgl.accessToken = mapbox.key;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapbox.lng, mapbox.lat],
      zoom: mapbox.zoom
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      const position = {
        ...map.current.getCenter(),
        zoom: map.current.getZoom()
      };
      actions.map.move(position);
    });
  }, [map]);

  return <Fragment>
    <div ref={mapContainer} className="map-container" />
  </Fragment>
};

export default Map;
