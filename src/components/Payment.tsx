// src/components/Payment.tsx
import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Text, Group } from '@mantine/core';
import { ServiceContext } from '../context/ServiceContext';
import { notifications } from '@mantine/notifications';

function Payment() {
  const { bookingId } = useParams<{ bookingId: string }>();
  const navigate = useNavigate();
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { bookings, services } = context;
  const booking = bookings.find((b) => b.id === parseInt(bookingId!));
  const service = services.find((s) => s.id === booking?.serviceId);

  if (!booking || !service) return <Text className="p-4">Booking not found</Text>;

  const handlePayment = () => {
    notifications.show({ title: 'Success', message: 'Payment processed!', color: 'green' });
    navigate(`/review/${service.id}`);
  };

  return (
    <Group className="p-4 flex-col">
      <Text size="lg" className="text-gray-800">Payment for {service.title}</Text>
      <Text>Amount: ${service.price}</Text>
      <Button onClick={handlePayment} className="bg-green-500 hover:bg-green-600">Pay Now (Simulated)</Button>
    </Group>
  );
}

export default Payment;