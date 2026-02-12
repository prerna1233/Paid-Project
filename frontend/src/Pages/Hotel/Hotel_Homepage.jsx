import React, { useState } from "react";
import "./Hotel_Homepage.css";
import HOTELS_DATABASE from "./Hotel";
import { FaSearch, FaStar, FaWifi, FaCar, FaUtensils, FaConciergeBell, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";

export default function Hotel_Homepage() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedRating, setSelectedRating] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");

  const filteredHotels = HOTELS_DATABASE.filter((hotel) => {
    const matchesSearch = hotel.name.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = hotel.price >= priceRange.min && hotel.price <= priceRange.max;
    const matchesRating = selectedRating.length === 0 || selectedRating.includes(Math.floor(hotel.rating));
    return matchesSearch && matchesPrice && matchesRating;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const toggleRating = (rating) => {
    setSelectedRating(prev => 
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  return (
    <>
      <div className="hotel-page-container">
        {/* HERO SEARCH SECTION */}
        <div className="hero-search-section">
          <div className="hero-overlay">
            <h1 className="hero-title">Find Your Perfect Place.</h1>
            <div className="search-bar-wrapper">
              <div className="search-inputs-group">
                <input
                  type="text"
                  placeholder="Search by City/Hotel Name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="hero-search-input"
                />
                <button className="hero-search-button">
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="stats-section">
          <div className="stat-card">
            <h2>{HOTELS_DATABASE.length}+</h2>
            <p>Available Hotels</p>
          </div>
          <div className="stat-card">
            <h2>7400+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <h2>12300+</h2>
            <p>Rooms Booked</p>
          </div>
          <div className="stat-card">
            <h2>95%</h2>
            <p>Satisfaction Rate</p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="hotel-main-content">
          {/* LEFT SIDEBAR */}
          <aside className="filter-sidebar">
            <div className="filter-header">
              <h3>Advanced Filter</h3>
            </div>

            <div className="filter-section">
              <h4>Price Range</h4>
              <div className="price-range-display">
                ₹{priceRange.min} - ₹{priceRange.max}
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="price-slider"
              />
            </div>

            <div className="filter-section">
              <h4>Rating</h4>
              <div className="checkbox-group">
                {[5, 4, 3, 2, 1].map(rating => (
                  <label key={rating} className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={selectedRating.includes(rating)}
                      onChange={() => toggleRating(rating)}
                    />
                    <span className="rating-number">Rating {rating}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE - RESULTS */}
          <main className="hotel-results">
            <div className="results-header">
              <h2>Recent Property For Rent</h2>
              <div className="sort-by">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="popularity">Default Order</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            <div className="hotel-cards-grid">
              {sortedHotels.map((hotel) => (
                <div key={hotel.id} className="hotel-property-card">
                  <div className="property-image">
                    <img src={hotel.image} alt={hotel.name} />
                  </div>
                  
                  <div className="property-content">
                    <h3 className="property-title">{hotel.name}</h3>
                    <div className="property-rating">
                      <span className="rating-badge">Rating: {hotel.rating.toFixed(1)}/5</span>
                      <span className="reviews-count">({hotel.reviews} reviews)</span>
                    </div>
                    
                    <div className="property-location">
                      <FaMapMarkerAlt /> {hotel.location}, Kishanganj
                    </div>
                    
                    <div className="property-features">
                      <span><FaUtensils /> Restaurant</span>
                      <span><FaWifi /> WiFi</span>
                      <span><FaCar /> Parking</span>
                    </div>
                    
                    <div className="property-footer">
                      <div className="property-price">
                        <span className="price-label">₹{hotel.price}</span>
                        <span className="price-period">/Night</span>
                      </div>
                      <button className="view-details-btn">
                        <FaConciergeBell /> Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
