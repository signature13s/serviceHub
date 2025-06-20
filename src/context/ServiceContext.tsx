// src/context/ServiceContext.tsx
import { createContext, useState, useEffect, ReactNode } from 'react';
import type { Service, User, Booking, Review } from '../types'; // Correct import
import { mockServices, mockUser } from '../data/mockData';

interface ServiceContextType {
  services: Service[];
  user: User;
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id'>) => void;
  addReview: (serviceId: number, review: Review) => void;
}

export const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [user] = useState<User>(mockUser);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]') as Booking[];
    setBookings(storedBookings);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (booking: Omit<Booking, 'id'>) => {
    setBookings([...bookings, { ...booking, id: Date.now() }]);
  };

  const addReview = (serviceId: number, review: Review) => {
    setServices(
      services.map((service) =>
        service.id === serviceId
          ? { ...service, reviews: [...service.reviews, review] }
          : service
      )
    );
  };

  return (
    <ServiceContext.Provider value={{ services, user, bookings, addBooking, addReview }}>
      {children}
    </ServiceContext.Provider>
  );
};