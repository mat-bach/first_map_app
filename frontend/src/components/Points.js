import React, { useState, useEffect } from "react";
import "../App.css"
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Marker } from "react-leaflet";
import {icon} from 'leaflet';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

function Points() {
  const ICON = icon({
    iconUrl: "/icon.png",
    iconSize: [32, 32],
  })

  const url = "https://matbach.pl/api/points/";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  
  return (
    data.features?.map((facility) => {
      return (
        <Marker key={facility.id} position={facility.geometry.coordinates} icon={ICON} />
      );
    })
  );
}
  
export default Points;
  