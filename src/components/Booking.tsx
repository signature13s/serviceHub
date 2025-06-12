// src/components/Booking.tsx
import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DatePicker } from '@mantine/dates';
import { Button, Group, Text } from '@mantine/core';
import { ServiceContext } from '../context/ServiceContext';
import { notifications } from '@mantine/notifications';

function Booking() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { services, addBooking } = context;
  const service = services.find((s) => s.id === parseInt(id!));
  const [date, setDate] = useState<Date | null>(null);

  if (!service) return <Text className="p-4">Service not found</Text>;

  const handleBooking = () => {
    if (!date) {
      notifications.show({ title: 'Error', message: 'Please select a date', color: 'red' });
      return;
    }
    addBooking({ serviceId: service.id, date: date.toISOString(), status: 'pending' });
    notifications.show({ title: 'Success', message: 'Booking created! Proceed to payment.', color: 'green' });
    navigate(`/payment/${Date.now()}`);
  };

  return (
    <Group className="p-4 flex-col">
      <Text size="lg" className="text-gray-800">Book {service.title}</Text>
      <DatePicker
        value={date}
        onChange={setDate}
        includeDates={service.availability.map((d) => new Date(d))}
      />
      <Button onClick={handleBooking} className="bg-blue-500 hover:bg-blue-600">Confirm Booking</Button>
    </Group>
  );
}

export default Booking;