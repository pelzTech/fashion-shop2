import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>About Us</h3>
          <nav>
            <Link to="/about" className="footer-link">
              Learn more about us
            </Link>
          </nav>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@shopper.com">support@luxestore.com</a></p>
          <p>Phone: +234 (807) 530-6443</p>
          <p>45 bend street, portland, oregon USA</p>
        </div>

        {/* Social Media */}
        <div className="footer-section footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/olugbeja.pelumi" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://x.com/pelumi09778314?s=21" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/ridwan-olugbeja-716127317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon" />
            </a>
            <a href="https://www.instagram.com/shopper" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>&copy; 2024 LuxeStore. All rights reserved. | Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
