// src/components/UserProfile.tsx
import { useContext } from 'react';
import { Card, Text, Title, Group } from '@mantine/core';
import { ServiceContext } from '../context/ServiceContext';

function UserProfile() {
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { user, bookings, services } = context;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="m-4 bg-white">
      <Title order={2} className="text-gray-800">{user.name}'s Profile</Title>
      <Text>Email: {user.email}</Text>
      <Text>Address: {user.address}</Text>
      <Text mt="md">Booking History:</Text>
      {bookings.length === 0 ? (
        <Text>No bookings yet.</Text>
      ) : (
        bookings.map((booking) => {
          const service = services.find((s) => s.id === booking.serviceId);
          return (
            <Text key={booking.id}>
              - {service?.title} on {new Date(booking.date).toLocaleDateString()} (Status: {booking.status})
            </Text>
          );
        })
      )}
    </Card>
  );
}

export default UserProfile;