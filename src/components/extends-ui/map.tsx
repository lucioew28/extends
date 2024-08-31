import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";
import React from "react";

interface MapProps {
  position: LatLngExpression;
  children?: React.ReactNode;
}

function Map({ position, children }: MapProps) {
  return (
    <div className="rounded-sm overflow-hidden pb-4 border border-gray-400 drop-shadow-lg">
      <MapContainer center={position} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </div>
  );
}

interface MapMarkerProps {
  position: LatLngExpression;
  children?: React.ReactNode;
}

function MapMarker({ position, children }: MapMarkerProps) {
  return (
    <Marker position={position}>
      <Popup>{children}</Popup>
    </Marker>
  );
}

export { Map, MapMarker };
