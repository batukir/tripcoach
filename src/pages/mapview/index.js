import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import icon from "../../constants";
import { useLocation } from "react-router-dom";

const defaultCenter = [10.303418, 5.95223];
const defaultZoom = 2;

export default function MapView() {
  const location = useLocation();
  const WorldCities = require("worldcities");

  const { checkboxContinents, peopleValue, budgetValue } = location.state;

  const [map, setMap] = useState(null);
  function handleOnFlyTo() {
    map.flyTo(cityLatLng, 15);
  }

  function refreshPage() {
    window.location.reload(false);
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  var cityList = [];
  var amount = 0;
  if (checkboxContinents[0].isChecked === true) {
    const EU = WorldCities.getLargestCities("EU", 100);
    cityList.push(EU);
    amount += 100;
  }
  if (checkboxContinents[1].isChecked === true) {
    const AS = WorldCities.getLargestCities("AS", 100);
    cityList.push(AS);
    amount += 100;
  }
  if (checkboxContinents[2].isChecked === true) {
    const NA = WorldCities.getLargestCities("NA", 100);
    cityList.push(NA);
    amount += 100;
  }
  if (checkboxContinents[3].isChecked === true) {
    const SA = WorldCities.getLargestCities("SA", 100);
    cityList.push(SA);
    amount += 100;
  }
  if (checkboxContinents[4].isChecked === true) {
    const AF = WorldCities.getLargestCities("AF", 100);
    cityList.push(AF);
    amount += 100;
  }
  if (checkboxContinents[5].isChecked === true) {
    const OC = WorldCities.getLargestCities("OC", 100);
    cityList.push(OC);
    amount += 100;
  }
  const RandomCity = Math.floor(Math.random() * amount);
  cityList = cityList[0].concat(
    cityList[1],
    cityList[2],
    cityList[3],
    cityList[4],
    cityList[5]
  );

  const cities = cityList;
  const city = cities[RandomCity];
  const cityLatLng = [city.latitude, city.longitude];
  const cityName = city.country.wikipedia.split("_").join(" ");
  const proxy = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";
  
  var url = "https://www.google.com/maps/place/";
  url += city.name + ",+" + cityName;

  return (
    <div className="App">
      <MapContainer
        whenCreated={setMap}
        center={defaultCenter}
        zoom={defaultZoom}
      >
        <TileLayer
          url={proxy}
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        <Marker position={cityLatLng} icon={icon}>
        <Popup>
            <a
              style={{
                color: "black",
                fontSize: "15px",
                fontFamily: "serif",

              }}
              target="blank"
              href={url}
            >
              Click here to view:
              <ul
                style={{
                  marginLeft: "22px"
                }}
              >
                <li> Attractions </li>
                <li> Hotels</li>
                <li> Restaurants </li>
                <li> Flights </li>
              </ul>
            </a>
            Group Size: {peopleValue.value}
            <br/>
            Budget: {budgetValue.value}
          </Popup>
        </Marker>
      </MapContainer>
      <div
        style={{
          backgroundImage: `url("/images/light.jpeg")`,
          backgroundPosition: "center",
          padding: "1%",
          paddingTop: "100px",
          textAlign: "center",
        }}
      >
        <h3 class="map-text">
          We believe {city.name} is a great match for you!
        </h3>
        <p class="map-text"> Click the button to zoom to location </p>
        <button class="map-button" onClick={handleOnFlyTo}>
          Fly to {city.name}
        </button>
        <p />
        <p class="map-text"> Country: {cityName}</p>
        <p class="map-text">
          Population: {numberWithCommas(city.country.population)}
        </p>
        <p class="map-text"> Currency: {city.country.currencyName}</p>
        <h3 class="map-text"> If you like {city.name} </h3>
        <p class="map-text"> Click the marker on the map to learn more </p>
        <h3 class="map-text"> Don't like {city.name}? </h3>
        <button class="map-button" onClick={refreshPage}>
          Generate new location
        </button>
        <p/>

      </div>
    </div>
  );
}
