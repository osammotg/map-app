import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import stadiumIcon from "./assets/stade.png";


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

function MyMap() {
  return (
      <MapContainer
          center={[46.2044, 6.1432]}
          zoom={13}
          style={{ height: "100vh", width: "100%" }}
      >
        {/* Black and White Tile Layer */}
        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* First Marker with Custom Icon */}
        <Marker position={[46.2044, 6.1432]} icon={customIcon}>
          <Popup>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "10px" }}>
                <h3>Join the Game</h3>
              </div>
              <img
                  src="https://via.placeholder.com/80"
                  alt="Game"
                  style={{ width: "80px", height: "80px", borderRadius: "8px" }}
              />
            </div>
          </Popup>
        </Marker>

        {/* Second Marker with Custom Icon */}
        <Marker position={[46.185527, 6.158886]} icon={customIcon}>
          <Popup>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "10px" }}>
                <h3>Second Location</h3>
              </div>
              <img
                  src="https://via.placeholder.com/80"
                  alt="Location"
                  style={{ width: "80px", height: "80px", borderRadius: "8px" }}
              />
            </div>
          </Popup>
        </Marker>
      </MapContainer>
  );
}

export default MyMap;
