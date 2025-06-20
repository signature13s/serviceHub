import Service from './page/Service'
import Dashboard from './page/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './page/About';
import Booking from './page/Booking';


function App() {
  return (
  <BrowserRouter basename="/">
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/booking' element={<Booking/>} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;