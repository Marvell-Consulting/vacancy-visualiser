import React, { Fragment, useRef, useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import { State } from '../state';

const Map = () => {

  const mapContainer = useRef(null);
  const mapElement = useRef(null);

  const { state, actions } = useContext(State);
  const { config, map } = state;

  useEffect(() => {
    mapboxgl.accessToken = config.mapbox.key;
    mapElement.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [map.lng, map.lat],
      zoom: map.zoom
    });
  }, []);

  useEffect(() => {
    if (!mapElement.current) return;
    mapElement.current.on('move', () => {
      const position = {
        ...mapElement.current.getCenter(),
        zoom: mapElement.current.getZoom()
      };
      actions.map.move(position);
    });
  }, [mapElement]);

  return <Fragment>
    <div ref={mapContainer} className="map-container" />
  </Fragment>
};

export default Map;
