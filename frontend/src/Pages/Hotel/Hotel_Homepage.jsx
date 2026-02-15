import React, { useState, useEffect } from "react";
import "./Hotel_Homepage.css";
import { FaSearch, FaStar, FaWifi, FaCar, FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
// Fetch hotels from backend (Vite env var VITE_HOTELS_API_BASE)
const HOTELS_API_BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_HOTELS_API_BASE) ? import.meta.env.VITE_HOTELS_API_BASE : "https://paid-project.onrender.com";
export default function Hotel_Homepage() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedRating, setSelectedRating] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredHotels = hotels.filter((hotel) => {
    const name = hotel && hotel.name ? String(hotel.name) : '';
    const price = hotel && typeof hotel.price === 'number' ? hotel.price : 0;
    const rating = hotel && typeof hotel.rating === 'number' ? hotel.rating : 0;

    const matchesSearch = name.toLowerCase().includes(String(search || '').toLowerCase());
    const matchesPrice = price >= priceRange.min && price <= priceRange.max;
    const matchesRating = selectedRating.length === 0 || selectedRating.includes(Math.floor(rating));
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

  // --- Derived stats from fetched hotels ---
  const totalHotels = hotels.length;
  const avgPrice = Math.round(hotels.reduce((s, h) => s + (h.price || 0), 0) / Math.max(1, totalHotels));
  const hotelsWithWifi = hotels.filter(h => h.amenities && h.amenities.some(a => /wifi/i.test(a))).length;
  const wifiPercent = Math.round((hotelsWithWifi / Math.max(1, totalHotels)) * 100);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
  // loading is initialized to true; reset error before fetch if needed

    fetch(`${HOTELS_API_BASE}/hotels`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Failed to fetch hotels: ${res.status} ${text}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        if (!Array.isArray(data)) {
          // If backend returns object with data property
          const arr = Array.isArray(data.data) ? data.data : [];
          setHotels(arr);
        } else {
          setHotels(data);
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error('Error fetching hotels', err);
        setError(err.message || 'Unknown error');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
      controller.abort();
    };
  }, []);

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
            <h2>{totalHotels}</h2>
            <p>Available Hotels</p>
          </div>
          <div className="stat-card">
            <h2>₹{avgPrice.toLocaleString()}</h2>
            <p>Average Price</p>
          </div>
          <div className="stat-card">
            <h2>{wifiPercent}%</h2>
            <p>Hotels with WiFi</p>
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
                {[5, 4, 3, 2, 1].map((rating) => (
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
              {loading && <div className="loading">Loading hotels...</div>}
              {error && <div className="error">Error: {error}</div>}
              {!loading && !error && sortedHotels.length === 0 && (
                <div className="no-results">No hotels found</div>
              )}

              {!loading && !error && sortedHotels.map((hotel, idx) => (
                <div key={hotel.id || `${hotel.name}-${idx}`} className="hotel-property-card">
                  <div className="property-image">
                    <img src={hotel.image} alt={hotel.name} />
                  </div>
                  
                  <div className="property-content">
                    <h3 className="property-title">{hotel.name}</h3>

                    <p className="property-description">
                      {hotel.description && (hotel.description.length > 160 ? hotel.description.substring(0, 157) + '...' : hotel.description)}
                    </p>

                    <div className="property-location">
                      <FaMapMarkerAlt /> {hotel.location}, Kishanganj
                    </div>

                    <div className="property-footer">
                      <div className="property-price">
                        <span className="price-label">₹{hotel.price}</span>
                        <span className="price-period">/Night</span>
                      </div>

                      <div className="property-rating">
                        <span className="rating-badge">{Math.round((hotel.rating || 0) / 2)}</span>
                      </div>
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
