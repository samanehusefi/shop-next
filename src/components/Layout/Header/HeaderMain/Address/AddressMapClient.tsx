"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";

interface AddressMapProps {
  position: [number, number];
}

const markerIcon = L.divIcon({
  html: renderToStaticMarkup(
    <FaMapMarkerAlt
      size={38}
      color="#ef4444"
      style={{
        filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.3))",
      }}
    />,
  ),
  className: "custom-map-marker",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});

const MapController = ({ position }: AddressMapProps) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 15);
  }, [map, position]);

  return null;
};

const AddressMapClient = ({ position }: AddressMapProps) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapController position={position} />

      <Marker position={position} icon={markerIcon} />
    </MapContainer>
  );
};

export default AddressMapClient;
