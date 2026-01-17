import React from 'react';
import "./Footer.style.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaSearch
} from 'react-icons/fa';  
import {
  FaLocationDot,
  FaPhone
} from 'react-icons/fa6';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#629f4fff" />
              {/* <stop offset="100%" stopColor="rgba(38,89,190,0.06)" /> */}
            </linearGradient>

            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
              s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859
              s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>

          <g>
            <use href="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="8s"
                values="270 230; -334 180; 270 230"
                repeatCount="indefinite"
              />
            </use>

          </g>
        </svg>
      </div>

      <section className="footer-content">
        <ul className="footer-socials">
          <li><FaFacebookF /></li>
          <li><FaTwitter /></li>
          <li><FaLinkedinIn /></li>
          <li><FaInstagram /></li>
        </ul>
        <div className='footer-title'>

          <p>Dedicated to preserving culture, supporting people, and building a stronger Kishanganj.</p>

        </div>
        <div className='footer-grid'>
          <div className='box1'>
            <h4>Contact Us :-</h4>
            <p className='info phone'><FaPhone/>Call - 563 895 2180</p>
            <p className='info email'><FaEnvelope/>kishan123@gmail.com</p>
            <p className='info location'><FaLocationDot/>Kishanganj, Bihar</p>
          </div>
          <div className="footer-links box2">
            <ul className="footer-links">
            <li><a href='/'>Home</a></li>
            <li><a href='About'>About</a></li>
            <li><a href='Accomodation'>Accomodation</a></li>
            <li><a href='Culture'>Culture</a></li>
            <li><a href='Blogs'>Blogs</a></li>
          </ul>
      
          </div>
          <div className='box3'>
            <input type="text" className='input' placeholder='Search .....'/> <div className='search-icon'><FaSearch/></div>
          </div>

        </div>
          <p className="footer-legal">© 2026 All rights reserved</p>

      </section>




    </footer>
  );
}
