import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useRef } from 'react';

const defaultCenter = [10.303418, 5.952230];
const defaultZoom = 2;

export default function MapView() {
    const mapRef = useRef();

  return (
    <div className="App">
      <MapContainer ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </MapContainer>
      <div>
        <h1> Top 5 locations matching your search </h1>
      </div>
    </div>
  );
}

