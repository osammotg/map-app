import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import stadiumIcon from "./assets/stade.png";

// Fix for default icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const customIcon = new L.Icon({
  iconUrl: stadiumIcon,
  iconSize: [50, 50],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const stadiums = [
  { position: [46.2044, 6.1432], name: "Stade de Genève" },
  { position: [48.8566, 2.3522], name: "Parc des Princes" },
  { position: [51.555, -0.1086], name: "Emirates Stadium" },
  { position: [41.3809, 2.1228], name: "Camp Nou" },
  { position: [40.4531, -3.6883], name: "Santiago Bernabéu" },
  { position: [45.4781, 9.1234], name: "San Siro" },
  { position: [48.2188, 16.3408], name: "Ernst Happel Stadium" },
  { position: [50.9380, 6.9785], name: "RheinEnergieStadion" },
  { position: [52.5145, 13.2398], name: "Olympiastadion Berlin" },
  { position: [53.4308, -2.9608], name: "Anfield" },
  { position: [53.4831, -2.2004], name: "Etihad Stadium" },
  { position: [43.2965, 5.3698], name: "Stade Vélodrome" },
];

function MyMap() {
  return (
      <MapContainer
          center={[46.2044, 6.1432]}
          zoom={5}
          style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {stadiums.map((stadium, index) => (
            <Marker key={index} position={stadium.position} icon={customIcon}>
              <Popup>{stadium.name}</Popup>
            </Marker>
        ))}
      </MapContainer>
  );
}

export default MyMap;
