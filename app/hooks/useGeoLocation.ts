"use client";

import { useState, useEffect } from "react";

interface GeoLocation {
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: number;
  longitude: number;
  isLoading: boolean;
  error: string | null;
}

// Convert full state name to two-letter code
const STATE_CODES: Record<string, string> = {
  "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR",
  "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
  "Florida": "FL", "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID",
  "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS",
  "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
  "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS",
  "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV",
  "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
  "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK",
  "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT",
  "Vermont": "VT", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV",
  "Wisconsin": "WI", "Wyoming": "WY", "District of Columbia": "DC",
};

function getStateCode(state: string): string {
  // If already a 2-letter code, return as-is
  if (state.length === 2) return state.toUpperCase();
  return STATE_CODES[state] || state;
}

const DEFAULT_LOCATION: GeoLocation = {
  city: "Orlando",
  state: "FL",
  zip: "32801",
  country: "US",
  latitude: 28.5383,
  longitude: -81.3792,
  isLoading: false,
  error: null,
};

// Validate that coordinates are real, finite, in-range, and not the null island (0,0).
// Used as an all-or-nothing gate so a real city is never paired with default coords.
function isValidCoord(lat: number, lon: number): boolean {
  return (
    Number.isFinite(lat) &&
    Number.isFinite(lon) &&
    !(lat === 0 && lon === 0) &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180
  );
}

// Calculate distance between two points using Haversine formula
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Provider coordinates for distance calculation
export const PROVIDER_COORDINATES: Record<string, { lat: number; lon: number }> = {
  "Austin, TX": { lat: 30.2672, lon: -97.7431 },
  "Miami, FL": { lat: 25.7617, lon: -80.1918 },
  "Los Angeles, CA": { lat: 34.0522, lon: -118.2437 },
  "San Francisco, CA": { lat: 37.7749, lon: -122.4194 },
  "New York, NY": { lat: 40.7128, lon: -74.006 },
  "Phoenix, AZ": { lat: 33.4484, lon: -112.074 },
  "Houston, TX": { lat: 29.7604, lon: -95.3698 },
  "Scottsdale, AZ": { lat: 33.4942, lon: -111.9261 },
};

export function useGeoLocation(): GeoLocation & {
  setManualLocation: (city: string, state: string) => void;
  detectedLocation: string;
} {
  // Coordinates start at 0 (not the default city's coords) so consumers' falsy-coord
  // guards wait for real detection instead of firing a premature default-location fetch.
  const [location, setLocation] = useState<GeoLocation>({
    city: "",
    state: "",
    zip: "",
    country: "US",
    latitude: 0,
    longitude: 0,
    isLoading: true,
    error: null,
  });

  // Single source of truth: the display label is derived from the same object that
  // holds the coordinates, so the two can never diverge.
  const detectedLocation =
    location.city && location.state ? `${location.city}, ${location.state}` : "";

  useEffect(() => {
    // IP-based geolocation only — no browser GPS, so no permission prompt.
    // A response is accepted only if it carries BOTH a real city/state AND valid
    // coordinates; otherwise it is rejected outright so the label and the search
    // coordinates can never come from different sources.
    const tryIPGeolocation = async (): Promise<{
      city: string; state: string; zip: string; country: string;
      latitude: number; longitude: number;
    } | null> => {
      const apis = [
        {
          url: "https://ipapi.co/json/",
          parse: (data: any) => ({
            city: data.city,
            state: data.region_code,
            zip: data.postal,
            country: data.country_code,
            latitude: data.latitude,
            longitude: data.longitude,
          }),
        },
        {
          url: "https://ipwho.is/",
          parse: (data: any) => ({
            city: data.city,
            state: data.region_code || data.region,
            zip: data.postal,
            country: data.country_code,
            latitude: data.latitude,
            longitude: data.longitude,
          }),
        },
      ];

      for (const api of apis) {
        try {
          const response = await fetch(api.url, {
            signal: AbortSignal.timeout(3000),
          });
          if (!response.ok) continue;

          const data = await response.json();
          const parsed = api.parse(data);
          const lat = Number(parsed.latitude);
          const lon = Number(parsed.longitude);

          // Safety net: reject the whole response unless city, state, and real
          // coordinates are all present. No field-by-field default fallbacks.
          if (!parsed.city || !parsed.state || !isValidCoord(lat, lon)) continue;

          return {
            city: parsed.city,
            state: getStateCode(parsed.state),
            zip: parsed.zip || "",
            country: (parsed.country || "US").toUpperCase(),
            latitude: lat,
            longitude: lon,
          };
        } catch {
          continue;
        }
      }
      return null;
    };

    const detectLocation = async () => {
      try {
        const ipData = await tryIPGeolocation();
        if (ipData) {
          setLocation({ ...ipData, isLoading: false, error: null });
          return;
        }
      } catch { /* fall through to default */ }

      // Clean fallback: the full default location — city AND coordinates together,
      // so the displayed label always matches what is actually searched.
      setLocation({
        ...DEFAULT_LOCATION,
        isLoading: false,
        error: "Could not detect location, using default",
      });
    };

    detectLocation();
  }, []);

  const setManualLocation = (city: string, state: string) => {
    const coords = PROVIDER_COORDINATES[`${city}, ${state}`] || {
      lat: DEFAULT_LOCATION.latitude,
      lon: DEFAULT_LOCATION.longitude,
    };
    setLocation({
      city,
      state,
      zip: "",
      country: "US",
      latitude: coords.lat,
      longitude: coords.lon,
      isLoading: false,
      error: null,
    });
  };

  return { ...location, setManualLocation, detectedLocation };
}
