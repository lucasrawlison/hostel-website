  interface NearbyPlace {
    name: string;
    distance: number;
    type: string;
  }

 interface Host {
    name: string;
    avatar: string;
    responseTime: string;
    languages: string[];
    phone: string;
  }

  interface Amenity {
    name: string;
    icon: string;
    properties?: Property[];
  }

  interface Location {
    address: string;
    lat: number; lng: number
  }

  interface Review {
    id: number;
    user: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
  }

  export interface Property {
    id: number;
    title: string;
    locationMin: string;
    price: number;
    rating: number;
    reviewsQtd: number;
    guests: number;
    bedrooms: number;
    bathrooms: number;
    description: string;
    featured: boolean;
    image: string;
    host: Host;
    location: Location;
    amenities: Amenity[];
    rules: string[];
    reviews: Review[];
    nearbyPlaces: NearbyPlace[];
  }

