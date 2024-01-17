import React, { useState, useEffect } from "react";
import "../App.css"
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Polygon } from "react-leaflet";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

function Polygons() {
  const url = "http://127.0.0.1:8000/api/rectangles/";
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
        <Polygon key={facility.id} positions={facility.geometry.coordinates} />
      );
    })
  );
}

export default Polygons;
  