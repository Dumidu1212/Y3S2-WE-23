import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Food Ordering App</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/admin/login">Admin</Link>
        <Link to="/restaurant/login">Restaurant</Link>
      </div>
    </nav>
  );
};

export default Navbar; 