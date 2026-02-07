import React, { useState } from 'react';
import './HomeAbout.css';

const HomeAbout = () => {
  const [expandedCard1, setExpandedCard1] = useState(false);
  const [expandedCard2, setExpandedCard2] = useState(false);
  return (
    <div className="homeabout-container">
      
      {/* Background Decorative Dotted Map Lines */}
      <div className="homeabout-bg-decorative">
        <svg width="100%" height="100%" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 150 Q 200 100 350 200 T 600 150 T 950 250" fill="none" stroke="#D4A017" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M100 450 Q 400 350 550 480 T 900 400" fill="none" stroke="#D4A017" strokeWidth="1" strokeDasharray="5,5" />
          <circle cx="120" cy="80" r="8" fill="none" stroke="#D4A017" strokeWidth="1" />
          <circle cx="880" cy="420" r="8" fill="none" stroke="#D4A017" strokeWidth="1" />
        </svg>
      </div>

      <div className="homeabout-content-wrapper">
        
        {/* Horizontal Center Line */}
        <div className="homeabout-center-line"></div>

        <div className="homeabout-main-flex">
          
          {/* Left Card: About Me */}
          <div className="homeabout-about-card">
            <div className="homeabout-profile-img">
              <img 
                src="src/assets/DM.jpeg" 
                alt="Profile" 
              />
            </div>
            <h3 className="homeabout-about-title">DISTRICT MAGISTRATE</h3>
            <p className="homeabout-about-text">
              Shri Vishal Raj (IAS) serves as the District Magistrate and Collector of Kishanganj, Bihar. The District Magistrate ensures law and order, supervises government departments, and implements state and central welfare schemes through regular field visits for district development.
            </p>
          </div>

          {/* Right Section Content */}
          <div className="homeabout-right-section">
            {/* Main Heading */}
            <h2 className="homeabout-main-heading">
              TIME TO TRAVEL
            </h2>

            {/* Travel Cards Grid */}
            <div className="homeabout-cards-grid">
              
              {/* Card 1 */}
              <div className="homeabout-travel-item">
                <div className="homeabout-img-wrapper">
                  {/* Hollow Border Frame */}
                  <div className="homeabout-border-frame"></div>
                  
                  {/* Image Card Container */}
                  <div className="homeabout-img-card">
                    <img 
                      src="/src/assets/5pic.jpg" 
                      alt="Mountains" 
                    />
                  </div>
                </div>
                
                <div className="homeabout-card-content">
                  <p className="homeabout-card-text">
                    {expandedCard1 
                      ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
                      : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet."
                    }
                  </p>
                  <button 
                    className="homeabout-btn"
                    onClick={() => setExpandedCard1(!expandedCard1)}
                  >
                    {expandedCard1 ? "READ LESS" : "READ MORE"}
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="homeabout-travel-item">
                <div className="homeabout-img-wrapper">
                  {/* Hollow Border Frame */}
                  <div className="homeabout-border-frame"></div>
                  
                  {/* Image Card Container */}
                  <div className="homeabout-img-card">
                    <img 
                      src="/src/assets/9pic.jpg" 
                      alt="Lake" 
                    />
                  </div>
                </div>
                
                <div className="homeabout-card-content">
                  <p className="homeabout-card-text">
                    {expandedCard2 
                      ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
                      : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet."
                    }
                  </p>
                  <button 
                    className="homeabout-btn"
                    onClick={() => setExpandedCard2(!expandedCard2)}
                  >
                    {expandedCard2 ? "READ LESS" : "READ MORE"}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;