import React, { useState } from 'react';
import './HotelCardWithDetails.css';
import { 
  FaWifi, 
  FaUtensils, 
  FaTimes, 
  FaSwimmingPool, 
  FaSpa, 
  FaCar,
  FaConciergeBell,
  FaDumbbell,
  FaWineGlassAlt,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaMapMarkerAlt
} from "react-icons/fa";

const HotelCardWithDetails = ({ hotel }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getAmenityIcon = (amenity) => {
    const amenityLower = amenity.toLowerCase();
    
    if (amenityLower.includes('wifi')) return <FaWifi />;
    if (amenityLower.includes('breakfast') || amenityLower.includes('food')) return <FaUtensils />;
    if (amenityLower.includes('cancellation')) return <FaTimes />;
    if (amenityLower.includes('pool')) return <FaSwimmingPool />;
    if (amenityLower.includes('spa')) return <FaSpa />;
    if (amenityLower.includes('parking') || amenityLower.includes('car')) return <FaCar />;
    if (amenityLower.includes('kitchen') || amenityLower.includes('room service')) return <FaConciergeBell />;
    if (amenityLower.includes('gym') || amenityLower.includes('fitness')) return <FaDumbbell />;
    if (amenityLower.includes('bar') || amenityLower.includes('drink')) return <FaWineGlassAlt />;
    
    return <FaConciergeBell />;
  };

  return (
    <div className="hotel-card-detailed">
      {/* Main Hotel Card */}
      <div className="hotel-card-main">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="hotel-image" 
        />
        
        <div className="hotel-content">
          <div className="hotel-header">
            <h3 className="hotel-name">{hotel.name}</h3>
          </div>

          <p className="property-description">
            {hotel.description && (hotel.description.length > 140 ? hotel.description.substring(0, 137) + '...' : hotel.description)}
          </p>

          <div className="hotel-type-location">
            <span className="hotel-location">{hotel.location}</span>
          </div>

          <div className="hotel-footer-row">
            <div className="hotel-price">₹{hotel.price}</div>
            <div className="hotel-rating">
              <span className="rating-score">{Math.round(hotel.rating / 2)}</span>
            </div>
          </div>
          
          {hotel.amenities && hotel.amenities.length > 0 && (
            <div className="hotel-amenities">
              {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                <div key={idx} className="amenity-tag">
                  <span className="amenity-icon">{getAmenityIcon(amenity)}</span>
                  <span className="amenity-text">{amenity}</span>
                </div>
              ))}
              {hotel.amenities.length > 3 && (
                <span className="more-amenities">+{hotel.amenities.length - 3} more</span>
              )}
            </div>
          )}
          
          <button 
            className="view-more-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Show Less' : 'View More'} 
            {showDetails ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {showDetails && (
        <div className="hotel-details-expanded">
          
          {/* Good to Know Section */}
          <div className="good-to-know-section">
            <h3>Good to know</h3>
            <div className="highlights">
              <div className="highlight-item">
                <div className="highlight-tags">
                  <span className="highlight-tag">Highlight</span>
                  <span className="dining-tag">Dining</span>
                </div>
                <div className="highlight-content">
                  <h4>Authentic Indian cuisine at Kebabs & Kurries</h4>
                  <p>Savor specialized Indian dishes, including exceptional dum biryani and faluda kulfi, at the on-site restaurant, Kebabs & Kurries.</p>
                  <div className="helpful-section">
                    <span>Was this helpful?</span>
                    <button className="helpful-btn">Helpful</button>
                    <button className="helpful-btn">Not Helpful</button>
                  </div>
                </div>
                <div className="highlight-image">
                  <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200" alt="Restaurant" />
                </div>
              </div>
            </div>

            <div className="feature-grid">
              <div className="feature-item">
                <h4>Expansive 20-acre landscaped gardens</h4>
                <p>Wander through 20 acres of lush, beautifully maintained gardens featuring blooming roses, vibrant azaleas, and swaying palms.</p>
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150" alt="Gardens" />
              </div>
              <div className="feature-item">
                <h4>Versatile event and conference facilities</h4>
                <p>Host successful events in extensive facilities, including a large banquet hall and conference center measuring 38,751 square feet.</p>
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=150" alt="Conference" />
              </div>
            </div>
          </div>

          {/* Top Amenities */}
          <div className="amenities-section">
            <h3>Top amenities</h3>
            <div className="amenities-grid">
              {hotel.amenities && hotel.amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  <span className="amenity-icon">{getAmenityIcon(amenity)}</span>
                  <span className="amenity-name">{amenity}</span>
                </div>
              ))}
              <div className="amenity-item">
                <FaWifi />
                <span>WiFi in lobby</span>
              </div>
              <div className="amenity-item">
                <FaWifi />
                <span>WiFi in rooms</span>
              </div>
              <div className="amenity-item">
                <FaSwimmingPool />
                <span>Pool</span>
              </div>
              <div className="amenity-item">
                <FaSpa />
                <span>Spa</span>
              </div>
              <div className="amenity-item">
                <FaCar />
                <span>Parking</span>
              </div>
              <div className="amenity-item">
                <span>AC</span>
                <span>AC</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="about-section">
            <h3>About</h3>
            <h4>{hotel.name}</h4>
            <p>
              {hotel.name} is a {hotel.type.toLowerCase()} in {hotel.location}, offering stunning luxury, serene surroundings, and exceptional hospitality. 
              This luxury resort features premium amenities and is your gateway to an unforgettable holiday experience.
            </p>
          </div>

          {/* Location Section */}
          <div className="location-section">
            <h3>Location</h3>
            <p><FaMapMarkerAlt /> {hotel.location}, Bihar, India</p>
            
            <div className="location-details">
              <div className="location-item">
                <h4>Transport</h4>
                <p>Transport {hotel.location}: 7.7 km</p>
              </div>
              <div className="location-item">
                <h4>Landmarks</h4>
                <p>Stadium Local Stadium: 12.9 km</p>
              </div>
            </div>
          </div>

          <div className="book-section">
            <div className="hotel-short-description">
              <p>{hotel.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelCardWithDetails;