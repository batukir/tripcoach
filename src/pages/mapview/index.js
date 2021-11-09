import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import icon from "../../constants";
import { useLocation } from "react-router-dom";

const defaultCenter = [10.303418, 5.95223];
const defaultZoom = 2;

const disneyLandLatLng = [33.8121, -117.919];

export default function MapView() {
  const location = useLocation();
  const [map, setMap] = useState(null);
  function handleOnFlyTo() {
    map.flyTo(disneyLandLatLng, 12);
  }
  const { checkboxContinents, checkboxPreferences, peopleValue, budgetValue } = location.state;

  return (
    <div className="App">
      {console.log(checkboxContinents[0].isChecked)}
      {console.log(checkboxPreferences)}
      {console.log(peopleValue.value)}
      {console.log(budgetValue)}
      <MapContainer
        whenCreated={setMap}
        center={defaultCenter}
        zoom={defaultZoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={disneyLandLatLng} icon={icon}>
          <Popup>
            Fly here <br /> Click button
          </Popup>
        </Marker>
      </MapContainer>
      <div>
        <h1> Top 3 locations matching your search </h1>
        <button onClick={handleOnFlyTo}>Fly to Disneyland</button>
      </div>
    </div>
  );
}
