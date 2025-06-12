// src/App.tsx
import { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppShell, Title, Button, Group } from '@mantine/core'; // Remove Header import
import { ServiceProvider, ServiceContext } from './context/ServiceContext';
import SearchFilter from './components/SearchFilter';
import ServiceList from './components/ServiceList';
import ServiceDetail from './components/ServiceDetail';
import Booking from './components/Booking';
import Payment from './components/Payment';
import ReviewRating from './components/ReviewRating';
import ProfessionalProfile from './components/ProfessionalProfile';
import UserProfile from './components/UserProfile';
import type { ServiceContextType } from './context/ServiceContext'; // Import the context type

function AppContent() {
  const context = useContext(ServiceContext);
  if (!context) return null;
  const { user } = context as ServiceContextType; // Type assertion to fix type error

  return (
    <AppShell
      header={{ height: 60 }} // Use header configuration object with height
      className="bg-gray-100"
    >
      <AppShell.Header className="bg-blue-600" p="xs">
        <Group justify="apart" className="text-white">
          <Title order={3}>ServiceHub</Title>
          <Group>
            <Button component={Link} to="/" variant="subtle" className="text-white hover:bg-blue-700">
              Home
            </Button>
            <Button
              component={Link}
              to="/profile"
              variant="subtle"
              className="text-white hover:bg-blue-700"
            >
              {user.name}'s Profile
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
      <SearchFilter />
      <Routes>
        <Route path="/" element={<ServiceList />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/payment/:bookingId" element={<Payment />} />
        <Route path="/review/:serviceId" element={<ReviewRating />} />
        <Route path="/provider/:id" element={<ProfessionalProfile />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </AppShell>
  );
}

function App() {
  return (
    <ServiceProvider>
      <AppContent />
    </ServiceProvider>
  );
}

export default App;