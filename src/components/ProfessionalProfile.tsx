// src/components/ProfessionalProfile.tsx
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Text, Title } from '@mantine/core';
import { ServiceContext } from '../context/ServiceContext';

function ProfessionalProfile() {
  const { id } = useParams<{ id: string }>();
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { services } = context;
  const provider = services.find((s) => s.provider.id === parseInt(id!))?.provider;

  if (!provider) return <Text className="p-4">Provider not found</Text>;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="m-4 bg-white">
      <Title order={2} className="text-gray-800">{provider.name}</Title>
      <Text>Bio: {provider.bio}</Text>
      <Text mt="md">Services Offered:</Text>
      {services
        .filter((s) => s.provider.id === parseInt(id!))
        .map((service) => (
          <Text key={service.id}>- {service.title} (${service.price})</Text>
        ))}
    </Card>
  );
}

export default ProfessionalProfile;