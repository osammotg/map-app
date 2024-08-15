import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MyMap() {
  return (
    <MapContainer
      center={[46.2044, 6.1432]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* First Marker */}
      <Marker position={[46.2044, 6.1432]}>
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

      {/* Second Marker */}
      <Marker position={[46.185527, 6.158886]}>
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
