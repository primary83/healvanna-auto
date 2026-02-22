"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Station {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  network: string;
  dcFastPorts: number;
  level2Ports: number;
  distance: number;
}

interface ChargeMapProps {
  stations: Station[];
  center: [number, number] | null;
  hoveredStation: number | null;
  onStationHover: (id: number | null) => void;
}

// Custom marker icons
const defaultIcon = new L.DivIcon({
  className: "",
  html: `<div style="width:28px;height:28px;background:#4a90d9;border:2px solid #0a0f1a;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.4)">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0f1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
  </div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

const dcFastIcon = new L.DivIcon({
  className: "",
  html: `<div style="width:28px;height:28px;background:#34d399;border:2px solid #0a0f1a;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.4)">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0f1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
  </div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

const hoveredIcon = new L.DivIcon({
  className: "",
  html: `<div style="width:34px;height:34px;background:#4a90d9;border:3px solid #e8edf5;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(74,144,217,0.5)">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0f1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
  </div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
});

// Component to recenter map when center changes
function MapUpdater({ center }: { center: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 12);
    }
  }, [center, map]);
  return null;
}

// Component to fit bounds when stations change
function BoundsFitter({ stations }: { stations: Station[] }) {
  const map = useMap();
  useEffect(() => {
    if (stations.length > 0) {
      const bounds = L.latLngBounds(
        stations.map((s) => [s.lat, s.lng] as [number, number])
      );
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
    }
  }, [stations, map]);
  return null;
}

export default function ChargeMap({
  stations,
  center,
  hoveredStation,
  onStationHover,
}: ChargeMapProps) {
  const defaultCenter: [number, number] = center || [39.8283, -98.5795];
  const defaultZoom = center ? 12 : 4;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: "100%", width: "100%", background: "#0a0f1a" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <MapUpdater center={center} />
      {stations.length > 0 && <BoundsFitter stations={stations} />}
      {stations.map((station) => (
        <Marker
          key={station.id}
          position={[station.lat, station.lng]}
          icon={
            hoveredStation === station.id
              ? hoveredIcon
              : station.dcFastPorts > 0
                ? dcFastIcon
                : defaultIcon
          }
          eventHandlers={{
            mouseover: () => onStationHover(station.id),
            mouseout: () => onStationHover(null),
          }}
        >
          <Popup>
            <div style={{ color: "#0a0f1a", fontSize: "13px" }}>
              <strong>{station.name}</strong>
              <br />
              {station.address}, {station.city}, {station.state}
              <br />
              <span style={{ color: "#4a90d9" }}>
                {station.network || "Unknown Network"}
              </span>
              {station.dcFastPorts > 0 && (
                <>
                  <br />
                  <span style={{ color: "#059669" }}>
                    {station.dcFastPorts} DC Fast
                  </span>
                </>
              )}
              {station.level2Ports > 0 && (
                <>
                  {" "}
                  | {station.level2Ports} Level 2
                </>
              )}
              <br />
              <span style={{ fontSize: "11px", color: "#666" }}>
                {station.distance.toFixed(1)} miles away
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
