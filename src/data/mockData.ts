// src/data/mockData.ts
import type { Service, User } from '../types';

export const mockServices: Service[] = [
  {
    id: 1,
    category: 'Plumbing',
    title: 'Pipe Repair',
    description: 'Fix leaks and pipe issues.',
    price: 50,
    location: 'New York',
    rating: 4.5,
    reviews: [{ user: 'John', comment: 'Great service!', rating: 5 }],
    provider: { id: 1, name: 'Mike Plumber', bio: 'Experienced plumber with 10 years in the field.' },
    availability: ['2025-06-13', '2025-06-14'],
  },
  {
    id: 2,
    category: 'Cleaning',
    title: 'Home Cleaning',
    description: 'Deep cleaning for your home.',
    price: 80,
    location: 'New York',
    rating: 4.0,
    reviews: [{ user: 'Jane', comment: 'Very thorough!', rating: 4 }],
    provider: { id: 2, name: 'Sarah Cleaner', bio: 'Professional cleaner with attention to detail.' },
    availability: ['2025-06-13', '2025-06-15'],
  },
];

export const mockUser: User = {
  id: 1,
  name: 'Guest User',
  email: 'guest@example.com',
  bookings: [],
  address: '123 Main St, New York',
};