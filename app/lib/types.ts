// Core data models for the Healvanna automotive services platform

export interface ServiceCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  seoDescription: string;
  icon: string; // SVG path data
  yelpCategories: string;
  subcategories: ServiceSubcategory[];
  trustSignals: string[];
  keywords: string[];
}

export interface ServiceSubcategory {
  slug: string;
  name: string;
  description: string;
  parentSlug: string;
  keywords: string[];
}

export interface Provider {
  id: string;
  name: string;
  category: string;
  city: string;
  state: string;
  address: string;
  specialties: string[];
  verified: boolean;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  phone: string;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  distance: string;
  url: string;
  // Trust signals
  yearsInBusiness?: number;
  insuranceAccepted?: boolean;
  oemCertified?: boolean;
  certifications?: string[];
}

export interface GeoLocation {
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: number;
  longitude: number;
  isLoading: boolean;
  error: string | null;
}

export interface LocationCity {
  city: string;
  state: string;
  stateCode: string;
  slug: string; // e.g. "austin-tx"
  latitude: number;
  longitude: number;
  population: number;
}
