import React, { Component, useState, useEffect } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import axios from "axios";
import MapApp from "./components/MapApp.js"
import DrawMap from "./components/DrawMap.js"


// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;





function App() {
  // const url = "http://127.0.0.1:8000/api/rectangles/";
  // const [data, setData] = useState([]);

  // const fetchInfo = () => {
  //   return axios.get(url).then((res) => setData(res.data));
  // };
  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  
  return (
//     <MapContainer center={center} zoom={5} scrollWheelZoom={true}>
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
    // {data.features?.map((facility) => {
    //       return (
    //         <Polygon key={facility.id} positions={facility.geometry.coordinates} pathOptions={fillBlueOptions} />
    //       );
    //     })}
// </MapContainer>
    <div className="MapApp">
      <MapApp />
      
      {/* {data.features?.map((facility) => {
          return (
            <Polygon rings={facility.geometry.coordinates} />
          );
        })} */}
    </div>
  );
}

export default App;
