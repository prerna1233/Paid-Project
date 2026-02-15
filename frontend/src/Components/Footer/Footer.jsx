import React from 'react';
import "./Footer.style.css";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube,
  FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock,
  FaExclamationTriangle, FaExternalLinkAlt
} from 'react-icons/fa';  

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gov-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Header */}
          <div className="footer-header">
            <h3 className="footer-title">Tourism Department</h3>
            <p className="footer-subtitle">Government of Bihar</p>
          </div>

          {/* Footer Grid - 4 Columns */}
          <div className="footer-grid">
            {/* Column 1: About */}
            <div className="footer-column">
              <h4 className="column-title">About Us</h4>
              <p className="footer-description">
                The Tourism Department of Bihar is dedicated to showcasing the state's glorious past, 
                vibrant culture, and natural beauty. From the ancient ruins of Nalanda to the sacred 
                sites of Bodh Gaya, Bihar offers a unique journey through India's spiritual and 
                historical heritage. We aim to provide world-class tourism infrastructure while 
                preserving our rich cultural legacy.
              </p>
              <div className="info-box" style={{marginTop: '10px'}}>
                <h5 className="info-box-title">Why Visit Bihar?</h5>
                <ul className="info-list compact">
                  <li>UNESCO World Heritage Sites</li>
                  <li>Buddhist Pilgrimage Circuit</li>
                  <li>Ancient Universities & Monuments</li>
                  <li>Rich Cultural Festivals</li>
                </ul>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-column">
              <h4 className="column-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/About">About Bihar</a></li>
                <li><a href="/Destination">Destinations</a></li>
                <li><a href="/Culture/festivals">Festivals</a></li>
                <li><a href="/Culture/food">Local Cuisine</a></li>
                <li><a href="/Destination/Hotel_Homepage">Accommodation</a></li>
                <li><a href="/Travel">How to Reach</a></li>
                <li><a href="/Blogs">Travel Blog</a></li>
                <li><a href="/Culture/art">Photo Gallery</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="footer-column">
              <h4 className="column-title">Explore Bihar</h4>
              <ul className="footer-links">
                <li>
                  <a href="https://tourism.bihar.gov.in" target="_blank" rel="noopener noreferrer">
                    Bihar Tourism <FaExternalLinkAlt className="ext-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.incredibleindia.org" target="_blank" rel="noopener noreferrer">
                    Incredible India <FaExternalLinkAlt className="ext-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.indianrail.gov.in" target="_blank" rel="noopener noreferrer">
                    Indian Railways <FaExternalLinkAlt className="ext-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://tourism.bihar.gov.in" target="_blank" rel="noopener noreferrer">
                    Travel Guide <FaExternalLinkAlt className="ext-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://state.bihar.gov.in" target="_blank" rel="noopener noreferrer">
                    Tourist Permits <FaExternalLinkAlt className="ext-icon" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-column">
              <h4 className="column-title">Contact</h4>
              <div className="contact-details compact">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span className="contact-value">Patna, Bihar</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span className="contact-value">+91-612-XXX-XXXX</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span className="contact-value">tourism@bihar.gov.in</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="social-section compact">
                <h5 className="social-title">Follow Us</h5>
                <div className="social-links">
                  <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://youtube.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="footer-notice-single">
            <FaExclamationTriangle className="notice-icon" />
            <p className="notice-content">
              <strong>Notice:</strong> Official government website. Verify authenticity before sharing sensitive information.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Tourism Department, Government of Bihar. All Rights Reserved.
            </p>
            {/* Policy links removed because corresponding routes are not present in the app. */}
          </div>
        </div>
      </div>
    </footer>
  );
}
