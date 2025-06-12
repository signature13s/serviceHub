// src/components/SearchFilter.tsx
import { useContext, useState } from 'react';
import { TextInput, Select, Group, Button } from '@mantine/core';
import { ServiceContext } from '../context/ServiceContext';

function SearchFilter() {
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { services } = context;
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState<string | null>(null);

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(search.toLowerCase()) &&
      (location ? service.location === location : true)
  );

  return (
    <Group className="p-4 bg-white shadow-sm">
      <TextInput
        placeholder="Search services (e.g., Plumbing)"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        className="w-1/3"
      />
      <Select
        placeholder="Select location"
        data={Array.from(new Set(services.map((s) => s.location))).map((loc) => ({
          value: loc,
          label: loc,
        }))}
        value={location}
        onChange={setLocation}
        clearable
        className="w-1/3"
      />
      <Button
        onClick={() => {
          setSearch('');
          setLocation(null);
        }}
        className="bg-gray-500 hover:bg-gray-600"
      >
        Clear
      </Button>
    </Group>
  );
}

export default SearchFilter;