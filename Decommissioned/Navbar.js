import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">Stock Magement</div>
      <ul className="nav-links">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/">Inventory</a></li>
        <li><a href="/report">Report Items</a></li>
        <li><a href="/Support">Support</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
