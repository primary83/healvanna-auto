"use client";

import { useState, useEffect } from "react";

interface VercelGeoState {
  city: string | null;
  region: string | null;
  latitude: number | null;
  longitude: number | null;
  country: string | null;
  detected: boolean;
  isLoading: boolean;
}

export function useVercelGeo(): VercelGeoState {
  const [geo, setGeo] = useState<VercelGeoState>({
    city: null,
    region: null,
    latitude: null,
    longitude: null,
    country: null,
    detected: false,
    isLoading: true,
  });

  useEffect(() => {
    fetch("/api/geo")
      .then((r) => r.json())
      .then((data) => {
        setGeo({
          city: data.city,
          region: data.region,
          latitude: data.latitude,
          longitude: data.longitude,
          country: data.country,
          detected: data.detected,
          isLoading: false,
        });
      })
      .catch(() => {
        setGeo((prev) => ({ ...prev, isLoading: false, detected: false }));
      });
  }, []);

  return geo;
}
