// src/types/index.ts
export interface Provider {
  id: number;
  name: string;
  bio: string;
}

export interface Review {
  user: string;
  comment: string;
  rating: number;
}

export interface Service {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  location: string;
  rating: number;
  reviews: Review[];
  provider: Provider;
  availability: string[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  bookings: Booking[];
  address: string;
}

export interface Booking {
  id: number;
  serviceId: number;
  date: string;
  status: 'pending' | 'confirmed' | 'completed';
}