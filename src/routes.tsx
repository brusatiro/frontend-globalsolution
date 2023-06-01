import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Login from './pages/Login';
import Data from './pages/Data';
import Map from './pages/Map';

// Defina a função como AppRoutes em vez de Routes
const AppRoutes: React.FC = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/map" element={<Map />} />
          <Route path="/data" element={<Data />} />
        </Routes>
    );
  };
  
  export default AppRoutes;
  