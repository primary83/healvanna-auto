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
  city: "Austin",
  state: "TX",
  zip: "78701",
  country: "US",
  latitude: 30.2672,
  longitude: -97.7431,
  isLoading: false,
  error: null,
};

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
  const [location, setLocation] = useState<GeoLocation>({
    ...DEFAULT_LOCATION,
    isLoading: true,
  });
  const [detectedLocation, setDetectedLocation] = useState<string>("");

  useEffect(() => {
    // Reverse geocode coordinates to get city/state/zip
    const reverseGeocode = async (lat: number, lon: number): Promise<{
      city: string; state: string; zip: string; country: string;
    } | null> => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`,
          { signal: AbortSignal.timeout(5000), headers: { "Accept-Language": "en" } }
        );
        if (response.ok) {
          const data = await response.json();
          const addr = data.address || {};
          return {
            city: addr.city || addr.town || addr.village || DEFAULT_LOCATION.city,
            state: addr.state ? getStateCode(addr.state) : DEFAULT_LOCATION.state,
            zip: addr.postcode || DEFAULT_LOCATION.zip,
            country: addr.country_code?.toUpperCase() || DEFAULT_LOCATION.country,
          };
        }
      } catch { /* fall through */ }
      return null;
    };

    // Try browser Geolocation API first (most accurate)
    const tryBrowserGeolocation = (): Promise<GeolocationPosition | null> => {
      return new Promise((resolve) => {
        if (!navigator.geolocation) {
          resolve(null);
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          () => resolve(null),
          { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
        );
      });
    };

    // Fallback: IP-based geolocation APIs
    const tryIPGeolocation = async () => {
      const apis = [
        {
          url: "https://ipapi.co/json/",
          parse: (data: any) => ({
            city: data.city || DEFAULT_LOCATION.city,
            state: data.region_code || DEFAULT_LOCATION.state,
            zip: data.postal || DEFAULT_LOCATION.zip,
            country: data.country_code || DEFAULT_LOCATION.country,
            latitude: data.latitude || DEFAULT_LOCATION.latitude,
            longitude: data.longitude || DEFAULT_LOCATION.longitude,
          }),
        },
        {
          url: "https://ip-api.com/json/?fields=city,region,zip,countryCode,lat,lon",
          parse: (data: any) => ({
            city: data.city || DEFAULT_LOCATION.city,
            state: data.region || DEFAULT_LOCATION.state,
            zip: data.zip || DEFAULT_LOCATION.zip,
            country: data.countryCode || DEFAULT_LOCATION.country,
            latitude: data.lat || DEFAULT_LOCATION.latitude,
            longitude: data.lon || DEFAULT_LOCATION.longitude,
          }),
        },
      ];

      for (const api of apis) {
        try {
          const response = await fetch(api.url, {
            signal: AbortSignal.timeout(5000),
          });
          if (response.ok) {
            const data = await response.json();
            return api.parse(data);
          }
        } catch {
          continue;
        }
      }
      return null;
    };

    const detectLocation = async () => {
      try {
        // 1. Try browser geolocation (GPS/WiFi — most accurate)
        const browserPos = await tryBrowserGeolocation();
        if (browserPos) {
          const { latitude, longitude } = browserPos.coords;
          const geo = await reverseGeocode(latitude, longitude);
          if (geo) {
            setLocation({
              ...geo,
              latitude,
              longitude,
              isLoading: false,
              error: null,
            });
            setDetectedLocation(`${geo.city}, ${geo.state}`);
            return;
          }
        }

        // 2. Fallback to IP-based geolocation
        const ipData = await tryIPGeolocation();
        if (ipData) {
          setLocation({
            ...ipData,
            isLoading: false,
            error: null,
          });
          setDetectedLocation(`${ipData.city}, ${ipData.state}`);
          return;
        }

        // 3. Use default if everything fails
        setLocation({
          ...DEFAULT_LOCATION,
          isLoading: false,
          error: "Could not detect location, using default",
        });
        setDetectedLocation(`${DEFAULT_LOCATION.city}, ${DEFAULT_LOCATION.state}`);
      } catch {
        setLocation({
          ...DEFAULT_LOCATION,
          isLoading: false,
          error: "Location detection failed",
        });
        setDetectedLocation(`${DEFAULT_LOCATION.city}, ${DEFAULT_LOCATION.state}`);
      }
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
