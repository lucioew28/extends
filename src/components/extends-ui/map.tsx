import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";
import React from "react";
import { cn } from "@/lib/utils";

interface MapProps {
  position: LatLngExpression;
  children?: React.ReactNode;
  className?: string;
}

const polyline = [
  [-20.3155, -40.3128], // Point near the center of Vitória
  [-20.3201, -40.3135], // Point slightly southeast
  [-20.3222, -40.311], // Point slightly northeast
  [-20.3188, -40.309], // Point slightly northwest
];

const limeOptions = { color: "lime" };

function Map({ position, children, className }: MapProps) {
  return (
    <div
      className={cn(
        "rounded-sm relative overflow-hidden min-h-[500px]",
        className
      )}
    >
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          position: "absolute",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline
          pathOptions={limeOptions}
          positions={polyline as unknown as LatLngExpression[][]}
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
