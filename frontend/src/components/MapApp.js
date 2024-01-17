import React from "react";
import "../App.css"
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { MapContainer, TileLayer } from "react-leaflet";
import DrawMap from "./DrawMap.js"
import Polygons from "./Polygons.js";
import Points from "./Points.js";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const center = [50, 20]

function MapApp() {
  return (
    <MapContainer center={center} zoom={6} scrollWheelZoom={true} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <DrawMap />
    <Polygons />
    <Points />
  </MapContainer>
  );
}
  
export default MapApp;
