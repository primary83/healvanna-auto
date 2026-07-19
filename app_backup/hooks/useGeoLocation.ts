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
    const fetchLocation = async () => {
      try {
        // Try multiple free IP geolocation APIs as fallbacks
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

        let locationData = null;

        for (const api of apis) {
          try {
            const response = await fetch(api.url, {
              signal: AbortSignal.timeout(5000), // 5 second timeout
            });
            if (response.ok) {
              const data = await response.json();
              locationData = api.parse(data);
              break;
            }
          } catch {
            continue;
          }
        }

        if (locationData) {
          setLocation({
            ...locationData,
            isLoading: false,
            error: null,
          });
          setDetectedLocation(`${locationData.city}, ${locationData.state}`);
        } else {
          // Use default if all APIs fail
          setLocation({
            ...DEFAULT_LOCATION,
            isLoading: false,
            error: "Could not detect location, using default",
          });
          setDetectedLocation(`${DEFAULT_LOCATION.city}, ${DEFAULT_LOCATION.state}`);
        }
      } catch (error) {
        setLocation({
          ...DEFAULT_LOCATION,
          isLoading: false,
          error: "Location detection failed",
        });
        setDetectedLocation(`${DEFAULT_LOCATION.city}, ${DEFAULT_LOCATION.state}`);
      }
    };

    fetchLocation();
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
