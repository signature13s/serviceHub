// src/components/ServiceList.tsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Text, Group, Button, Grid } from '@mantine/core';
import { ServiceContext } from '../context/ServiceContext';
import type { Service } from '../types'; // Correct import

function ServiceList() {
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { services } = context;

  return (
    <div className="p-4">
      <Grid>
        {services.map((service: Service) => (
          <Grid.Col key={service.id} span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder className="bg-white">
              <Text weight={500} className="text-lg text-gray-800">{service.title}</Text>
              <Text size="sm" className="text-gray-600">
                {service.category} - ${service.price}
              </Text>
              <Text size="sm" className="text-gray-600">{service.location}</Text>
              <Group mt="md">
                <Button component={Link} to={`/service/${service.id}`} className="bg-blue-500 hover:bg-blue-600">
                  View Details
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}

export default ServiceList;