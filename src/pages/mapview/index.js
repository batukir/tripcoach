import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import icon from "../../constants";
import { useLocation } from "react-router-dom";

const defaultCenter = [10.303418, 5.95223];
const defaultZoom = 2;

export default function MapView() {
  const location = useLocation();
  const WorldCities = require("worldcities");
  const RandomCity = Math.floor(Math.random() * 50);

  const { checkboxContinents, checkboxPreferences, peopleValue, budgetValue } =
    location.state;

  const [map, setMap] = useState(null);
  function handleOnFlyTo() {
    map.flyTo(cityLatLng, 12);
  }

  function refreshPage() {
    window.location.reload(false);
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  var cityList = [];

  if (checkboxContinents[0].isChecked === true) {
    console.log(checkboxContinents[0]);
    const EU = WorldCities.getLargestCities("EU", 25);
    cityList.push(EU);
  }
  if (checkboxContinents[1].isChecked === true) {
    console.log(checkboxContinents[1]);
    const AS = WorldCities.getLargestCities("AS", 25);
    cityList.push(AS);
  }
  cityList = cityList[0].concat(cityList[1]);

  const cities = cityList;
  const city = cities[RandomCity];
  const cityLatLng = [city.latitude, city.longitude];
  const cityName = city.country.wikipedia.split("_").join(" ");
  
  return (
    <div className="App">
      {console.log(cityList)}
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
        <p />
        <p> Country: {cityName}</p>
        <p> Population: {numberWithCommas(city.country.population)}</p>
        <p> Currency: {city.country.currencyName}</p>
        <h1> Don't like {city.name}? </h1>
        <button onClick={refreshPage}>Generate new location </button>
      </div>
    </div>
  );
}
