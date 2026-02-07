import React, { useState } from 'react';
import destinationData from './Destination.js';
import Footer from '../../Components/Footer/Footer';
import './Destination.style.css';
import { FaMapMarkerAlt, FaCar, FaBus, FaMotorcycle, FaWalking, FaClock, FaRupeeSign, FaMap, FaStar, FaCalendarAlt, FaInfoCircle, FaSearch, FaArrowRight, FaPlay } from 'react-icons/fa';

function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setActiveTab('overview');
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  const getTravelIcon = (mode) => {
    switch(mode) {
      case 'car': return <FaCar />;
      case 'bus': return <FaBus />;
      case 'bike': return <FaMotorcycle />;
      case 'walking': return <FaWalking />;
      case 'train': return <FaMapMarkerAlt />;
      default: return <FaCar />;
    }
  };

  // Flatten all destinations for display
  const allDestinations = Object.values(destinationData).flat();
  
  // Filter destinations based on search
  const filteredDestinations = allDestinations.filter(destination =>
    destination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="destination-container">
        {/* Hero Section - Galata Tower Style */}
        <div className="hero-section">
          <div className="hero-background"></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Kishanganj</h1>
              <p className="hero-description">
                Explore comfort and culture from every perspective at Kishanganj.
                Travel along storied cobblestone streets for breathtaking
                architecture and authentic delights in this beautiful destination
                where history meets modern development.
              </p>
              <button className="hero-btn">Read More</button>
            </div>
          </div>
          
          {/* Info Cards */}
          <div className="hero-info-cards">
            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h4>Admission Fee</h4>
                <p>Free Entry</p>
                <span>Open all day</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Opening Hours</h4>
                <p>24/7 Open</p>
                <span>Always accessible</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaCar />
              </div>
              <div className="info-content">
                <h4>Best Time to Visit</h4>
                <p>Oct - Mar</p>
                <span>Pleasant weather</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaInfoCircle />
              </div>
              <div className="info-content">
                <h4>Accessibility</h4>
                <p>Easy Access</p>
                <span>Well connected roads</span>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-background">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Kishanganj Hero" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Kishanganj</h1>
              <p className="hero-description">
                Explore beautiful destinations from new perspectives of Galata Tower. 
                Find unlimited new places that have been hidden.
                Let it deliver your travel in every new places.
                There are the best tourism in the world from traveling in the area of Kishanganj.
              </p>
              <button className="hero-cta-btn">Explore Now</button>
            </div>
          </div>
        </div>
        
        {/* Info Cards Section */}
        <div className="info-cards-section">
          <div className="info-cards-container">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Admission Fee</h4>
                <p>₹50 - ₹200</p>
                <span className="info-note">Varies by location</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h4>Opening Hours</h4>
                <p>9:00 - 19:00</p>
                <span className="info-note">Daily operations</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaCalendarAlt />
              </div>
              <div className="info-content">
                <h4>Best Time to Visit</h4>
                <p>Oct - Mar</p>
                <span className="info-note">Pleasant weather</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaInfoCircle />
              </div>
              <div className="info-content">
                <h4>Accessibility</h4>
                <p>Wheelchair Friendly</p>
                <span className="info-note">Most locations accessible</span>
              </div>
            </div>
          </div>
        </div>
        {/* Values Section */}
        <div className="values-section">
          <div className="values-container">
            <h2 className="values-title">Top values for you</h2>
            <p className="values-subtitle">Try variety of benefits when using our services</p>
            
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <FaMapMarkerAlt />
                </div>
                <h4>Best Pickup</h4>
                <p>We provide special cars for your journey at best prices</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaCar />
                </div>
                <h4>Fast Booking</h4>
                <p>Quick and easy booking of tours for unforgettable trips</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaRupeeSign />
                </div>
                <h4>Best tour guides</h4>
                <p>Our best tour guides is ready to guide you in the tour</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaClock />
                </div>
                <h4>Lot of Choices</h4>
                <p>Various promotions and attractive discounts for your comfort</p>
              </div>
            </div>
          </div>
        </div>

        {/* Choose Tour Section */}
        <div className="choose-tour-section">
          <div className="tour-container">
            <div className="tour-header">
              <h2 className="tour-title">Choose your tour</h2>
              <p className="tour-subtitle">Explore our featured destinations</p>
            </div>
            
            <div className="tour-cards-grid">
              {filteredDestinations.slice(0, 4).map((destination, index) => {
                const tourTypes = ['Alone with nature', 'Jeep ride', 'Sailing tour', 'Corners of the Island'];
                const prices = ['₹1500', '₹2400', '₹1800', '₹3200'];
                return (
                  <div key={destination.id} className="tour-card-item" onClick={() => openModal(destination)}>
                    <div className="tour-card-image">
                      <img 
                        src={destination.img} 
                        alt={destination.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x200/28a745/ffffff?text=' + encodeURIComponent(destination.title);
                        }}
                      />
                      <div className="tour-card-overlay">
                        <div className="tour-info">
                          <h4>{tourTypes[index] || destination.title}</h4>
                          <span className="tour-price">{prices[index]} <small>/person</small></span>
                        </div>
                        <button className="tour-card-btn">
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* All Destinations Section */}
        <div className="all-destinations-section">
          <div className="destinations-container">
            <div className="destinations-header">
              <h2 className="destinations-title">All Travel Destinations</h2>
              <p className="destinations-subtitle">Discover amazing places in Kishanganj</p>
              
              {/* Search and Filter */}
              <div className="search-filter-container">
                <div className="search-bar">
                  <FaSearch className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="destination-stats">
                  <span>{filteredDestinations.length} destinations found</span>
                </div>
              </div>
            </div>
            
            <div className="destinations-grid">
              {filteredDestinations.map((destination, index) => (
                <div key={destination.id} className="destination-card" onClick={() => openModal(destination)}>
                  <div className="card-image">
                    <img 
                      src={destination.img} 
                      alt={destination.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/28a745/ffffff?text=' + encodeURIComponent(destination.title);
                      }}
                    />
                    <div className="card-overlay">
                      <span className="card-category">{destination.category}</span>
                    </div>
                    <div className="card-favorite">
                      <FaStar className="favorite-icon" />
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3>{destination.title}</h3>
                      <div className="rating">
                        <FaStar className="star-icon" />
                        <span>4.{Math.floor(Math.random() * 9) + 1}</span>
                      </div>
                    </div>
                    <p className="card-description">{destination.description}</p>
                    <div className="card-details">
                      <div className="location">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>Kishanganj, India</span>
                      </div>
                      <div className="price">
                        <span className="price-amount">₹{Math.floor(Math.random() * 3000) + 1000}</span>
                        <span className="price-period">/person</span>
                      </div>
                    </div>
                    <button className="explore-btn">Explore Destination</button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredDestinations.length === 0 && (
              <div className="no-results">
                <h3>No destinations found</h3>
                <p>Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </div>



        {/* Attractions Section */}
        <div className="attractions-section">
          <div className="attractions-container">
            <div className="section-header">
              <span className="section-subtitle">CHOOSE YOUR EXPERIENCE</span>
              <h2 className="section-title">Top Attractions Destinations</h2>
            </div>
            <div className="attractions-grid">
              {filteredDestinations.slice(4).map((destination, index) => (
                <div key={destination.id} className="attraction-card" onClick={() => openModal(destination)}>
                  <div className="attraction-image">
                    <img 
                      src={destination.img} 
                      alt={destination.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/28a745/ffffff?text=' + encodeURIComponent(destination.title);
                      }}
                    />
                  </div>
                  <div className="attraction-content">
                    <h3>{destination.title}</h3>
                    <p>{destination.description}</p>
                    <div className="attraction-footer">
                      <span className="attraction-category">{destination.category}</span>
                      <button className="attraction-btn">Explore</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Enhanced Modal */}
        {selectedDestination && (
          <div className="destination-modal-overlay" onClick={closeModal}>
            <div className="destination-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title-section">
                  <h2>{selectedDestination.title}</h2>
                  <span className="modal-category">{selectedDestination.category}</span>
                </div>
                <button className="modal-close" onClick={closeModal}>&times;</button>
              </div>
              
              <div className="modal-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'travel' ? 'active' : ''}`}
                  onClick={() => setActiveTab('travel')}
                >
                  Travel Options
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`}
                  onClick={() => setActiveTab('map')}
                >
                  Location & Map
                </button>
              </div>

              <div className="modal-content">
                {activeTab === 'overview' && (
                  <div className="overview-content">
                    <img 
                      src={selectedDestination.img} 
                      alt={selectedDestination.title} 
                      className="modal-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x400/4a7c59/ffffff?text=' + encodeURIComponent(selectedDestination.title);
                      }}
                    />
                    <div className="overview-details">
                      <p className="modal-description">{selectedDestination.description}</p>
                      
                      <div className="details-grid">
                        <div className="detail-card">
                          <h4><FaStar className="detail-icon" />Highlights</h4>
                          <ul>
                            {selectedDestination.highlights.map((highlight, index) => (
                              <li key={index}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="detail-card">
                          <h4><FaInfoCircle className="detail-icon" />Facilities</h4>
                          <ul>
                            {selectedDestination.facilities.map((facility, index) => (
                              <li key={index}>{facility}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="visit-info">
                        <div className="info-item">
                          <strong>Best Time to Visit:</strong> {selectedDestination.bestTime}
                        </div>
                        <div className="info-item">
                          <strong>Distance from City:</strong> {selectedDestination.distance}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'travel' && (
                  <div className="travel-content">
                    <h3>Travel Options to {selectedDestination.title}</h3>
                    <div className="travel-modes">
                      {Object.entries(selectedDestination.travelModes).map(([mode, details]) => (
                        <div key={mode} className="travel-mode-card">
                          <div className="travel-mode-header">
                            {getTravelIcon(mode)}
                            <h4>{mode.charAt(0).toUpperCase() + mode.slice(1)}</h4>
                          </div>
                          <div className="travel-mode-details">
                            <div className="travel-detail">
                              <FaClock className="detail-icon" />
                              <span>{details.time}</span>
                            </div>
                            <div className="travel-detail">
                              <FaRupeeSign className="detail-icon" />
                              <span>{details.cost}</span>
                            </div>
                            <div className="travel-route">
                              <strong>Route:</strong> {details.route}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'map' && (
                  <div className="map-content">
                    <h3>Location Details</h3>
                    <div className="map-placeholder">
                      <div className="map-info">
                        <FaMapMarkerAlt className="map-icon" />
                        <h4>{selectedDestination.title}</h4>
                        <p>Coordinates: {selectedDestination.coordinates.lat}, {selectedDestination.coordinates.lng}</p>
                        <p>Distance: {selectedDestination.distance} from Kishanganj</p>
                      </div>
                      {/* Map integration with OpenStreetMap */}
                      <div className="map-frame">
                        <iframe
                          width="100%"
                          height="300"
                          frameBorder="0"
                          src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedDestination.coordinates.lng-0.01},${selectedDestination.coordinates.lat-0.01},${selectedDestination.coordinates.lng+0.01},${selectedDestination.coordinates.lat+0.01}&layer=mapnik&marker=${selectedDestination.coordinates.lat},${selectedDestination.coordinates.lng}`}
                          allowFullScreen
                          title={`Map of ${selectedDestination.title}`}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Modal Footer with Action Buttons */}
              <div className="modal-footer">
                <div className="modal-action-buttons">
                  <a 
                    href={`/place/${selectedDestination.title.replace(/\s+/g, '')}`}
                    className="btn-primary detailed-page-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInfoCircle className="btn-icon" />
                    Visit Detailed Page
                  </a>
                  <button 
                    onClick={() => window.open(`https://maps.google.com?q=${selectedDestination.coordinates.lat},${selectedDestination.coordinates.lng}`, '_blank')}
                    className="btn-secondary google-maps-btn"
                  >
                    <FaMap className="btn-icon" />
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
       
      
    
  </>
  )
}

export default Destination;