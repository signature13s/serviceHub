// src/components/ServiceDetail.tsx
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Text, Group, Button, Title } from '@mantine/core';
import { ServiceContext } from '../context/ServiceContext';

function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { services } = context;
  const service = services.find((s) => s.id === parseInt(id!));

  if (!service) return <Text className="p-4">Service not found</Text>;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="m-4 bg-white">
      <Title order={2} className="text-gray-800">{service.title}</Title>
      <Text>Category: {service.category}</Text>
      <Text>Description: {service.description}</Text>
      <Text>Price: ${service.price}</Text>
      <Text>Location: {service.location}</Text>
      <Text>Provider: {service.provider.name}</Text>
      <Text>Rating: {service.rating} / 5</Text>
      <Group mt="md">
        <Button component={Link} to={`/booking/${service.id}`} className="bg-blue-500 hover:bg-blue-600">
          Book Now
        </Button>
        <Button
          component={Link}
          to={`/provider/${service.provider.id}`}
          variant="outline"
          className="border-blue-500 text-blue-500 hover:bg-blue-50"
        >
          View Provider
        </Button>
      </Group>
    </Card>
  );
}

export default ServiceDetail;