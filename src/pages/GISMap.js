import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VyZGVuIiwiYSI6ImNrdXNjc2hieTA4eGcydXA3bWh2MjB5MHkifQ.z5J1hvtLc0ycQqON5CG8Ag';

const apiKey = "AAPK6bd185bf412d414eb2e053eccb8affeeh7uMJHmXBKwjo81GaJzZXS8CvmzE1xqbYDHitrtaD7UMQ7i19YAJFZWfqpreC1gD";
const basemapEnum = "ArcGIS:Topographic";

export default function GISMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-4.2518);
  const [lat, setLat] = useState(55.8642);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`,
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
