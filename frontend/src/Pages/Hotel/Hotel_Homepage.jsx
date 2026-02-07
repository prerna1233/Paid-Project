import React, { useState } from "react";
import "./Hotel_Homepage.css";
import HOTELS_DATABASE from "./Hotel";
import { FaSearch } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";


export default function Hotel_Homepage() {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Get unique locations from database
  const locations = [...new Set(HOTELS_DATABASE.map(hotel => hotel.location))];

  // Filter hotels based on search, location, and price
  const filteredHotels = HOTELS_DATABASE.filter((hotel) => {
    const matchesSearch = hotel.name.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = selectedLocation === "" || hotel.location === selectedLocation;
    
    let matchesPrice = true;
    if (priceRange === "budget") {
      matchesPrice = hotel.price <= 2000;
    } else if (priceRange === "mid-range") {
      matchesPrice = hotel.price > 2000 && hotel.price <= 4000;
    } else if (priceRange === "luxury") {
      matchesPrice = hotel.price > 4000;
    }
    
    return matchesSearch && matchesLocation && matchesPrice;
  });

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Find your next stay</h1>
        <p>Search deals on hotels, homes, and much more...</p>

        {/* SEARCH BAR */}
        <div className="search-box">
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search hotels by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="location-filter-group">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="price-filter-group">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="budget">Budget (Under Rs 2,000)</option>
              <option value="mid-range">Mid-range (Rs 2,000-Rs 4,000)</option>
              <option value="luxury">Luxury (Above Rs 4,000)</option>
            </select>
          </div>

          <button className="Search_btn">
            <FaSearch/>
            Search
          </button>
        </div>
      </div>

      {/* HOTEL LIST */}
      <div className="hotel-section">
        <div className="section-header">
          <h2>Featured Hotels</h2>
          <p>Discover the best accommodation options in Kishanganj</p>
        </div>
        
        <div className="Hotel_page">
          {filteredHotels.map((item) => (
            <div key={item.id} className="hotel-card">
              <div className="hotel-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="hotel-content">
                <div className="hotel-header">
                  <h3 className="hotel-name">{item.name}</h3>
                  <p className="hotel-location">{item.location} • {item.distance}</p>
                </div>
                
                <div className="hotel-description">
                  <p>Experience luxury and comfort at its finest. Modern amenities, exceptional service, and prime location make this the perfect choice for your stay.</p>
                </div>
                
                <div className="hotel-amenities">
                  {item.amenities.map((amenity, index) => (
                    <span key={index} className="amenity-tag">{amenity}</span>
                  ))}
                </div>
                
                <div className="hotel-footer">
                  <div className="hotel-pricing">
                    <span className="price">₹{item.price.toLocaleString()}</span>
                    <span className="price-period">per night</span>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}