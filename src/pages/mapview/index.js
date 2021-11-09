import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import icon from "../../constants";
import { useLocation } from "react-router-dom";

const defaultCenter = [10.303418, 5.95223];
const defaultZoom = 2;


export default function MapView() {
  const WorldCities = require('worldcities');
  const RandomCity = Math.floor(Math.random() * 50)
  const cities = WorldCities.getLargestCities('NA', 50)
  const city =  cities[RandomCity]
  const cityLatLng = [city.latitude, city.longitude];

  const location = useLocation();
  const [map, setMap] = useState(null);
  function handleOnFlyTo() {
    map.flyTo(cityLatLng, 12);
  }
  const { checkboxContinents, checkboxPreferences, peopleValue, budgetValue } = location.state;
  function refreshPage() {
    window.location.reload(false);
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  const cityName = city.country.wikipedia.split('_').join(' ');
  return (
    <div className="App">
      {console.log(checkboxContinents[0].isChecked)}
      {console.log(checkboxPreferences)}
      {console.log(peopleValue.value)}
      {console.log(budgetValue)}
      {console.log(cityLatLng)}
      {console.log('country', city.country.capital)}
      {console.log(Math.floor(Math.random() * 20))}
      <MapContainer
        whenCreated={setMap}
        center={defaultCenter}
        zoom={defaultZoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={cityLatLng} icon={icon}>
          <Popup>
            Fly here <br /> Click button
          </Popup>
        </Marker>
      </MapContainer>
      <div>
        <h1> We believe {city.name} is a great match! </h1>
        <p> Click to zoom to location </p>
        <button onClick={handleOnFlyTo}>Fly to {city.name}</button>
        <p/>
        <p> Country: {cityName}</p>
        <p> Population: {numberWithCommas(city.country.population)}</p>
        <p> Currency: {city.country.currencyName}</p>
        <h1> Don't like {city.name}?  </h1>
        <button onClick={refreshPage}>Generate new location </button>
      </div>
    </div>
  );
}
