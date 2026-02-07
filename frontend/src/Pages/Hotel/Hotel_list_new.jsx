import React, { useState } from 'react';
import './Hotel_list.css';
import HOTELS_DATABASE from './Hotel';
import { FaFilter, FaSort, FaMapMarkerAlt, FaWifi, FaSpa, FaSwimmingPool, FaCar, FaHeart, FaShare } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer';

const HotelList = () => {
  const [expandedHotel, setExpandedHotel] = useState(null);

  const toggleHotelDetails = (hotelId) => {
    setExpandedHotel(expandedHotel === hotelId ? null : hotelId);
  };

  // Enhanced hotel card component for detailed view
  const DetailedHotelCard = ({ hotel }) => {
    const isExpanded = expandedHotel === hotel.id;
    
    return (
      <div className="detailed-hotel-card">
        <div className="hotel-main-info">
          <div className="hotel-image-container">
            <img src={hotel.image} alt={hotel.name} className="hotel-main-image" />
            <div className="hotel-image-count">1 / 67</div>
            <div className="hotel-actions">
              <FaHeart className="action-icon" />
              <FaShare className="action-icon" />
            </div>
          </div>
          
          <div className="hotel-details">
            <div className="hotel-header-section">
              <h3 className="hotel-title">{hotel.name}</h3>
              <div className="hotel-rating">
                <div className="rating-badge">
                  <span className="rating-score">{hotel.rating}</span>
                </div>
                <span className="rating-text">{hotel.reviews > 100 ? 'Excellent' : 'Very good'}</span>
                <span className="rating-count">({hotel.reviews} ratings)</span>
              </div>
            </div>
            
            <div className="location-info">
              <FaMapMarkerAlt className="location-icon" />
              <span>{hotel.location}, {hotel.distance}</span>
            </div>
            
            <div className="hotel-highlights">
              <div className="highlight-item">
                {hotel.amenities.includes('Free Breakfast') && <span className="highlight-tag">Breakfast included</span>}
                {hotel.amenities.includes('Free Cancellation') && <span className="highlight-tag">Free cancellation</span>}
              </div>
            </div>
          </div>
          
          <div className="hotel-pricing">
            <div className="price-badge">56% lower than other sites</div>
            <div className="price-info">
              <div className="main-price">₹{hotel.price.toLocaleString()}<span className="per-night">per night</span></div>
              <div className="date-range">13 Feb - 17 Feb</div>
            </div>
            <button 
              className="view-deal-btn"
              onClick={() => toggleHotelDetails(hotel.id)}
            >
              {isExpanded ? 'Hide Details' : 'Check deal >'}
            </button>
          </div>
        </div>
        
        {isExpanded && (
          <div className="hotel-expanded-details">
            <div className="details-tabs">
              <button className="tab-btn active">Info</button>
              <button className="tab-btn">Photos</button>
              <button className="tab-btn">Reviews</button>
              <button className="tab-btn">Prices</button>
            </div>
            
            <div className="good-to-know">
              <h4>Good to know</h4>
              
              <div className="highlight-section">
                <div className="highlight-header">
                  <FaMapMarkerAlt className="highlight-icon" />
                  <strong>Prime Location</strong>
                </div>
                <p>Located in the heart of {hotel.location} with easy access to major attractions and transport links.</p>
              </div>
              
              <div className="features-grid">
                <div className="feature-item">
                  <h5>Premium Amenities</h5>
                  <p>Experience luxury with state-of-the-art facilities including spa services, premium dining, and concierge support.</p>
                </div>
                
                <div className="feature-item">
                  <h5>Unique Experience</h5>
                  <p>Enjoy exclusive services and personalized attention that makes your stay memorable and comfortable.</p>
                </div>
              </div>
            </div>
            
            <div className="amenities-section">
              <h4>Top amenities</h4>
              <div className="amenities-grid">
                <div className="amenity-item">
                  <FaWifi className="amenity-icon" />
                  <span>WiFi in lobby</span>
                </div>
                <div className="amenity-item">
                  <FaWifi className="amenity-icon" />
                  <span>WiFi in rooms</span>
                </div>
                <div className="amenity-item">
                  <FaSwimmingPool className="amenity-icon" />
                  <span>Pool</span>
                </div>
                <div className="amenity-item">
                  <FaSpa className="amenity-icon" />
                  <span>Spa</span>
                </div>
                <div className="amenity-item">
                  <FaCar className="amenity-icon" />
                  <span>Parking</span>
                </div>
                <div className="amenity-item">
                  <span>A/C</span>
                </div>
              </div>
              <button className="show-all-amenities">Show all amenities</button>
            </div>
            
            <div className="about-section">
              <h4>About</h4>
              <h5>{hotel.name}</h5>
              <p>A premium accommodation offering world-class service and amenities in the heart of {hotel.location}.</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="hotel-list-container">
        {/* Header with filters */}
        <div className="filters-header">
          <div className="results-info">
            <h2>We found {HOTELS_DATABASE.length} hotels from 5 sites</h2>
          </div>
          
          <div className="filter-controls">
            <button className="filter-btn">
              <FaFilter /> Filters
            </button>
            <button className="sort-btn">
              <FaSort /> Sort by
            </button>
            <button className="filter-tag">Price</button>
            <button className="filter-tag">Location</button>
            <button className="filter-tag">Rating: 8.0+</button>
            <button className="filter-tag active">Breakfast included ×</button>
            <button className="filter-tag">Free cancellation</button>
            <button className="filter-tag">WiFi</button>
            <button className="filter-tag">Parking</button>
          </div>
        </div>

        <div className="hotel-list-page">
          {/* Hotel listing section with detailed cards */}
          <div className="hotels-section">
            {HOTELS_DATABASE.map(hotel => (
              <DetailedHotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default HotelList;