import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const klogo = 'https://res.cloudinary.com/dzcnlhofn/image/upload/v1739116833/po2pprnzvmzpfezprkif.png';
const surabhi = 'https://res.cloudinary.com/dzcnlhofn/image/upload/v1739115728/yerwe3fzm41q6jneziac.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <div className="logo-container">
            <img src={klogo} alt="KL University Logo" className="kl-logo" />
            <img src={surabhi} alt="Surabhi Logo" className="surabhi-logo" />
          </div>
          <h2>SURABHI</h2>
          <p>Join us in celebrating the vibrant spirit of cultural arts through mesmerizing performances and enriching educational experiences at KL University.</p>
        </div>

        {/* Navigation Section */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <i className="far fa-envelope"></i>
              <a href="mailto:surabhi@kluniversity.in">surabhi@kluniversity.in</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+919505993133">+91 9505993133</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>KL University, Vijayawada</span>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="#"><i className="fab fa-youtube"></i> Youtube</a></li>
            <li><a href="https://www.instagram.com/klsurabhi?igsh=a21sYnB0NzV1dmo3"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
          </ul>
        </div>

        {/* Developers Section */}
        <div className="footer-section">
          <h3>Developers</h3>
          <ul>
            <li>
              <i className="fas fa-code"></i>
              <a href="https://github.com/apocalypse9949" target="_blank" rel="noopener noreferrer">
                Frontend: Prudhvi
              </a>
            </li>
            <li>
              <i className="fas fa-database"></i>
              <a href="https://github.com/PraneethKulukuri26" target="_blank" rel="noopener noreferrer">
                Backend: Praneeth
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
