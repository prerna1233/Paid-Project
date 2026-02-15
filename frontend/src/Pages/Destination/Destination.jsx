import React, { useState } from 'react';
import destinationData from './Destination.js';
import Footer from '../../Components/Footer/Footer';
import './Destination.style.css';
import { FaMapMarkerAlt, FaCar, FaBus, FaMotorcycle, FaWalking, FaClock, FaRupeeSign, FaMap, FaStar, FaCalendarAlt, FaInfoCircle, FaSearch, FaArrowRight, FaPlay, FaPhone, FaAmbulance, FaShieldAlt, FaExclamationTriangle, FaClipboardList, FaHospital, FaTree, FaPaw, FaPrayingHands, FaLandmark, FaTractor, FaHiking, FaFilter, FaRoute, FaTrain, FaPlane, FaWheelchair, FaLanguage } from 'react-icons/fa';

function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  // Some setters are declared for future interactive controls (search/filters)
  // and are currently unused; disable the unused-vars rule for these lines.
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState('all');
  // eslint-disable-next-line no-unused-vars
  const [selectedDistance, setSelectedDistance] = useState('all');
  // eslint-disable-next-line no-unused-vars
  const [selectedSeason, setSelectedSeason] = useState('all');
  // eslint-disable-next-line no-unused-vars
  const [showFamilyFriendly, setShowFamilyFriendly] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showAccessible, setShowAccessible] = useState(false);

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
      case 'train': return <FaTrain />;
      default: return <FaCar />;
    }
  };

  // Category icons for government tourism
  // eslint-disable-next-line no-unused-vars
  const getCategoryIcon = (category) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('nature') || lowerCategory.includes('eco')) return <FaTree />;
    if (lowerCategory.includes('wildlife') || lowerCategory.includes('forest')) return <FaPaw />;
    if (lowerCategory.includes('religious') || lowerCategory.includes('spiritual')) return <FaPrayingHands />;
    if (lowerCategory.includes('heritage') || lowerCategory.includes('culture')) return <FaLandmark />;
    if (lowerCategory.includes('rural') || lowerCategory.includes('agriculture')) return <FaTractor />;
    if (lowerCategory.includes('adventure') || lowerCategory.includes('outdoor')) return <FaHiking />;
    return <FaMapMarkerAlt />;
  };

  // Flatten all destinations for display
  const allDestinations = Object.values(destinationData).flat();
  
  // Filter destinations based on search and filters
  const filteredDestinations = allDestinations.filter(destination => {
    // Defensive guards: ensure fields exist before calling string methods
    const title = (destination && destination.title) ? String(destination.title) : '';
    const category = (destination && destination.category) ? String(destination.category) : '';
    const description = (destination && destination.description) ? String(destination.description) : '';
    const bestTime = (destination && destination.bestTime) ? String(destination.bestTime) : '';

    const q = String(searchTerm || '').toLowerCase();
    const matchesSearch = title.toLowerCase().includes(q) ||
      category.toLowerCase().includes(q) ||
      description.toLowerCase().includes(q);

    const matchesCategory = selectedCategory === 'all' ||
      category.toLowerCase().includes(String(selectedCategory || '').toLowerCase());

    const distanceKm = parseInt(destination && destination.distance, 10);
    const matchesDistance = selectedDistance === 'all' ||
      (selectedDistance === '10' && !isNaN(distanceKm) && distanceKm <= 10) ||
      (selectedDistance === '50' && !isNaN(distanceKm) && distanceKm <= 50) ||
      (selectedDistance === '100' && !isNaN(distanceKm) && distanceKm <= 100);

    const matchesSeason = selectedSeason === 'all' ||
      bestTime.toLowerCase().includes(String(selectedSeason || '').toLowerCase());

    return matchesSearch && matchesCategory && matchesDistance && matchesSeason;
  });

  return (
    <>
      <div className="destination-container">
        {/* Single Enhanced Hero Section */}
        <div className="hero-section">
          <div className="hero-background">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Kishanganj Landscape" />
          </div>
          <div className="hero-overlay"></div>
          
          {/* Decorative Elements */}
          <div className="hero-decorative">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-label">Government of Bihar - Department of Tourism</span>
              <h1 className="hero-title">
                Explore <span className="highlight">Kishanganj District</span>
              </h1>
              <p className="hero-description">
                Located at the Bihar-West Bengal-Nepal tri-junction, Kishanganj offers a unique blend of 
                natural beauty, cultural diversity, and spiritual heritage. Discover pristine tea gardens, 
                wildlife sanctuaries, and sacred sites in India's northeastern gateway.
              </p>
              <div className="hero-actions">
                <button className="hero-btn primary" onClick={() => document.getElementById('destinations-section').scrollIntoView({behavior: 'smooth'})}>
                  <FaMapMarkerAlt className="btn-icon" />
                  View Destinations
                </button>
                <button className="hero-btn secondary" onClick={() => document.getElementById('travel-info').scrollIntoView({behavior: 'smooth'})}>
                  <FaInfoCircle className="btn-icon" />
                  Travel Information
                </button>
              </div>
            </div>
          </div>
        </div>

      

        {/* All Destinations Section - MOVED TO TOP */}
        <div className="all-destinations-section" id="destinations-section">
          <div className="destinations-container">
            <div className="destinations-header">
              <h2 className="destinations-title">All Travel Destinations</h2>
              <p className="destinations-subtitle">Discover amazing places in Kishanganj</p>
              
            
            </div> 
            
            <div className="destinations-grid">
              {filteredDestinations.map((destination, idx) => (
                <div key={`${destination && destination.id ? destination.id : 'dest'}-${idx}`} className="destination-card-compact">
                  <div className="card-image">
                    <img 
                      src={destination.img} 
                      alt={destination.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200/629f4f/ffffff?text=' + encodeURIComponent(destination.title);
                      }}
                    />
                    <span className="category-tag">{destination.category}</span>
                  </div>
                  
                  <div className="card-content">
                          <h3 className="card-title">{destination.title || 'Untitled'}</h3>
                    
                    <p className="card-description">
                      {destination.description.length > 100 
                        ? destination.description.substring(0, 100) + '...' 
                        : destination.description}
                    </p>
                    
                    <div className="card-info">
                      <span className="info-item">
                        <FaCalendarAlt /> {destination.bestTime || 'N/A'}
                      </span>
                      <span className="info-item">
                        <FaMapMarkerAlt /> {destination.distance || 'N/A'}
                      </span>
                    </div>
                    
                    <button 
                      className="view-btn"
                      onClick={() => openModal(destination)}
                    >
                      View Details
                    </button>
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

        {/* Surrounding Regions & Nearby Attractions */}
        <div className="nearby-attractions-section">
          <div className="tour-container">
            <div className="section-header">
              <h2>Surrounding Regions & Nearby Attractions</h2>
              <div className="header-line"></div>
              <p className="section-subtitle">Kishanganj is surrounded by West Bengal, Nepal, Purnia, and Araria - Explore the tri-junction region</p>
            </div>
            
            <div className="nearby-grid">
              {/* West Bengal - Eastern Border */}
              <div className="nearby-card">
                <div className="nearby-flag">
                  <img src="https://flagcdn.com/w80/in.png" alt="West Bengal" />
                </div>
                <div className="nearby-content">
                  <h4>West Bengal (Eastern Border)</h4>
                  <p className="nearby-location">Shares eastern border with Kishanganj</p>
                  <ul className="nearby-attractions-list">
                    <li>
                      <FaLandmark className="list-icon" />
                      <span>Siliguri - Major City (65 km east)</span>
                    </li>
                    <li>
                      <FaTree className="list-icon" />
                      <span>Mahananda Wildlife Sanctuary - Biodiversity hotspot</span>
                    </li>
                    <li>
                      <FaMapMarkerAlt className="list-icon" />
                      <span>North Bengal Tea Gardens - Scenic plantations</span>
                    </li>
                    <li>
                      <FaHiking className="list-icon" />
                      <span>Darjeeling Hills - Hill station access point</span>
                    </li>
                    <li>
                      <FaTrain className="list-icon" />
                      <span>New Jalpaiguri Railway - Major connectivity hub</span>
                    </li>
                  </ul>
                  <div className="nearby-advisory">
                    <FaInfoCircle />
                    <span>Interstate travel - Valid photo ID required</span>
                  </div>
                </div>
              </div>

              {/* Nepal - Northern Border */}
              <div className="nearby-card">
                <div className="nearby-flag">
                  <img src="https://flagcdn.com/w80/np.png" alt="Nepal" />
                </div>
                <div className="nearby-content">
                  <h4>Nepal (Northern Border)</h4>
                  <p className="nearby-location">International border - Northern side of Kishanganj</p>
                  <ul className="nearby-attractions-list">
                    <li>
                      <FaLandmark className="list-icon" />
                      <span>Kakarbhitta Border Town - Entry point (45 km north)</span>
                    </li>
                    <li>
                      <FaPrayingHands className="list-icon" />
                      <span>Ilam District - Famous tea gardens region</span>
                    </li>
                    <li>
                      <FaHiking className="list-icon" />
                      <span>Eastern Nepal Hill Stations - Trekking routes</span>
                    </li>
                    <li>
                      <FaTree className="list-icon" />
                      <span>Mechi Zone - Natural landscapes & culture</span>
                    </li>
                    <li>
                      <FaMapMarkerAlt className="list-icon" />
                      <span>Birtamode - Commercial hub near border</span>
                    </li>
                  </ul>
                  <div className="nearby-advisory nearby-advisory-alert">
                    <FaInfoCircle />
                    <span>International border - Passport or voter ID required</span>
                  </div>
                </div>
              </div>

              {/* Purnia - Western Neighbor */}
              <div className="nearby-card">
                <div className="nearby-flag">
                  <img src="https://flagcdn.com/w80/in.png" alt="Purnia District" />
                </div>
                <div className="nearby-content">
                  <h4>Purnia District (Western Border)</h4>
                  <p className="nearby-location">Adjacent Bihar district - Western side of Kishanganj</p>
                  <ul className="nearby-attractions-list">
                    <li>
                      <FaLandmark className="list-icon" />
                      <span>Purnia City - Divisional headquarters (80 km west)</span>
                    </li>
                    <li>
                      <FaPrayingHands className="list-icon" />
                      <span>Mata Puran Devi Temple - Religious significance</span>
                    </li>
                    <li>
                      <FaMapMarkerAlt className="list-icon" />
                      <span>Kali Mandir Gulabbagh - Historical temple</span>
                    </li>
                    <li>
                      <FaTractor className="list-icon" />
                      <span>Agricultural Markets - Regional trade center</span>
                    </li>
                    <li>
                      <FaLandmark className="list-icon" />
                      <span>Jalalgarh Fort Ruins - Historical heritage</span>
                    </li>
                  </ul>
                  <div className="nearby-advisory">
                    <FaInfoCircle />
                    <span>Within Bihar - No special permits required</span>
                  </div>
                </div>
              </div>

              {/* Araria - Southwestern Neighbor */}
              <div className="nearby-card">
                <div className="nearby-flag">
                  <img src="https://flagcdn.com/w80/in.png" alt="Araria District" />
                </div>
                <div className="nearby-content">
                  <h4>Araria District (Southwestern Border)</h4>
                  <p className="nearby-location">Adjacent Bihar district - Southwest of Kishanganj</p>
                  <ul className="nearby-attractions-list">
                    <li>
                      <FaLandmark className="list-icon" />
                      <span>Araria Town - District center (50 km southwest)</span>
                    </li>
                    <li>
                      <FaPrayingHands className="list-icon" />
                      <span>Kali Asthan Temple - Major pilgrimage site</span>
                    </li>
                    <li>
                      <FaTree className="list-icon" />
                      <span>Kosi River Basin - Natural water system</span>
                    </li>
                    <li>
                      <FaTractor className="list-icon" />
                      <span>Rice & Maize Fields - Agricultural landscape</span>
                    </li>
                    <li>
                      <FaMapMarkerAlt className="list-icon" />
                      <span>Forbesganj - Cultural & commercial town</span>
                    </li>
                  </ul>
                  <div className="nearby-advisory">
                    <FaInfoCircle />
                    <span>Within Bihar - No special permits required</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="nearby-footer-note">
              <FaExclamationTriangle />
              <p>
                <strong>Geographical Context:</strong> Kishanganj district is strategically located at the tri-junction where Bihar meets West Bengal and Nepal. 
                West Bengal borders the east, Nepal borders the north, while fellow Bihar districts Purnia (west) and Araria (southwest) complete the surrounding regions. 
                For Nepal travel, Indian citizens require valid passport or voter ID. Interstate travel within India requires photo identification.
              </p>
            </div>
          </div>
        </div>

        {/* Best Time to Visit Section */}
        <div className="best-time-section">
          <div className="best-time-container">
            <div className="section-header">
              <h2>Best Time to Visit Kishanganj</h2>
              <div className="header-line"></div>
            </div>
            <div className="best-time-content">
              <p>
                The ideal time to visit Kishanganj is between <strong>October and March</strong>, when 
                the weather remains pleasant with temperatures ranging from 10°C to 25°C. This period is 
                perfect for outdoor activities, sightseeing, and exploring tea gardens.
              </p>
              <p>
                Summer months (April to June) can be warm and humid, while the monsoon season (July to 
                September) brings heavy rainfall. Visitors are advised to check weather conditions before 
                traveling, especially during monsoon when some areas may experience accessibility issues.
              </p>
            </div>
          </div>
        </div>

        
       

        {/* Travel Guidelines & Border Advisory */}
        <div className="travel-guidelines-section" id="travel-info">
          <div className="guidelines-container">
            <div className="section-header">
              <h2>Travel Guidelines & Border Advisory</h2>
              <div className="header-line"></div>
              <p className="section-subtitle">Important information for safe and responsible travel</p>
            </div>
            <div className="guidelines-grid">
              <div className="guideline-card">
                <div className="guideline-icon-wrapper">
                  <FaShieldAlt className="guideline-icon" />
                </div>
                <h3>Local Travel Rules</h3>
                <ul>
                  <li>Carry valid photo identification at all times</li>
                  <li>Follow designated routes and avoid restricted areas</li>
                  <li>Respect local customs, traditions, and cultural practices</li>
                  <li>Adhere to timings at tourist sites and religious places</li>
                </ul>
              </div>
              <div className="guideline-card">
                <div className="guideline-icon-wrapper">
                  <FaExclamationTriangle className="guideline-icon" />
                </div>
                <h3>Border Area Regulations</h3>
                <ul>
                  <li>Movement in border areas subject to security regulations</li>
                  <li>Additional permits may be required for certain zones</li>
                  <li>Photography restricted near defense installations</li>
                  <li>Contact district authorities for border area access</li>
                </ul>
              </div>
              <div className="guideline-card">
                <div className="guideline-icon-wrapper">
                  <FaTree className="guideline-icon" />
                </div>
                <h3>Eco-Sensitive Area Guidelines</h3>
                <ul>
                  <li>Follow designated trails in forest and wildlife areas</li>
                  <li>Do not disturb wildlife or damage vegetation</li>
                  <li>No littering - maintain cleanliness of natural sites</li>
                  <li>Forest entry permits required for protected areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Emergency Information */}
        <div className="safety-emergency-section">
          <div className="safety-container">
            <div className="section-header">
              <h2>Safety & Emergency Information</h2>
              <div className="header-line"></div>
              <p className="section-subtitle">Important contacts and safety guidelines</p>
            </div>
            <div className="safety-grid">
              <div className="emergency-contacts-card">
                <h3>Emergency Helplines</h3>
                <div className="contact-list">
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Police Emergency</span>
                      <a href="tel:100" className="contact-number">100</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaAmbulance className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Ambulance</span>
                      <a href="tel:108" className="contact-number">108</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaHospital className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">District Hospital</span>
                      <a href="tel:06456222222" className="contact-number">06456-222222</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaInfoCircle className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Tourist Helpline</span>
                      <a href="tel:1363" className="contact-number">1363</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="seasonal-alerts-card">
                <h3>Seasonal Alerts</h3>
                <div className="alert-list">
                  <div className="alert-item monsoon-alert">
                    <FaExclamationTriangle className="alert-icon" />
                    <div className="alert-content">
                      <strong>Monsoon Season (July - September)</strong>
                      <p>Heavy rainfall may cause flooding in low-lying areas. Check weather forecasts and road conditions before travel.</p>
                    </div>
                  </div>
                  <div className="alert-item winter-alert">
                    <FaExclamationTriangle className="alert-icon" />
                    <div className="alert-content">
                      <strong>Winter Season (December - January)</strong>
                      <p>Dense fog may affect visibility on roads and at airports. Plan travel accordingly and allow extra time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility & Public Facilities */}
        <div className="accessibility-facilities-section">
          <div className="accessibility-container">
            <div className="section-header">
              <h2>Accessibility & Public Facilities</h2>
              <div className="header-line"></div>
              <p className="section-subtitle">Available facilities for visitors</p>
            </div>
            <div className="facilities-grid">
              <div className="facility-card">
                <div className="facility-icon-wrapper">
                  <FaHospital className="facility-icon" />
                </div>
                <h3>Medical Facilities</h3>
                <p>
                  District hospital and primary health centers available. Government medical facilities 
                  provide basic healthcare services. Private clinics and pharmacies located in main town areas.
                </p>
              </div>
              <div className="facility-card">
                <div className="facility-icon-wrapper">
                  <FaBus className="facility-icon" />
                </div>
                <h3>Public Transport</h3>
                <p>
                  Government bus services connect Kishanganj with neighboring districts. Local transport 
                  available within the district. Railway station provides connectivity to major cities.
                </p>
              </div>
              <div className="facility-card">
                <div className="facility-icon-wrapper">
                  <FaInfoCircle className="facility-icon" />
                </div>
                <h3>Public Amenities</h3>
                <p>
                  Drinking water, restroom facilities, and parking available at major tourist destinations. 
                  Tourist information centers provide guidance and assistance to visitors.
                </p>
              </div>
              <div className="facility-card">
                <div className="facility-icon-wrapper">
                  <FaWheelchair className="facility-icon" />
                </div>
                <h3>Accessibility Support</h3>
                <p>
                  Wheelchair accessible paths available at select government-managed destinations. 
                  Assistance available at railway station and major tourist spots upon request.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Official Government Resources */}
        <div className="govt-resources-footer">
          <div className="resources-container">
            <div className="section-header">
              <h2>Official Government Resources</h2>
              <div className="header-line"></div>
            </div>
            <div className="govt-resources-grid">
              <a href="https://kishanganj.nic.in/" target="_blank" rel="noopener noreferrer" className="resource-card">
                <FaMapMarkerAlt className="resource-icon" />
                <div className="resource-info">
                  <h4>District Website</h4>
                  <p>kishanganj.nic.in</p>
                </div>
              </a>
              <a href="https://tourism.bihar.gov.in/" target="_blank" rel="noopener noreferrer" className="resource-card">
                <FaInfoCircle className="resource-icon" />
                <div className="resource-info">
                  <h4>Bihar Tourism</h4>
                  <p>tourism.bihar.gov.in</p>
                </div>
              </a>
              <a href="https://www.incredibleindia.org/" target="_blank" rel="noopener noreferrer" className="resource-card">
                <FaStar className="resource-icon" />
                <div className="resource-info">
                  <h4>Incredible India</h4>
                  <p>incredibleindia.org</p>
                </div>
              </a>
              <a href="https://www.irctc.co.in/" target="_blank" rel="noopener noreferrer" className="resource-card">
                <FaCar className="resource-icon" />
                <div className="resource-info">
                  <h4>Railway Booking</h4>
                  <p>irctc.co.in</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer removed as requested */}

        {/* Footer Component */}
        <Footer />
      </div>

        {/* Elegant View Details Modal */}
        {selectedDestination && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-elegant" onClick={e => e.stopPropagation()}>
              
              {/* Modal Header */}
              <div className="modal-header-elegant">
                <div className="header-content">
                  <span className="category-badge-header">{selectedDestination.category}</span>
                  <h2 className="modal-title-elegant">{selectedDestination.title}</h2>
                  <div className="quick-meta">
                    <span><FaMapMarkerAlt /> {selectedDestination.distance}</span>
                    <span><FaCalendarAlt /> {selectedDestination.bestTime}</span>
                  </div>
                </div>
                <button className="modal-close-elegant" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="modal-nav">
                <button 
                  className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <FaInfoCircle /> Overview
                </button>
                <button 
                  className={`nav-tab ${activeTab === 'travel' ? 'active' : ''}`}
                  onClick={() => setActiveTab('travel')}
                >
                  <FaCar /> Travel
                </button>
                <button 
                  className={`nav-tab ${activeTab === 'map' ? 'active' : ''}`}
                  onClick={() => setActiveTab('map')}
                >
                  <FaMap /> Location
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body-elegant">
                
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="tab-content">
                    {/* Hero Image */}
                    <div className="hero-image-container">
                      <img 
                        src={selectedDestination.img} 
                        alt={selectedDestination.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/1000x400/629f4f/ffffff?text=' + encodeURIComponent(selectedDestination.title);
                        }}
                      />
                    </div>

                    {/* Description */}
                    <div className="content-section">
                      <h3 className="section-title">About This Destination</h3>
                      <p className="description-text">{selectedDestination.description}</p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="two-column-grid">
                      {/* Highlights */}
                      <div className="content-box">
                        <h4 className="box-title">
                          <FaStar className="title-icon" /> Highlights
                        </h4>
                        <ul className="feature-list">
                          {(selectedDestination.highlights && Array.isArray(selectedDestination.highlights)) ? selectedDestination.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          )) : <li>No highlights available</li>}
                        </ul>
                      </div>

                      {/* Facilities */}
                      <div className="content-box">
                        <h4 className="box-title">
                          <FaInfoCircle className="title-icon" /> Facilities
                        </h4>
                        <ul className="feature-list">
                          {(selectedDestination.facilities && Array.isArray(selectedDestination.facilities)) ? selectedDestination.facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                          )) : <li>No facilities listed</li>}
                        </ul>
                      </div>
                    </div>

                    {/* Info Note */}
                    <div className="info-banner">
                      <FaExclamationTriangle className="banner-icon" />
                      <div>
                        <strong>Important:</strong> Entry timings and accessibility may vary. Please verify with local authorities before visiting.
                      </div>
                    </div>
                  </div>
                )}

                {/* Travel Tab */}
                {activeTab === 'travel' && (
                  <div className="tab-content">
                    <h3 className="section-title">How to Reach {selectedDestination.title}</h3>
                    
                    <div className="travel-grid">
                      {(selectedDestination.travelModes && typeof selectedDestination.travelModes === 'object') ? Object.entries(selectedDestination.travelModes).map(([mode, details]) => (
                        <div key={mode} className="travel-card-elegant">
                          <div className="travel-icon-wrapper">
                            {getTravelIcon(mode)}
                          </div>
                          <h4 className="travel-mode-title">{String(mode).charAt(0).toUpperCase() + String(mode).slice(1)}</h4>
                          <div className="travel-details">
                            <div className="detail-row">
                              <FaClock /> <span>{(details && details.time) ? details.time : 'N/A'}</span>
                            </div>
                            <div className="detail-row">
                              <FaRupeeSign /> <span>{(details && details.cost) ? details.cost : 'N/A'}</span>
                            </div>
                          </div>
                          <p className="travel-route"><strong>Route:</strong> {(details && details.route) ? details.route : 'N/A'}</p>
                        </div>
                      )) : <div>No travel information available</div>}
                    </div>

                    <div className="info-banner">
                      <FaPhone className="banner-icon" />
                      <div>
                        <strong>Need Help?</strong> Contact Tourist Helpline at <a href="tel:1363">1363</a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Map Tab */}
                {activeTab === 'map' && (
                  <div className="tab-content">
                    <h3 className="section-title">Location & Directions</h3>
                    
                    <div className="map-container-elegant">
                      <div className="map-info-card">
                        <FaMapMarkerAlt className="map-marker-icon" />
                        <div>
                          <h4>{selectedDestination.title}</h4>
                          <p><strong>Coordinates:</strong> {selectedDestination.coordinates && selectedDestination.coordinates.lat ? `${selectedDestination.coordinates.lat}°N` : 'N/A'}, {selectedDestination.coordinates && selectedDestination.coordinates.lng ? `${selectedDestination.coordinates.lng}°E` : 'N/A'}</p>
                          <p><strong>Distance:</strong> {selectedDestination.distance || 'N/A'} from Kishanganj</p>
                        </div>
                      </div>

                      <div className="map-embed">
                        <iframe
                          width="100%"
                          height="400"
                          frameBorder="0"
                          src={`https://www.openstreetmap.org/export/embed.html?bbox=${(selectedDestination.coordinates && selectedDestination.coordinates.lng) ? selectedDestination.coordinates.lng-0.01 : 0},${(selectedDestination.coordinates && selectedDestination.coordinates.lat) ? selectedDestination.coordinates.lat-0.01 : 0},${(selectedDestination.coordinates && selectedDestination.coordinates.lng) ? selectedDestination.coordinates.lng+0.01 : 0},${(selectedDestination.coordinates && selectedDestination.coordinates.lat) ? selectedDestination.coordinates.lat+0.01 : 0}&layer=mapnik&marker=${(selectedDestination.coordinates && selectedDestination.coordinates.lat) ? selectedDestination.coordinates.lat : 0},${(selectedDestination.coordinates && selectedDestination.coordinates.lng) ? selectedDestination.coordinates.lng : 0}`}
                          allowFullScreen
                          title={`Map of ${selectedDestination.title}`}
                        ></iframe>
                      </div>
                    </div>

                    <div className="info-banner">
                      <FaExclamationTriangle className="banner-icon" />
                      <div>
                        <strong>Navigation Tip:</strong> Use GPS for accurate directions. Road conditions may vary during monsoon season.
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
       
      
    
  </>
  )
}

export default Destination;