import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';
const logo = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379774/logo_eb61r7.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('isUserLoggedIn');
    setShowDropdown(false);
    navigate('/');
    window.location.reload();
  };

  const handleDashboardClick = () => {
    setShowDropdown(false);
    navigate(isAdminLoggedIn ? '/admin-dashboard' : '/user-dashboard');
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Surabhi Logo" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/events">Events</Link>
        
        {isAdminLoggedIn && (
          <Link to="/add-event">
            <button className="add-event-button">Add Event</button>
          </Link>
        )}
        
        {!isAdminLoggedIn && !isUserLoggedIn ? (
          <>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button className="login-button">LOGIN</button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <button className="reg-button">REGISTER</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/schedule">Schedule</Link>
            <button className="avatar-button" onClick={handleAvatarClick}>
              <FaUserCircle className="avatar-icon" />
            </button>
          </>
        )}
      </div>
      {showDropdown && (
        <div className="dropdown-menu">
          <button onClick={handleDashboardClick}>
            My Dashboard
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 