import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import RestaurantLogin from './pages/restaurant/RestaurantLogin';
import RestaurantDashboard from './pages/restaurant/RestaurantDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        {/* Restaurant Routes */}
        <Route path="/restaurant/login" element={<RestaurantLogin />} />
        <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
        
        {/* Default Route */}
        <Route path="/" element={<RestaurantLogin />} />
      </Routes>
    </div>
  );
}

export default App; 